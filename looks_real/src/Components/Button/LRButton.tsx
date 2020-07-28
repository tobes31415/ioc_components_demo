import React from "react";
import { ButtonProps } from "ioc_root";
import "./LRButton.css";

export function LRButton({children, onClick}: ButtonProps) {
    return <lr-button onClick={onClick}>{children}</lr-button>
}