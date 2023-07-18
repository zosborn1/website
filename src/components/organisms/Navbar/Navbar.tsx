import { JSX } from "react/jsx-runtime";
import { INavBarProps } from "./types";
import { 
  ZONoneMobileContent,
  ZOToolbar,
  ZOHomeButton,
  ZOLogo
} from "./styles";
import logo from '../../../assets/navLogo.jpg';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ZOLink } from "../../../styles/global-styles";

const Navbar = ({ children }: INavBarProps): JSX.Element => {

  const menuSelections = [
    {title: 'About', url: '/about'},
    {title: 'Presentation', url: '/presentation'}
  ]

  return (
    <ZOToolbar
      variant="dense"
      sx={{ justifyContent: 'center', overflowX: 'auto', alignContent: 'center' }}
    >
      <ZOHomeButton>
        <Link
          to='/'
          >
            <HomeIcon fontSize='large' style={{fill: 'rgba(235,231,217,255)'}}/>
          </Link>
          <Link
          to="https://www.linkedin.com/in/zachosborn/"  target="_blank"
          >
            <LinkedInIcon fontSize='large' style={{fill: 'rgba(235,231,217,255)'}}/>
          </Link>
      </ZOHomeButton>
      <ZOLogo>
        <img 
            style={{height: 80}} 
            src={logo} 
            loading="lazy" 
            alt="logo"
        />
      </ZOLogo>
      <ZONoneMobileContent >
        {menuSelections.map((section) => (
          <ZOLink
            key={section.title}
            to={section.url}
          >
            {section.title}
          </ZOLink>
        ))}
      </ZONoneMobileContent>
    </ZOToolbar>
  )
}
export default Navbar;