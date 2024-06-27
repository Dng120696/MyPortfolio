import profile from "../assets/profile.jpg";
import resume from "../assets/Christian Patrick_Nebab_Resume.pdf";

function Home({ children }) {
  return (
    <div className="  text-2xl flex items-center justify-center " id="home">
      {children}
      <section className="w-[clamp(30rem,90%,120rem)]  m-auto flex items-center justify-center md:justify-between flex-col-reverse md:flex-row h-screen  border-b-[1px]  md:py-0  gap-10  d pt-12  border-gray-400">
        <article>
          <p className=" text-gray-400 text-2xl lg:text-3xl dark:text-gray-400 font-medium mb-2 sm:mb-4">
            Hi <strong className="text-3xl">👋</strong>, My name is
          </p>
          <h1 className="font-bold text-5xl md:text-6xl xl:text-7xl text-gray-900 dark:text-gray-100 mb-4 md:mb-6">
            Christian Patrick Nebab
          </h1>
          <p className=" text-gray-400 text-2xl lg:text-[1.8rem] lg:pr-96 dark:text-gray-400 leading-[1.7] md:leading-[1.5]   mb-6 md:mb- font-medium">
            A Front-End Developer and Ruby on Rails Developer based in Cagayan,
            Philippines.
          </p>

          <button className="text-gray-200 text-xl lg:text-2xl font-semibold  py-4 px-8 rounded-lg tracking-[2px] bg-gray-800 hover:bg-gray-900  hover:dark:bg-gray-700">
            <a href={resume} download="Christian Patrick_Nebab_Resume.pdf">
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
