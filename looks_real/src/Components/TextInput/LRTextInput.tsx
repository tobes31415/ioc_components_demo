import React, { useCallback } from "react";
import { TextProps } from "ioc_root";
import "./LRTextInput.css";

export function LRTextInput({ value, onChange }: TextProps) {
  const onChangeWrapper = useCallback((e) => onChange(e.target.value), [
    onChange,
  ]);

  return (
    <lr-input-text>
      <input value={value} onChange={onChangeWrapper}></input>
    </lr-input-text>
  );
}
