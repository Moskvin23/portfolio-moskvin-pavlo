import Project from "../components/project/Project"
import { projects } from "./../helpers/projectsList"

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <p className="eyebrow">Work</p>
        <h1 className="title-1">Selected projects</h1>
        <ul className="projects">
          {projects.map((project, index) => (
            <Project
              key={project.title}
              title={project.title}
              img={project.img}
              index={index}
              skills={project.skills}
              description={project.description}
            />
          ))}
        </ul>
      </div>
    </main>
  )
}

export default Projects
