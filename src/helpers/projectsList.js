


import shotGs1 from "./../img/shots/greenshop-1.png"
import shotGs2 from "./../img/shots/greenshop-2.png"
import shotGsM from "./../img/shots/greenshop-m.png"
import shotGsM2 from "./../img/shots/greenshop-m2.png"
import shotBody1 from "./../img/shots/body-1.png"
import shotBody2 from "./../img/shots/body-2.png"
import shotBodyM from "./../img/shots/body-m.png"
import shotBodyM2 from "./../img/shots/body-m2.png"
import shotTw1 from "./../img/shots/tailwind-1.png"
import shotTw2 from "./../img/shots/tailwind-2.png"
import shotTwM from "./../img/shots/tailwind-m.png"
import shotTwM2 from "./../img/shots/tailwind-m2.png"

import shotWed1 from "./../img/shots/wedding-1.png"
import shotAly1 from "./../img/shots/alyona-1.png"
import shotTat1 from "./../img/shots/tattoo-1.png"

const projects = [
  {
    title: "Alyona Tkachenko — Portfolio",
    description: "Portfolio website for a UI/UX designer, built for a client. Implemented from a Figma design.",
    skills: "React, Figma design",
    img: shotAly1,
    imgBig: shotAly1,
    demoVersion: "https://alyona-tkachenko-portfolio.netlify.app/",
  },
  {
    title: "Wedding Invitation",
    description: "Animated online wedding invitation. Implemented from a Figma design.",
    skills: "React, Vite, Figma design",
    img: shotWed1,
    imgBig: shotWed1,
    demoVersion: "https://wedding-invitation-p-a.netlify.app/",
  },
  {
    title: "GreenShop App",
    skills:
      "React, Redux-Toolkit, Redux-Thunk, reselect, axios, framer-motion, react-carousel-minimal, react-content-loader",
    description: "Site development from scratch and from the layout of Figma ",
    noMobile: true,
    img: shotGs1,
    imgBig: shotGs1,
    shots: { desktop: shotGs1, full: shotGs2, mobile: shotGsM, mobileFull: shotGsM2 },
    gitHubLink: "https://github.com/Moskvin23/greenshop",
    demoVersion: "https://greenshop-app.netlify.app/",
  },
  {
    title: "Tattoo Studio",
    description: "Landing site and works gallery for a tattoo studio.",
    skills: "React",
    img: shotTat1,
    imgBig: shotTat1,
    demoVersion: "https://react-tattoo-studio.netlify.app/",
  },
  {
    title: "BODY - Fitness site",
    description: "Multi-section fitness club landing with scroll animations, lottie and GSAP effects.",
    img: shotBody1,
    imgBig: shotBody1,
    shots: { desktop: shotBody1, full: shotBody2, mobile: shotBodyM, mobileFull: shotBodyM2 },
    skills:
      "React, intersection observer, spinners, react-lottie (slider), aos, gsap (animation libraries)",
    gitHubLink: "https://github.com/Moskvin23/fitness-site-body",
    demoVersion: "https://react-body-fitness.netlify.app/",
  },
  {
    title: "Tailwind Site",
    description: "Responsive analytics landing built from scratch with Tailwind CSS and a typed hero.",
    img: shotTw1,
    imgBig: shotTw1,
    shots: { desktop: shotTw1, full: shotTw2, mobile: shotTwM, mobileFull: shotTwM2 },
    skills: "Tailwind CSS, React-Typed, Responsive website from scratch",
    gitHubLink: "https://github.com/Moskvin23/practice-with-tailwind",
    demoVersion: "https://practice-tailwind-css.netlify.app/",
  },
]

export { projects }
