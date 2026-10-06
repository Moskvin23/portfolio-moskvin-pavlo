import { Link } from "react-router-dom"
import "./style.css"

const Project = ({ title, img, index, skills, description }) => {
  const tags = skills ? skills.split(",").slice(0, 4) : []

  return (
    <li className="project">
      <Link to={`/project/${index}`} className="project__link">
        <div className="project__info">
          <span className="project__num">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="project__title">{title}</h3>
          {description && <p className="project__desc">{description}</p>}
          <ul className="tags">
            {tags.map((t) => (
              <li className="tag" key={t}>
                {t.trim()}
              </li>
            ))}
          </ul>
          <span className="project__more">View case study →</span>
        </div>
        <div className="project__media">
          <div className="project__bar">
            <i /> <i /> <i />
          </div>
          <img src={img} alt={title} className="project__img" />
        </div>
      </Link>
    </li>
  )
}

export default Project
