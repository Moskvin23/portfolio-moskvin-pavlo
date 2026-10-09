import Header from "./../components/header/Header"
import { profile } from "../helpers/profile"
import { useLang } from "../i18n/LangContext"

const Home = () => {
  const { t } = useLang()

  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="container">
            <p className="eyebrow">{t.home.stack}</p>
            <h2 className="title-2">{t.home.skills}</h2>
            <div className="skills">
              {profile.skills.map((s) => (
                <div className="card" key={s.group}>
                  <h3 className="card__title">{t.skillGroups[s.group]}</h3>
                  <ul className="tags">
                    {s.items.map((item) => (
                      <li className="tag" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container two-col">
            <div>
              <p className="eyebrow">{t.home.career}</p>
              <h2 className="title-2">{t.home.experience}</h2>
              {profile.experience.map((company) => {
                const job = t.experience[company]
                return (
                  <article className="card" key={company}>
                    <div className="timeline__head">
                      <div>
                        <h3 className="card__title">{job.title}</h3>
                        <p className="accent-text">{company}</p>
                      </div>
                      <span className="period">{job.period}</span>
                    </div>
                    <ul className="bullets">
                      {job.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </article>
                )
              })}
            </div>
            <div>
              <p className="eyebrow">{t.home.learning}</p>
              <h2 className="title-2">{t.home.education}</h2>
              <div className="stack">
                {profile.education.map((key) => {
                  const e = t.education[key]
                  return (
                    <article className="card" key={key}>
                      <span className="period">{e.period}</span>
                      <h3 className="card__title">{e.title}</h3>
                      <p className="muted">{e.place}</p>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
