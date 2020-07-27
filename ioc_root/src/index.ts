import { DI } from "@tobes31415/dependency-injection";

const token = {}; 

DI.useObject(token, {abc:123});

export default function() {
    console.log("Hello World");
}

export * from "./Sample/Sample";