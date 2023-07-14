import { JSX } from "react/jsx-runtime";
import { isStringLiteral } from "typescript";

export interface IRowContentProps {
    children?: JSX.Element | JSX.Element[];
    height?: string;
    width?: string;
    content?: any;
    imageSrc?: string;
}