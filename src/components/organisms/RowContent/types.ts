import { JSX } from "react/jsx-runtime";
import { StringLiteral, isStringLiteral } from "typescript";

export interface IRowContentProps {
    children?: JSX.Element | JSX.Element[];
    rowHeight?: string;
    rowWidth?: string;
    contentHeight?: string;
    contentWidth?: string;
    imageHeight?: string;
    content?: any;
    imageSrc?: string;
}