import { keyframes, styled } from "styled-components";
import Footer from "../components/organisms/Footer/Footer";
import { NavLink } from "react-router-dom";

export const PageColorWrapper = styled.body`
  height: 100vh;
  width: 100%
  background-color: rgba(249,246,240,255);
`;

export const FooterPadding = styled(Footer)`
  //padding-top: 100px;
`;

export const ZOLink = styled(NavLink )`
    font-size: 25px;
    font-weight: 500;
    flex-wrap: wrap;
    padding: 5px;
    margin: 10px;
    color: rgba(15,34,45,255);
    border: 1px solid rgb(78,47,48,255);
    border-radius: 10px;
    background: rgb(255, 152, 100);
    text-decoration: none;
`;

export const SlideColumn = styled.div`
    //border: red solid 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const SlideRow = styled.div`
    //border: grey solid 1px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: start;
    flex-direction: row;
`;

export const SubHeader = styled.h1`
    font-size: 30px;
    color: rgba(15,34,45,255);
    align: center;
    weight: 600;
    text-decoration: underline;
`;

export const SubInfo = styled.h2`
    font-size: 18px;
    weight: 400;
    color: rgba(15,34,45,255);
    line-height: 22px;
    align: left;
`;