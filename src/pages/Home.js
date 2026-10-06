import Header from "./../components/header/Header"
import { profile } from "../helpers/profile"

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="container">
            <p className="eyebrow">Stack</p>
            <h2 className="title-2">Skills & tools</h2>
            <div className="skills">
              {profile.skills.map((s) => (
                <div className="card" key={s.group}>
                  <h3 className="card__title">{s.group}</h3>
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
              <p className="eyebrow">Career</p>
              <h2 className="title-2">Experience</h2>
              {profile.experience.map((job) => (
                <article className="card" key={job.company}>
                  <div className="timeline__head">
                    <div>
                      <h3 className="card__title">{job.title}</h3>
                      <p className="accent-text">{job.company}</p>
                    </div>
                    <span className="period">{job.period}</span>
                  </div>
                  <ul className="bullets">
                    {job.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div>
              <p className="eyebrow">Learning</p>
              <h2 className="title-2">Education</h2>
              <div className="stack">
                {profile.education.map((e) => (
                  <article className="card" key={e.place}>
                    <span className="period">{e.period}</span>
                    <h3 className="card__title">{e.title}</h3>
                    <p className="muted">{e.place}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
