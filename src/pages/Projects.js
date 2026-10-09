import Project from "../components/project/Project"
import { projects } from "./../helpers/projectsList"
import { useLang } from "../i18n/LangContext"

const Projects = () => {
  const { t, projectText } = useLang()

  return (
    <main className="section">
      <div className="container">
        <p className="eyebrow">{t.projects.work}</p>
        <h1 className="title-1">{t.projects.selected}</h1>
        <ul className="projects">
          {projects.map((project, index) => (
            <Project
              key={project.title}
              title={project.title}
              img={project.img}
              index={index}
              skills={project.skills}
              description={projectText(project)}
            />
          ))}
        </ul>
      </div>
    </main>
  )
}

export default Projects
