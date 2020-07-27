import React from "react";
import { ButtonProps } from "ioc_root";

export function LRButton({children, onClick}: ButtonProps) {
    return <lr-button><button onClick={onClick}>{children}</button></lr-button>
}