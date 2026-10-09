import { BsGithub } from "react-icons/bs"
import { useLang } from "../../i18n/LangContext"

const BtnGitHub = ({ link }) => {
  const { t } = useLang()

  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn btn--ghost">
      <BsGithub /> {t.projects.github}
    </a>
  )
}

export default BtnGitHub
