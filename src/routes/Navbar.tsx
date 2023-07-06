import { Link } from "react-router-dom"

const Navbar = (props: any) => {
    return (
        <div>
              <Link to="/">Home</Link>
              <Link to="/presentation">Intern Presentation</Link>
              <Link to="/about">About</Link>
        </div>
  )
}
export default Navbar;