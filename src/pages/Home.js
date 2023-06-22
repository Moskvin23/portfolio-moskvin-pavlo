import Header from "./../components/header/Header"

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2" style={{ color: "#5c62ec" }}>
                Frontend
              </h2>
              <p>
                JavaScript, ReactJS, React-router, React-hooks, Redux-Toolkit, Redux, HTML5, CSS3,
                SCSS, SASS, NPM, YARN, MaterialUI, Yarn, Sass,Tailwind, Figma, Git, GitHub,
                Semantic, adaptive Layout, Figma
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2" style={{ color: "#5c62ec" }}>
                Backend
              </h2>
              <p>NodeJS, AJAX, REST API, JSON, Axios, Fetch</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}

export default Home
