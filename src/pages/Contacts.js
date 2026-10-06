import { BsEnvelope, BsGithub, BsLinkedin, BsTelegram, BsTelephone, BsGeoAlt } from "react-icons/bs"
import { profile } from "../helpers/profile"

const { contacts } = profile

const items = [
  { icon: <BsEnvelope />, label: "Email", value: contacts.email, href: `mailto:${contacts.email}` },
  {
    icon: <BsTelephone />,
    label: "Phone · Viber · WhatsApp",
    value: contacts.phoneLabel,
    href: `tel:${contacts.phone}`,
  },
  { icon: <BsTelegram />, label: "Telegram", value: "@pavlo2323", href: contacts.telegram },
  { icon: <BsLinkedin />, label: "LinkedIn", value: "in/moskvin23", href: contacts.linkedin },
  { icon: <BsGithub />, label: "GitHub", value: "Moskvin23", href: contacts.github },
  { icon: <BsGeoAlt />, label: "Location", value: profile.location },
]

const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <p className="eyebrow">Contacts</p>
        <h1 className="title-1">Let's work together</h1>
        <p className="lead">Have a project or an opening in mind? Reach out through any channel below.</p>
        <ul className="contacts">
          {items.map((item) => {
            const content = (
              <>
                <span className="contact__icon">{item.icon}</span>
                <span>
                  <span className="contact__label">{item.label}</span>
                  <span className="contact__value">{item.value}</span>
                </span>
              </>
            )
            return (
              <li key={item.label}>
                {item.href ? (
                  <a className="card contact" href={item.href} target="_blank" rel="noreferrer">
                    {content}
                  </a>
                ) : (
                  <div className="card contact">{content}</div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </main>
  )
}

export default Contacts
