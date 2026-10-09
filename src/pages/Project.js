import { Link, useParams } from "react-router-dom"
import BtnGitHub from "../components/btnGitHub/BtnGitHub"
import Preview from "../components/preview/Preview"
import { projects } from "./../helpers/projectsList"
import { useLang } from "../i18n/LangContext"

const Project = () => {
  const { id } = useParams()
  const { t, projectText } = useLang()
  const project = projects[id]

  if (!project) {
    return (
      <main className="section">
        <div className="container">
          <h1 className="title-1">{t.projects.notFound}</h1>
          <Link to="/projects" className="btn">
            {t.projects.backToProjects}
          </Link>
        </div>
      </main>
    )
  }

  const nextId = (Number(id) + 1) % projects.length
  const next = projects[nextId]
  const description = projectText(project)

  return (
    <main className="section">
      <div className="container">
        <Link to="/projects" className="back-link">
          {t.projects.back}
        </Link>
        <div className="case">
          <aside className="case__side">
            <p className="eyebrow">
              {t.projects.caseStudy} · {String(Number(id) + 1).padStart(2, "0")}
            </p>
            <h1 className="case__title">{project.title}</h1>
            {description && <p className="lead">{description}</p>}

            <h3 className="case__label">{t.projects.stack}</h3>
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
                  {t.projects.openLive}
                </a>
              )}
              {project.gitHubLink && <BtnGitHub link={project.gitHubLink} />}
            </div>

            <Link to={`/project/${nextId}`} className="case__next">
              {t.projects.next} <strong>{next.title} →</strong>
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
