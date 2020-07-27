import React from "react";
import { BoxProps } from "ioc_root";
import "./NSBox.css";

export function NSBox({ children }: BoxProps) {
  return <ns-box>{children}</ns-box>;
}
