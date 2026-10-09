import "./style.css"
import { BsGithub, BsLinkedin, BsTelegram, BsTwitter } from "react-icons/bs"
import { profile } from "../../helpers/profile"
import { useLang } from "../../i18n/LangContext"

const { contacts } = profile

const links = [
  { href: contacts.github, icon: <BsGithub />, label: "GitHub" },
  { href: contacts.linkedin, icon: <BsLinkedin />, label: "LinkedIn" },
  { href: contacts.telegram, icon: <BsTelegram />, label: "Telegram" },
  { href: contacts.twitter, icon: <BsTwitter />, label: "Twitter" },
]

const Footer = () => {
  const { t } = useLang()

  return (
    <footer className="footer">
      <div className="container footer__wrapper">
        <p className="footer__copy">
          © {new Date().getFullYear()} {t.name}
        </p>
        <ul className="social">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noreferrer" aria-label={l.label} className="social__link">
                {l.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
