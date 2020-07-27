import { IoCContext, Box, Button, TextInput } from "ioc_root";
import { NSBox } from "./Components/Box/NSBox";
import { NSButton } from "./Components/Button/NSButton";
import { NSTextInput } from "./Components/TextInput/NSTextInput";


export * from "./Sample/Sample";

declare module "react" {
    namespace JSX {
        interface IntrinsicElements {
            [elementName: string]: any;
         }
    }
}

export function registerWithIoc(context: IoCContext) {
    context.register(Box, NSBox);
    context.register(Button, NSButton);
    context.register(TextInput, NSTextInput);
}