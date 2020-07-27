import React from "react";
import { BoxProps } from "ioc_root";
import "./LRBox.css";

export function LRBox({ children }: BoxProps) {
  return <lr-box>{children}</lr-box>;
}
