import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { IZOBoxProps } from "./types";
import { JSX } from "react/jsx-runtime";
import { ContentWrapper } from "./styles";


const ZOBox = ({ content, height, width, children }: IZOBoxProps): JSX.Element => {
    return (
        <ContentWrapper
        sx={{height: {height}, width: {width}}}>
          <Container>
              {content}
          </Container>
        </ContentWrapper>
    );
}
export default ZOBox