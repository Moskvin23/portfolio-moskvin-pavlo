import { useParams } from "react-router-dom"
import BtnGitHub from "../components/btnGitHub/BtnGitHub"
import { projects } from "./../helpers/projectsList"

const Project = () => {
  const { id } = useParams()
  const project = projects[id]

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img src={project.imgBig} alt={project.title} className="project-details__cover" />
          <p>{project.description}</p>
          <div className="project-details__desc">
            <p></p>
            <p style={{ lineHeight: "1.7" }}>Skills: {project.skills}</p>
          </div>

          {project.gitHubLink && <BtnGitHub link={project.gitHubLink} target="_blank" />}
          {project.demoVersion && (
            <a
              style={{
                color: "#5c62ec",
                marginTop: "20px",
                fontSize: "24px",
                textDecoration: "none",
                transition: "color 0.3s ease-in-out, transform 0.4s ease-in-out",
              }}
              href={project.demoVersion}
              target="_blank"
              rel="noopener noreferrer"
              onMouseOver={(e) => {
                e.target.style.color = "#3d47af"
                e.target.style.transform = "scale(1.12)"
              }}
              onMouseOut={(e) => {
                e.target.style.color = "#5c62ec"
                e.target.style.transform = "scale(1)"
              }}>
              Demo Version
            </a>
          )}
        </div>
      </div>
    </main>
  )
}

export default Project
