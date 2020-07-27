import { IoCContext, Box, Button, TextInput } from "ioc_root";
import { LRBox } from "./Components/Box/LRBox";
import { LRButton } from "./Components/Button/LRButton";
import { LRTextInput } from "./Components/TextInput/LRTextInput";

declare module "react" {
    namespace JSX {
        interface IntrinsicElements {
            [elementName: string]: any;
         }
    }
}

export * from "./Sample/Sample";

export function registerWithIoc(context: IoCContext) {
    context.register(Box, LRBox);
    context.register(Button, LRButton);
    context.register(TextInput, LRTextInput);
}