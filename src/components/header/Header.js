import "./style.css"
import { NavLink } from "react-router-dom"
import pic from "./../../img/photo_2019-06-26_19-58-27.jpg"
import { profile } from "../../helpers/profile"

const Header = () => {
  return (
    <header className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="badge">
            <span className="badge__dot" /> Open to new opportunities
          </span>
          <h1 className="hero__title">
            Hi, I'm <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="hero__role">{profile.role}</p>
          <p className="hero__text">{profile.about}</p>
          <div className="hero__actions">
            <a href={profile.cv} className="btn" download="Moskvin-Pavlo-CV.pdf">
              Download CV
            </a>
            <NavLink to="/contacts" className="btn btn--ghost">
              Get in touch
            </NavLink>
          </div>
          <ul className="hero__stats">
            {profile.stats.map((s) => (
              <li key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="hero__photo">
          <img src={pic} alt={profile.name} />
        </div>
      </div>
    </header>
  )
}

export default Header
