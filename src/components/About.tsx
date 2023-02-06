export default function About() {
  return (
    <div id="About-Section" className="hero min-h-screen bg-base-200">
      <div className="hero-content p-0 flex-col lg:flex-row-reverse lg:pr-8">
        <img
          src="
          /img/JDG.jpg"
          className="max-w-sm rounded-lg shadow-2xl p-6"
        />
        <div className="lg:flex lg:flex-col lg:items-center ">
          <h1 className="text-5xl font-bold">About me</h1>
          <p className="py-6 px-4 text-justify lg:w-2/3">
          Hello! My name is Juan David, I'm a 21 year old civil engineer who wants to make a transition to web development. I'm passionate about programming and eager to learn software engineering, my learning has been completely self-taught and I'm looking for a place to start my journey as a developer.
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
}
