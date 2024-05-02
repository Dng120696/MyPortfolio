import slackApp from "../assets/slack_app.png";
import BankApp from "../assets/bankAndBudgetApp.png";
import JournalApp from "../assets/journal_app.png";
import stockTrading from "../assets/stock_trading_app.png";

function Project() {
  return (
    <section
      id="project"
      className="h-min w-[clamp(30rem,90%,120rem)]  m-auto py-40 border-b-[1px] dark:border-gray-600 border-gray-300 gap-10 "
    >
      <div className="projects mb-12">
        <p className="dark:text-gray-400 text-gray-400 font-bold text-2xl mb-4">
          Discover
        </p>
        <h1 className=" text-5xl font-bold tracking-[2px] dark:text-gray-200 text-gray-800">
          My Project
        </h1>
      </div>
      <div className="grid grid-cols-2 items-center gap-16">
        <div>
          <h1 className="mb-6 text-4xl font-medium"> Slack App Clone</h1>
          <div className="relative  w-[30rem] sm:w[35rem] md:w-[40rem] lg:w-[45rem] h-[15rem] sm:h-[20rem] md:h[22rem] lg:h-[24.2rem] slack_img overflow-hidden">
            {" "}
            <img
              src={slackApp}
              alt=""
              className=" w-[inherit] h-[inherit] rounded-md  "
            />
            <p className="link_slack_app  flex items-center gap-6 absolute top-[-50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50  w-[inherit]  h-[inherit] justify-center">
              <a
                href="https://github.com/Dng120696/Slack-App-Avion-Version-Batch-31-v2"
                className="text-4xl"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github dark:text-black "></i>
              </a>
              <button className="text-3xl border-gray-700  py-1 px-4 dark:bg-white dark:text-gray-900 rounded-md font-bold hover:dark:bg-gray-900 hover:dark:text-white hover:dark:border-white hover:bg-gray-900 hover:text-white hover:border-white">
                <a
                  href="https://slack-app-avion-version-batch-31.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live
                </a>
              </button>
            </p>
          </div>
          <div className="text-xl md:text-2xl  mt-6 flex items-center">
            <strong className="mr-6 text-gray-700 dark:text-gray-400">
              Technologies:
            </strong>
            <p className="flex items-center gap-2  text-3xl md:text-4xl">
              <i className="devicon-tailwindcss-original colored"></i>
              <i className="devicon-css3-plain colored"></i>
              <i className="devicon-javascript-plain colored"></i>
              <i className="devicon-react-original colored"></i>

              <i className="devicon-reactrouter-plain colored"></i>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                className="w-8 md:w-9"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg"
                className="w-8 md:w-9"
              />

              <i className="devicon-postman-plain colored"></i>

              <i className="devicon-jest-plain colored"></i>
            </p>
          </div>
        </div>
        <div>
          <h1 className="mb-6 text-4xl font-medium">
            Banking and Budget Tracker App
          </h1>

          <div className="relative w-[30rem] sm:w[35rem] md:w-[40rem] lg:w-[45rem] h-[15rem] sm:h-[20rem] md:h[22rem] lg:h-[24.2rem] bank_img overflow-hidden">
            {" "}
            <img src={BankApp} alt="" className=" w-[inherit]  rounded-md " />
            <p className="link_bank_app  flex items-center gap-6 absolute top-[-50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-100 w-[inherit]  h-[inherit]  justify-center">
              <a
                href="https://github.com/Dng120696/Bank-and-Budget-Tracker-App-Batch-31"
                className="text-4xl"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github dark:text-black "></i>
              </a>
              <button className="text-3xl border-gray-700  py-1 px-4 dark:bg-white dark:text-gray-900 rounded-md font-bold hover:dark:bg-gray-900 hover:dark:text-white hover:dark:border-white hover:bg-gray-900 hover:text-white hover:border-white">
                <a
                  href="https://banking-and-budget-app.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live
                </a>
              </button>
            </p>
          </div>
          <div className="text-xl md:text-2xl mt-6 flex items-center">
            <strong className="mr-6 text-gray-700 dark:text-gray-400">
              Technologies:
            </strong>
            <p className="flex items-center gap-2 text-3xl md:text-4xl">
              <i className="devicon-tailwindcss-original colored"></i>
              <i className="devicon-css3-plain colored"></i>
              <i className="devicon-javascript-plain colored"></i>
              <i className="devicon-react-original colored"></i>

              <i className="devicon-reactrouter-plain colored"></i>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                className="w-8 md:w-9"
              />
            </p>
          </div>
        </div>
        <div>
          <h1 className="mb-6 text-4xl font-medium">Journal App</h1>
          <div className="relative w-[30rem] sm:w[35rem] md:w-[40rem] lg:w-[45rem] h-[15rem] sm:h-[20rem] md:h[22rem] lg:h-[24.2rem] bank_img overflow-hidden">
            {" "}
            <img
              src={JournalApp}
              alt=""
              className=" w-[inherit]  rounded-md "
            />
            <p className="link_bank_app  flex items-center gap-6 absolute top-[-50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-100 w-[inherit]  h-[inherit]  justify-center">
              <a
                href="https://github.com/Dng120696/Journal-App-Batch-32"
                className="text-4xl"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github dark:text-black "></i>
              </a>
              <button className="text-3xl border-gray-700  py-1 px-4 dark:bg-white dark:text-gray-900 rounded-md font-bold hover:dark:bg-gray-900 hover:dark:text-white hover:dark:border-white hover:bg-gray-900 hover:text-white hover:border-white">
                <a
                  href="https://mysite-pldf.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live
                </a>
              </button>
            </p>
          </div>
          <div className="text-xl md:text-2xl mt-6 flex items-center">
            <strong className="mr-6 text-gray-700 dark:text-gray-400">
              Technologies:
            </strong>
            <p className="flex items-center gap-2 text-3xl md:text-4xl">
              <i className="devicon-tailwindcss-original colored"></i>
              <i className="devicon-css3-plain colored"></i>
              <i className="devicon-ruby-plain colored"></i>
              <i className="devicon-rails-plain colored"></i>
              <i className="devicon-postgresql-plain colored"></i>
            </p>
          </div>
        </div>
        <div>
          <h1 className="mb-6 text-4xl font-medium">Stock Trading App</h1>
          <div className="relative w-[30rem] sm:w[35rem] md:w-[40rem] lg:w-[45rem] h-[15rem] sm:h-[20rem] md:h[22rem] lg:h-[24.2rem] bank_img overflow-hidden">
            {" "}
            <img
              src={stockTrading}
              alt=""
              className=" w-[inherit] h-full  rounded-md "
            />
            <p className="link_bank_app  flex items-center gap-6 absolute top-[-50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-100 w-[inherit]  h-[inherit]  justify-center">
              <a
                href="https://github.com/Dng120696/Stock_trading_app"
                className="text-4xl"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github dark:text-black "></i>
              </a>
              <button className="text-3xl border-gray-700  py-1 px-4 dark:bg-white dark:text-gray-900 rounded-md font-bold hover:dark:bg-gray-900 hover:dark:text-white hover:dark:border-white hover:bg-gray-900 hover:text-white hover:border-white">
                <a
                  href="https://mysite-jjbq.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live
                </a>
              </button>
            </p>
          </div>
          <div className="text-xl md:text-2xl mt-6 flex items-center">
            <strong className="mr-6 text-gray-700 dark:text-gray-400">
              Technologies:
            </strong>
            <p className="flex items-center gap-2 text-3xl md:text-4xl">
              <i className="devicon-tailwindcss-original colored"></i>
              <i className="devicon-css3-plain colored"></i>
              <i className="devicon-ruby-plain colored"></i>
              <i className="devicon-javascript-plain colored"></i>
              <i className="devicon-rails-plain colored"></i>
              <i className="devicon-postgresql-plain colored"></i>
              <i className="devicon-rspec-plain colored"></i>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
