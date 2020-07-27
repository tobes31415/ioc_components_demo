import React, { createContext, useContext } from "react";
import { DI, DIContext, createRoot } from "@tobes31415/dependency-injection";
import { Component } from "./interfaces/Component";

const DIContextSymbol: unique symbol = Symbol("Di Context");

export interface IoCContext {
    register<T>(token: Component<T>, implementation: Component<T>): void;
}

function createIoCContext(diContext: DIContext) {
  const result: IoCContext = {
    register: (token, implementation) => diContext.useObject(token, implementation)
  };
  (result as any)[DIContextSymbol] = diContext;
  return result;
}

export function createNewIocContext() {
  return createIoCContext(createRoot());
}

const IoCReactContext = createContext<IoCContext | undefined>(undefined); //nevr actually used

export function useResolve<T>(token: Component<T>): Component<T> {
  const di = useContext(IoCReactContext);
  if (!di) {
    throw new Error("You need to create an IoC Context using the createNwIocContext function, and then attach to the DOM <IocRoot di={context}>")
  }
  try {
  const impl = (di as any)[DIContextSymbol].resolve(token);
  if (impl === token) {
    throw new Error("There is no registered implementation for this Component: "+ token);
  }
  return impl;
}
catch(err){
  throw new Error("Error while creating "+ token+", make sure you've actually registered an implementation")
}
}

export function IoCRoot({
  children,
  IoCContext
}: {
  children?: React.ReactNode;
  IoCContext: IoCContext;
}) {
  return <IoCReactContext.Provider value={IoCContext}>{children}</IoCReactContext.Provider>;
}
