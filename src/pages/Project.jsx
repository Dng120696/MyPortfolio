import slackApp from "../assets/slack_app.png";
import BankApp from "../assets/bankAndBudgetApp.png";

function Project() {
  return (
    <section
      id="project"
      className="h-min w-[clamp(30rem,90%,120rem)]  m-auto py-40 border-b-[1px] dark:border-gray-600 border-gray-300 flex flex-col gap-10 "
    >
      <div>
        <h1 className="mb-6 text-5xl font-medium">1. Slack App Clone</h1>
        <p className="text-2xl tracking-[1px] leading-[1.6] dark:text-gray-300 text-gray-600  mb-6">
          We built a version of the Slack app in our Avion School bootcamp,
          using the Avion School API. It allows users to handle account tasks,
          create channels, send messages, and access extra features.
        </p>
        <div className="relative w-[45rem] h-[24.2rem] slack_img overflow-hidden">
          {" "}
          <img src={slackApp} alt="" className=" w-[inherit] rounded-md  " />
          <p className="link_slack_app  flex items-center gap-6 absolute top-[-50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 w-[45rem] h-[24.2rem] justify-center">
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
      </div>
      <div>
        <h1 className="mb-6 text-5xl font-medium">
          2. Banking and Budget Tracker App
        </h1>
        <p className="text-2xl tracking-[1px] leading-[1.6] dark:text-gray-300 text-gray-600  mb-6">
          This Simple Bank App, developed during our Avion School Bootcamp,
          offers essential functionalities for managing finances. Users can
          easily handle withdrawals, deposits, and money transfers, as well as
          make purchases and track expenses. Additionally, the app provides a
          transaction history, including loan transactions, and displays the
          account creation date for reference.
        </p>
        <div className="relative w-[45rem] h-[24.2rem] bank_img overflow-hidden">
          {" "}
          <img src={BankApp} alt="" className=" w-[inherit]  rounded-md " />
          <p className="link_bank_app  flex items-center gap-6 absolute top-[-50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-100 w-[45rem] h-[24.2rem] justify-center">
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
      </div>
    </section>
  );
}

export default Project;
