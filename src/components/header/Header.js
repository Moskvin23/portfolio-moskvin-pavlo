import "./style.css"
import pic from "./../../img/photo_2019-06-26_19-58-27.jpg"
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <div className="image_effect">
            <img src={pic} alt="the main image"></img>
          </div>
          <h1 className="header__title">
            <strong>
              Hi, my name is <em>Pavlo Moskvin</em>
            </strong>
            <br /> Frontend / Web Developer
          </h1>
          <div className="header__text">
            <p>with passion for learning and creating.</p>
          </div>
          <a
            href="https://drive.google.com/file/d/1qVnZoxg8XWToOWMZ1cQ5i-8N3hLEaNxV/view?usp=sharing"
            className="btnDownload"
            target="_blank">
            Download CV
          </a>
        </div>
      </header>
    </>
  )
}

export default Header
