import { ProjectElementProp } from "./components/Projects/ProjectsElement";
import { skillElementProp } from "./components/Skills";

export const projectsData: ProjectElementProp[] = [
  {
    name: "Restaurant App",
    img: "/img/restaurant-page.jpg",
    alt: "A Restaurant Page made with plain javascript",
    text: "A Restaruant Page created for the restaurant Apprendista with plain HTML, CSS ans Javascript",
    githubLink: "https://github.com/JuanGuerrero09/restaurant-page",
    livePreviewLink: 'https://juanguerrero09.github.io/restaurant-page/'
  },
  {
    name: "Etch a sketch",
    img: "/img/etch-a-sketch.jpg",
    alt: "An Etch a sketch game with plain javascript",
    text: "This Etch a Sketch was created with HTML, CSS and Vanilla Javascript",
    githubLink: "https://github.com/JuanGuerrero09/etch-a-sketch",
    livePreviewLink: 'https://juanguerrero09.github.io/etch-a-sketch/'
  },
  {
    name: "Library app",
    img: "/img/library.jpg",
    alt: "A Library app with plain javascript",
    text: "This Library app was created with HTML, CSS and Vanilla Javascript, it keeps the items in the library by using local storage.",
    githubLink: "https://github.com/JuanGuerrero09/library",
    livePreviewLink: 'https://juanguerrero09.github.io/library/'
  },
  {
    name: "Currency Converter",
    img: "/img/currency-converter.jpg",
    alt: "A Currency Converter app",
    text: "This Currency Converter is created using React and useContext, it's interactive and it changes all the currencies as soon as you change one.",
    githubLink: "https://github.com/JuanGuerrero09/library",
    livePreviewLink: 'https://juanguerrero09.github.io/library/'
  },
  {
    name: "Which country has more?",
    img: "/img/countries-population.jpg",
    alt: "An Etch a sketch game with plain javascript",
    text: "This is a countries game based in the popular Higher or Lower for geography fans (like me), it uses Tailwind, Vanilla Javascript, Vite and the Rest Countries API",
    githubLink: "https://github.com/JuanGuerrero09/countries-population",
    livePreviewLink: 'https://countries-population-juanguerrero09.vercel.app'
  },
  {
    name: "Which country has more? (React)",
    img: "/img/countries-population-react.png",
    alt: "An Etch a sketch game with plain javascript",
    text: "This is a React version from the Which country has more? game, now adding Typescript instead of Javascript and with components styled from Chakra UI and Tailwind (and with dark mode)",
    githubLink: "https://https://github.com/JuanGuerrero09/countries-population-react",
    livePreviewLink: 'https://countries-population-react.vercel.app'
  },
  {
    name: "W2A2 (While we are away)",
    img: "/img/w2a2.png",
    alt: "An Etch a sketch game with plain javascript",
    text: `This is a Full Stack Web App created with Node, React, Express, MongoDB and Typescript (Still in development, API deployed, for more information go to the repository). It's an App for couples with the features of sending and receving notes and draws.`,
    githubLink: "https://github.com/JuanGuerrero09/w2a2",
  },
];

export const skillsData: skillElementProp[] = [
  {
    name: 'HTML',
    icon: "devicon-html5-plain"
  },{
    name: 'CSS',
    icon: "devicon-css3-plain"
  },{
    name: 'Javascript',
    icon: "devicon-javascript-plain"
  },{
    name: 'Tailwind',
    icon: "devicon-tailwindcss-plain"
  },{
    name: 'React',
    icon: "devicon-react-original"
  },{
    name: 'Typescript',
    icon: "devicon-typescript-plain"
  }
]
