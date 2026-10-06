import { Link, useParams } from "react-router-dom"
import BtnGitHub from "../components/btnGitHub/BtnGitHub"
import Preview from "../components/preview/Preview"
import { projects } from "./../helpers/projectsList"

const Project = () => {
  const { id } = useParams()
  const project = projects[id]

  if (!project) {
    return (
      <main className="section">
        <div className="container">
          <h1 className="title-1">Project not found</h1>
          <Link to="/projects" className="btn">
            Back to projects
          </Link>
        </div>
      </main>
    )
  }

  const nextId = (Number(id) + 1) % projects.length
  const next = projects[nextId]

  return (
    <main className="section">
      <div className="container">
        <Link to="/projects" className="back-link">
          ← All projects
        </Link>
        <div className="case">
          <aside className="case__side">
            <p className="eyebrow">Case study · {String(Number(id) + 1).padStart(2, "0")}</p>
            <h1 className="case__title">{project.title}</h1>
            {project.description && <p className="lead">{project.description}</p>}

            <h3 className="case__label">Stack</h3>
            <ul className="tags">
              {project.skills.split(",").map((s) => (
                <li className="tag" key={s}>
                  {s.trim()}
                </li>
              ))}
            </ul>

            <div className="case__actions">
              {project.demoVersion && (
                <a href={project.demoVersion} className="btn" target="_blank" rel="noopener noreferrer">
                  Open live site ↗
                </a>
              )}
              {project.gitHubLink && <BtnGitHub link={project.gitHubLink} />}
            </div>

            <Link to={`/project/${nextId}`} className="case__next">
              Next project <strong>{next.title} →</strong>
            </Link>
          </aside>

          <div className="case__main">
            <Preview key={id} project={project} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Project
