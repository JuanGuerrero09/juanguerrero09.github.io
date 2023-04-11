import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import IconsLinks from "../components/IconsLinks";

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        "One", // Types 'One'
        1000, // Waits 1s
        "Two", // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        "Two Three", // Types 'Three' without deleting 'Two'
        () => {
          console.log("Done typing!"); // Place optional callbacks anywhere in the array
        },
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: "3.75rem" }}
    />
  );
};

export default function Home() {
  return (
    <motion.div
    initial={{ opacity: 0, width: 0 }}
    animate={{ opacity: 1, width: '100%' }}
    exit={{ opacity: 0, x: window.innerWidth, transition:{duration: 0.5} }}
    >
      <div
        id="Home-Section"
        className="bg-base-100 h-[calc(100vh-4rem)] w-screen flex flex-col justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-32 mb-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
          />
        </svg>
        <div className="flex flex-col text-white ">
          <TypeAnimation
            sequence={[
              "Juan David", // Types 'One'
              10000,
            ]}
            wrapper="h2"
            cursor={false}
            className="text-6xl"
          />
          <TypeAnimation
            sequence={[
              1500,
              "Frontend Developer", // Types 'One'
              3000,
              "Civil Engineer",
              2000,
            ]}
            wrapper="h3"
            cursor={true}
            repeat={Infinity}
            className="text-3xl mt-2"
          />
          <div className="icons ">
          <IconsLinks />
          <h2 className="mt-8 btn">
          <a href='../assets/CV_Juan_2023.pdf' download>Download CV</a>
          </h2>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
