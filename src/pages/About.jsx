function About() {
  return (
    <section
      id="about"
      className="h-min  w-[clamp(30rem,90%,120rem)] py-32  m-auto  border-b-[1px]  flex items-center border-gray-400 "
    >
      <div className=" md:gap-20 lg:gap-32 ">
        <article>
          <div className="about_me">
            <p className="dark:text-gray-400 text-gray-400 font-bold text-2xl mb-4">
              Discover
            </p>
            <h1 className="uppercase text-5xl font-bold tracking-[2px] mb-20 dark:text-gray-200 text-gray-800">
              About Me
            </h1>
          </div>

          <div className="text-2xl lg:text-3xl tracking-[1px] leading-[2] lg:leading-[2]  dark:text-gray-300 text-gray-600 font-semibold text-justify">
            <p className="indent-12">
              &quot;As a Front-End Developer and Ruby on Rails Developer, I am
              dedicated to leveraging technology to streamline and elevate
              everyday tasks. My passion lies in crafting intuitive web
              applications that prioritize user experience and
              functionality.&quot;
            </p>

            <p className="indent-12">
              &quot;I excel in organizational efficiency, crucial for managing
              tasks effectively. Beyond my technical roles, I actively engage in
              personal projects, including the development of mini applications
              to explore emerging technologies and continually hone my
              skills.&quot;
            </p>
          </div>
        </article>
        <article className="pt-12 self-start w-full">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8 uppercase">
            Skills
          </h1>
          <div className="text-3xl  border-[1px] dark:border-gray-500 border-gray-300 p-6 md:p-10 rounded-md grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-8 gap-x-14 text-gray-600 dark:text-gray-300 w-[inherit]">
            <p className="flex items-center gap-2">
              <span>
                <i className="devicon-html5-plain colored"></i>
              </span>
              <span className="font-semibold">HTML</span>
            </p>

            <p className="flex items-center gap-2">
              <span>
                <i className="devicon-css3-plain colored"></i>
              </span>
              <span className="font-semibold">CSS</span>
            </p>

            <p className="flex items-center gap-2">
              <span>
                <i className="devicon-tailwindcss-original colored"></i>
              </span>
              <span className="font-semibold">TailwindCSS</span>
            </p>

            <p className="flex items-center gap-2">
              <span>
                <i className="devicon-sass-original colored"></i>
              </span>
              <span className="font-semibold">SASS</span>
            </p>

            <p className="flex items-center gap-2">
              <span>
                <i className="devicon-javascript-plain colored"></i>
              </span>
              <span className="font-semibold">JavaScript</span>
            </p>

            <p className="flex items-center gap-2">
              <span>
                <i className="devicon-react-original colored"></i>
              </span>
              <span className="font-semibold">React</span>
            </p>
            <p className="flex items-center gap-2">
              <span>
                <i className="devicon-typescript-plain colored"></i>
              </span>
              <span className="font-semibold">TypeScript</span>
            </p>
            <p className="flex items-center gap-2">
              <span>
                <i className="devicon-git-plain colored"></i>
              </span>
              <span className="font-semibold">Git</span>
            </p>

            <p className="flex items-center gap-2">
              <span>
                <i className="devicon-ruby-plain colored"></i>
              </span>
              <span className="font-semibold">Ruby</span>
            </p>

            <p className="flex items-center gap-2">
              <span>
                <i className="devicon-rails-plain colored"></i>
              </span>
              <span className="font-semibold">Ruby on Rails</span>
            </p>

            <p className="flex items-center gap-2">
              <span>
                <i className="devicon-postgresql-plain colored"></i>
              </span>
              <span className="font-semibold">PostgreSQL</span>
            </p>
            <p className="flex items-center gap-2">
              <span>
                <i className="devicon-postman-plain colored mr-1"></i>
              </span>
              <span className="font-semibold">Postman</span>
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default About;
