import { parseStyle } from "./piw-utils-internal";
import { TabsPreviewProps } from "../typings/TabsProps";
import { createElement } from "react";

declare function require(name: string): string;

export function preview(props: TabsPreviewProps) {
    return <div style={parseStyle(props.style)}></div>;
}

export function getPreviewCss(): string {
    return require("./ui/index.scss");
}
