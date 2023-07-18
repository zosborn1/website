import { JSX } from "react/jsx-runtime";

export interface IZOButtonProps {
    children?: JSX.Element | JSX.Element[];
    height?: string;
    width?: string;
    label?: string;
    fontSize?: string;
    onClick: () => void;
}