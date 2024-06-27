import ReactTech from "../Technologies/ReactTech";
import slackApp from "../../assets/slack_app.png";

function SlackClone() {
  return (
    <>
      <div className="text-3xl">
        <h1 className="mb-6 text-3xl lg:text-4xl  font-medium">
          {" "}
          Slack App Clone
        </h1>
        <div className="relative  w-[30rem] sm:w[35rem] mobile-lg:w-[37.6rem] mobile-lg:h-[19.5rem] md:w-[32.5rem]  lg:w-[44rem] xl:w-[58rem] xl:h-[30rem] h-[15rem] sm:h-[20rem]  lg:h-[24.2rem]  slack_img overflow-hidden shadow-md ">
          {" "}
          <img
            src={slackApp}
            alt=""
            className=" w-[inherit] h-[inherit] rounded-md object-cover "
          />
        </div>
        <div
          className=" flex lg:items-center  flex-col-reverse  gap-4 lg:flex-row
       justify-between mt-6"
        >
          <div className="text-xl md:text-2xl flex items-center">
            <strong className="mr-6 text-gray-700 dark:text-gray-300">
              Technologies:
            </strong>
            <p className="flex items-center gap-2  text-3xl md:text-4xl">
              <ReactTech />

              <a href="https://jestjs.io/" target="_blank" rel="noreferrer">
                <i className="devicon-jest-plain colored"></i>
              </a>
            </p>
          </div>
          <p className="flex gap-4 items-center">
            <a
              href="https://github.com/Dng120696/Slack-App-Avion-Version-Batch-31-v2"
              className=" lg:text-4xl py-2 px-4 bg-gray-200 dark:bg-gray-700 rounded-xl h-14  flex items-center"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github "></i>
            </a>
            <button className="  py-2 px-4 bg-gray-200 dark:bg-gray-700 rounded-xl h-14">
              <a
                href="https://slack-app-avion-version-batch-31.vercel.app/"
                target="_blank"
                className=" lg:text-4xl  flex items-center"
                rel="noreferrer"
              >
                <i className="fa-solid fa-arrow-up-right-from-square text-2xl "></i>
              </a>
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default SlackClone;
