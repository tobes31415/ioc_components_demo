import React from "react";
import { ButtonProps } from "ioc_root";
import "./NSButton.css";

export function NSButton({ children, onClick }: ButtonProps) {
  return (
    <ns-button onClick={onClick}>
      {children}
    </ns-button>
  );
}
