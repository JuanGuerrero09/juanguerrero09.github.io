export default function Home() {
  return (
    <>
      <div
        id="Home-Section"
        className="bg-base-100 h-[calc(100vh-4rem)] flex flex-col justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-28"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
          />
        </svg>
        <div className="flex flex-col h-1/2 text-white mt-4">
          <h2 className="text-6xl">Juan David</h2>
          <h3 className="text-2xl">Frontend Developer</h3>
          <h3 className="text-2xl">Civil Engineer</h3>
        </div>
      </div>
    </>
  );
}
