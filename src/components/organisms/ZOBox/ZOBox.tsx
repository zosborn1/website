import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { IZOBoxProps } from "./types";
import { JSX } from "react/jsx-runtime";
import { ContentWrapper } from "./styles";


const ZOBox = ({ height, width, children }: IZOBoxProps): JSX.Element => {
    return (
        <ContentWrapper
        sx={{height: {height}, width: {width}}}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Welcome
            </Typography>
            <Typography variant="h4" align="center" color="rgba(235,231,217,255)" paragraph>
              My name is Zach Osborn
            </Typography>
            <br/>
            <Typography variant="h5" align="center" color="rgba(235,231,217,255)" paragraph>
              Please checkout:
            </Typography>
            <Typography variant="h6" align="left" color="rgba(235,231,217,255)" paragraph>
              - About page - to learn a little more about me
            </Typography>
            <Typography variant="h6" align="left" color="rgba(235,231,217,255)" paragraph>
              - Presentation page - to learn about my current internship at Trustage
            </Typography>
          </Container>
        </ContentWrapper>
    );
}
export default ZOBox