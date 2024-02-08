import profile2 from "../assets/profile_2.jpg";

function About() {
  return (
    <section
      id="about"
      className="w-[clamp(30rem,90%,120rem)]  m-auto pt-52  h-screen grid grid-cols-2 gap-32 border-b-[1px] dark:border-gray-600 border-gray-300"
    >
      <div className="h-screen">
        <img
          src={profile2}
          alt=""
          className="h-[65vh] w-[35rem] m-auto rounded-xl"
        />
      </div>
      <div className="pt-10">
        <article>
          <div className="about_me">
            <p className="dark:text-gray-400 text-gray-400 font-bold text-2xl mb-4">
              Discover
            </p>
            <h1 className="uppercase text-5xl font-bold tracking-[2px] mb-12 dark:text-gray-200 text-gray-800">
              About Me
            </h1>
          </div>

          <p className="text-2xl tracking-[1px] leading-[1.8] dark:text-gray-300 text-gray-600 font-semibold">
            &quot;As an ambitious Entry Level Developer with hands-on experience
            in creating a banking application and a Slack clone, I am
            enthusiastic about furthering my expertise in the dynamic world of
            software development. Proficient in HTML, CSS, JavaScript, React,
            Git, GitHub. I&apos;m excited to work on projects that challenge me
            and help me grow.&quot;
          </p>
        </article>
        <article className="pt-[3.5rem]">
          <h1 className="text-[2rem] font-bold text-gray-800 dark:text-gray-200 mb-8 uppercase">
            Skills
          </h1>
          <div className="text-2xl border-[1px] dark:border-gray-500 border-gray-300 p-6 rounded-md grid grid-cols-3 gap-6 text-gray-600 dark:text-gray-300">
            <p className="flex items-center gap-2 text-2xl">
              <span>
                <i className="devicon-html5-plain colored"></i>
              </span>
              <span className="font-semibold">HTML</span>
            </p>

            <p className="flex items-center gap-2 text-2xl">
              <span>
                <i className="devicon-css3-plain colored"></i>
              </span>
              <span className="font-semibold">CSS</span>
            </p>
            <p className="flex items-center gap-2 text-2xl">
              <span>
                <i className="devicon-tailwindcss-original colored"></i>
              </span>
              <span className="font-semibold">TailwindCSS</span>
            </p>
            <p className="flex items-center gap-2 text-2xl">
              <span>
                <i className="devicon-sass-original colored"></i>
              </span>
              <span className="font-semibold">SASS</span>
            </p>
            <p className="flex items-center gap-2 text-2xl">
              <span>
                <i className="devicon-javascript-plain colored"></i>
              </span>
              <span className="font-semibold">JavaScript </span>
            </p>
            <p className="flex items-center gap-2 text-2xl">
              <span>
                <i className="devicon-react-original colored"></i>
              </span>
              <span className="font-semibold">React </span>
            </p>
            <p className="flex items-center gap-2 text-2xl">
              <span>
                <i className="devicon-git-plain colored"></i>
              </span>
              <span className="font-semibold">Git </span>
            </p>
            <p className="flex items-center gap-2 text-2xl">
              <span>
                <i className="devicon-ruby-plain colored"></i>
              </span>
              <span className="font-semibold">Ruby</span>
            </p>
            <p className="flex items-center gap-2 text-2xl">
              <span>
                <i className="devicon-rails-plain colored"></i>
              </span>
              <span className="font-semibold">Ruby on Rails</span>
            </p>
            <p className="flex items-center gap-2 text-2xl">
              <span>
                <i className="devicon-azuresqldatabase-plain colored"></i>
              </span>
              <span className="font-semibold">SQL</span>
            </p>
            <p className="flex items-center gap-2 text-2xl">
              <span>
                <i className="devicon-postgresql-plain colored"></i>
              </span>
              <span className="font-semibold">PostGresQl</span>
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default About;
