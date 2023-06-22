import { CiLocationOn } from "react-icons/ci"

const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "2px",
                color: "#5c62ec",
              }}>
              <CiLocationOn style={{ height: "24", width: "24" }} />
              Lviv, Ukraine
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram | Viber | WhatsApp</h2>
            <p>
              <a href="https://t.me/pavlo2323" target="_blank">
                Telegram
              </a>
            </p>
            <p>
              <a href="tel:+380508613233">+ 38 (050) 861 32 33</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email | LinkedIn | GitHub</h2>
            <p>
              <a href="mailto: 23moskvin@gmail.com">23moskvin@gmail.com</a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/moskvin23/">LinkedIn</a>
            </p>
            <p>
              <a href="https://github.com/Moskvin23">GitHub</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default Contacts
