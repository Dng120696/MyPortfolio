import profile from "../assets/profile.jpg";
import resume from "../assets/resume.pdf";

function Home({ children }) {
  return (
    <div className="  text-2xl flex items-center justify-center " id="home">
      {children}
      <section className="w-[clamp(30rem,90%,120rem)]  m-auto flex items-center justify-center md:justify-between flex-col-reverse md:flex-row h-screen  border-b-[1px]  md:py-0  gap-10  d pt-12 dark:border-gray-600 border-gray-300">
        <article>
          <p className="text-gray-400 dark:text-gray-400 font-medium mb-2 sm:mb-4">
            Hi <strong className="text-3xl">👋</strong>, my name is
          </p>
          <h1 className="font-bold text-5xl md:text-6xl xl:text-7xl text-gray-900 dark:text-gray-100 mb-4 md:mb-6">
            Christian Patrick Nebab
          </h1>
          <p className="text-[1.4rem] text-gray-400 dark:text-gray-400   mb-6 md:mb- font-medium">
            Aspiring to become a versatile developer based in Cagayan,
            Philippines.
          </p>
          <div className="text-4xl flex flex-col gap-2 mb-6">
            <p className="text-2xl font-bold dark:text-gray-200 text-gray-500 mb-2">
              Find me on
            </p>
            <p className="flex gap-6 dark:text-gray-300 text-gray-600">
              <a
                href="https://www.facebook.com/christianpatrick.nebab/"
                className="hover:text-gray-900"
              >
                <i className="fa-brands fa-square-facebook"></i>
              </a>
              <a
                href="https://github.com/Dng120696"
                className="hover:text-gray-900"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/christian-patrick-nebab-85901a213/"
                className="hover:text-gray-900"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </p>
          </div>
          <button className="text-gray-200 text-xl font-semibold  py-3 px-6 rounded-lg tracking-[2px] bg-gray-800 hover:bg-gray-900">
            <a href={resume} download="resume.pdf">
              Download CV
            </a>
          </button>
        </article>
        <img
          src={profile}
          alt=""
          className="w-[25rem] h-[25rem] md:w-[32rem] md:h-[32rem] lg:w-[35rem] lg:h-[35rem] xl:w-[40rem] xl:h-[40rem] profile_img object-fit"
        />
      </section>
    </div>
  );
}

export default Home;
