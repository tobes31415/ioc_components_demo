import React, { useCallback } from "react";
import { TextProps } from "ioc_root";
import "./NSTextInput.css";

export function NSTextInput({ value, onChange }: TextProps) {
  const onChangeWrapper = useCallback((e) => onChange(e.target.value), [
    onChange,
  ]);

  return (
    <ns-input-text>
      <input value={value} onChange={onChangeWrapper}></input>
    </ns-input-text>
  );
}
