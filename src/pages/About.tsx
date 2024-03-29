import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function About() {
  return (
    <motion.div
      id="About-Section"
      className="hero min-h-screen bg-base-200 z-10"
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: '100%' }}
      exit={{ opacity: 0, x: window.innerWidth, transition:{duration: 0.5} }}
    >
      
      <div className="hero-content p-0 flex-col lg:flex-row-reverse lg:pr-8">
        <img
          src="
          /img/JDG.jpg"
          className="max-w-sm rounded-lg shadow-2xl p-6 !z-0"
        />
        <div className="lg:flex lg:flex-col lg:items-center ">
          <TypeAnimation
            sequence={[
              500,
              "About me", // Types 'One'
              10000,
            ]}
            wrapper="h1"
            cursor={false}
            className="text-5xl font-bold"
          />
          <p className="mt-4 py-2 px-4 text-justify lg:w-2/3">
          Hello! My name is Juan David, a 21-year-old civil engineer who is passionate about both civil engineering and web development. I have self-taught myself programming skills and  I'm eager to learn more about software engineering. As someone who enjoys both fields, I'm looking for a place to start my journey as a developer.
          </p>
          <p className="py-2 px-4 text-justify lg:w-2/3">
          In my free time, I like to work on personal programming projects, learn new technologies, and read technical and non-technical books to expand my knowledge. I am a person who likes to produce new ideas and solving challenges, and loves to collaborate with others to find creative solutions to complex problems.
          </p>
          <p className="py-2 px-4 text-justify lg:w-2/3">
          In programming, I have a solid foundation in web development basics, including HTML, CSS, and JavaScript. I am comfortable using React with TypeScript for more advanced projects and can style them using Tailwind or a Component Library like Bootstrap, DaisyUI, or Chakra UI. I also have a good understanding of Python, which was the first programming language I learned. I used Python in my bachelor's thesis for data analysis and visualization. Recently, I have been expanding my skills in backend development with the MERN stack, which includes MongoDB, Express, and Node.
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </motion.div>
  );
}
