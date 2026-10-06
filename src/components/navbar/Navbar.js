import { NavLink } from "react-router-dom"
import BtnDarkMode from "../btnDarkMode/BtnDarkMode"
import "./style.css"

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/contacts", label: "Contacts" },
]

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container nav-row">
        <NavLink to="/" className="logo">
          <span className="logo__mark">PM</span>
          <span className="logo__text">Pavlo Moskvin</span>
        </NavLink>

        <ul className="nav-list">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end
                className={({ isActive }) => (isActive ? "nav-list__link nav-list__link--active" : "nav-list__link")}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <BtnDarkMode />
      </div>
    </nav>
  )
}

export default Navbar
