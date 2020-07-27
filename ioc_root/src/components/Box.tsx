import { AcceptsChildren } from "../interfaces/AcceptsChildren";
import { useResolve } from "../Ioc";
import React from "react";

export interface BoxProps extends AcceptsChildren {}

export function Box(props: BoxProps): JSX.Element {
    const body = useResolve(Box)(props);
    return <>{body}</>;
}
