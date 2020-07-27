import React from "react";
import { ButtonProps } from "ioc_root";

export function NSButton({ children, onClick }: ButtonProps) {
  return (
    <ns-button>
      <button onClick={onClick}>{children}</button>
    </ns-button>
  );
}
