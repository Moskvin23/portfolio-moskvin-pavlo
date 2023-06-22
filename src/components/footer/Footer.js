import "./style.css"
import twitter from "./../../img/icons/twitter.svg"
import linkedIn from "./../../img/icons/linkedIn.svg"
import gitHub from "./../../img/icons/gitHub.svg"
import { BsTelegram } from "react-icons/bs"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://twitter.com/moskvin23" target="_blank">
                <img src={twitter} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://t.me/pavlo2323" target="_blank">
                <BsTelegram style={{ color: "white", width: "38", height: "38", marginTop: "6" }} />
              </a>
            </li>
            <li className="social__item">
              <a href="https://github.com/Moskvin23" target="_blank">
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.linkedin.com/in/moskvin23/" target="_blank">
                <img src={linkedIn} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p style={{ color: "#5c62ec" }}>© 2023 Moskvin Pavlo</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
