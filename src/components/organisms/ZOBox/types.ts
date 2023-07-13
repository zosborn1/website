import { JSX } from "react/jsx-runtime";

export interface IZOBoxProps {
    children?: JSX.Element | JSX.Element[];
    height?: string;
    width?: string;
    content: any;
}