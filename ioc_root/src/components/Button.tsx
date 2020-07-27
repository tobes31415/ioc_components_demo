import { AcceptsChildren } from "../interfaces/AcceptsChildren";
import { EmitsOnClick } from "../interfaces/EmitsOnClick";
import { DI } from "@tobes31415/dependency-injection";
import { useResolve } from "../Ioc";
import React from "react"

export interface ButtonProps extends AcceptsChildren, EmitsOnClick {}

export function Button(props: ButtonProps): JSX.Element {
  return useResolve(Button)(props);
}
