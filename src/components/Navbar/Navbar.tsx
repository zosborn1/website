import { Link } from "react-router-dom"
import { JSX } from "react/jsx-runtime";
import { INavBarProps } from "./types";
import { 
      NavBarHeaderContentWrapper, 
      NavbarWrapper 
} from "./styles";

const Navbar = ({ children }: INavBarProps): JSX.Element => {
    return (
        <NavbarWrapper>
            <NavBarHeaderContentWrapper>
                  <Link to="/">Home</Link>
                  <Link to="/presentation">Intern Presentation</Link>
                  <Link to="/about">About</Link>
              </NavBarHeaderContentWrapper>
        </NavbarWrapper>
  )
}
export default Navbar;