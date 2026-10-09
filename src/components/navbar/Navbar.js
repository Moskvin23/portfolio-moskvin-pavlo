import { NavLink } from "react-router-dom"
import BtnDarkMode from "../btnDarkMode/BtnDarkMode"
import { useLang } from "../../i18n/LangContext"
import "./style.css"

const Navbar = () => {
  const { t, lang, setLang } = useLang()

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/projects", label: t.nav.projects },
    { to: "/contacts", label: t.nav.contacts },
  ]

  return (
    <nav className="nav">
      <div className="container nav-row">
        <NavLink to="/" className="logo">
          <span className="logo__mark">PM</span>
          <span className="logo__text">{t.name}</span>
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

        <div className="lang" role="group" aria-label="Language">
          {["en", "uk"].map((code) => (
            <button
              key={code}
              className={lang === code ? "lang__btn lang__btn--on" : "lang__btn"}
              onClick={() => setLang(code)}
              aria-pressed={lang === code}>
              {code === "en" ? "EN" : "УК"}
            </button>
          ))}
        </div>

        <BtnDarkMode />
      </div>
    </nav>
  )
}

export default Navbar
