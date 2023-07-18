import { Button } from "@mui/material";
import { IZOButtonProps } from "./types";
import { ButtonWrapper } from "./styles";

const ZOButton = ({ 
    children, 
    height,
    width,
    label,
    onClick,
    fontSize
}: IZOButtonProps): JSX.Element => {

    return (
        <ButtonWrapper
            style={{height: height, width: width, fontSize: fontSize}}
            onClick={onClick}
        >
            {label}
        </ButtonWrapper>
    )

}
export default ZOButton;