const profile = {
  name: "Pavlo Moskvin",
  role: "Web Developer",
  location: "Lviv, Ukraine",
  about:
    "Web developer with over 3 years of experience building web applications with modern libraries and frameworks. I focus on scalability, performance, typing and clean code, and I'm growing towards Fullstack development in large, ambitious projects.",
  cv: "/Moskvin-Pavlo-CV.pdf",
  stats: [
    { value: "3+", label: "years of experience" },
    { value: "Mapbox", label: "geodata & real-time maps" },
    { value: "TS", label: "typed, scalable code" },
  ],
  skills: [
    {
      group: "Frontend",
      items: ["React", "Redux", "TypeScript", "JavaScript (ES6+)", "Material-UI", "SASS"],
    },
    { group: "Integrations", items: ["Mapbox GL", "REST API", "Axios", "WebSockets"] },
    { group: "Tools", items: ["ESLint", "Prettier", "Git", "Webpack", "Chrome DevTools"] },
    { group: "Methodologies", items: ["Agile", "Scrum"] },
    {
      group: "Also worked with",
      items: ["HTML5", "CSS3", "Tailwind CSS", "Redux Toolkit", "Node.js", "Figma"],
    },
  ],
  experience: [
    {
      company: "Feodal",
      title: "Frontend Engineer",
      period: "May 2023 — Present",
      points: [
        "Integrated interactive Mapbox GL maps: geodata visualization, markers and advanced geolocation features.",
        "Built components for editing and displaying geographic objects (polygons) with high accuracy and usability.",
        "Developed real-time equipment tracking modules driven by API data and rendered on the map.",
        "Optimized performance for large datasets — faster rendering, request optimization and data caching.",
        "Introduced TypeScript, reducing runtime errors and improving maintainability.",
        "Took part in architecture and technology decisions; worked closely with backend on API integration.",
      ],
    },
  ],
  education: [
    { place: "SoftServe IT Academy", title: "Frontend Developer Intern", period: "2021 — 2022" },
    {
      place: "Lviv Polytechnic National University",
      title: "Mechanical Engineering, Master's Degree",
      period: "2013 — 2018",
    },
  ],
  contacts: {
    email: "23moskvin@gmail.com",
    phone: "+380508613233",
    phoneLabel: "+38 (050) 861 32 33",
    telegram: "https://t.me/pavlo2323",
    github: "https://github.com/Moskvin23",
    linkedin: "https://www.linkedin.com/in/moskvin23/",
    twitter: "https://twitter.com/moskvin23",
  },
}

export { profile }
