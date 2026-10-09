import "./style.css"
import { NavLink } from "react-router-dom"
import pic from "./../../img/photo_2019-06-26_19-58-27.jpg"
import { profile } from "../../helpers/profile"
import { useLang } from "../../i18n/LangContext"

const Header = () => {
  const { t } = useLang()

  return (
    <header className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="badge">
            <span className="badge__dot" /> {t.hero.badge}
          </span>
          <h1 className="hero__title">
            {t.hero.hi} <span className="gradient-text">{t.name}</span>
          </h1>
          <p className="hero__role">{t.hero.role}</p>
          <p className="hero__text">{t.hero.about}</p>
          <div className="hero__actions">
            <a href={profile.cv} className="btn" download="Moskvin-Pavlo-CV.pdf">
              {t.hero.cv}
            </a>
            <NavLink to="/contacts" className="btn btn--ghost">
              {t.hero.touch}
            </NavLink>
          </div>
          <ul className="hero__stats">
            {profile.statValues.map((value, i) => (
              <li key={value}>
                <strong>{value}</strong>
                <span>{t.hero.stats[i]}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="hero__photo">
          <img src={pic} alt={t.name} />
        </div>
      </div>
    </header>
  )
}

export default Header
