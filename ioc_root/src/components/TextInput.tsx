import { AcceptsValue } from "../interfaces/AcceptsValue";
import { EmitsOnChange } from "../interfaces/EmitsOnChange";
import { AcceptsLabel } from "../interfaces/AcceptsLabel";
import { useResolve } from "../Ioc";

export interface TextProps
  extends AcceptsValue<string>,
    EmitsOnChange<string>,
    AcceptsLabel {}

export function TextInput(props: TextProps): JSX.Element {
  return useResolve(TextInput)(props);
}
