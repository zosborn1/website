import { Link } from "react-router-dom"
import { JSX } from "react/jsx-runtime";
import { INavBarProps } from "./types";
import { 
      LinkWrapper,
      NavBarHeaderContentWrapper, 
      NavbarWrapper, 
      ZOLink
} from "./styles";
import { Button } from "@mui/material";

const Navbar = ({ children }: INavBarProps): JSX.Element => {
    return (
        <NavbarWrapper>
            <NavBarHeaderContentWrapper>
                  <LinkWrapper>
                        <ZOLink to="/">Home</ZOLink>
                        {/* <Link to="/presentation">Intern Presentation</Link>
                        <Link to="/about">About</Link> */}
                  </LinkWrapper>
              </NavBarHeaderContentWrapper>
        </NavbarWrapper>
  )
}
export default Navbar;