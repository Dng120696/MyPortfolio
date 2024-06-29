import slackApp from "../../assets/slack_app.png";
import useStore from "../../store/store";

function SlackClone() {
  const state = useStore();
  const { setOpenProjectModal, setProjName } = state;
  return (
    <>
      <div className="text-3xl">
        <div
          className="group w-full xl:h-[30rem] h-[15rem] sm:h-[20rem]  lg:h-[24.2rem]  slack_img overflow-hidden shadow-md "
          onClick={() => {
            setOpenProjectModal(true);
            setProjName("slackCloneApp");
          }}
        >
          <div className="bg-fuchsia-900 flex items-center justify-center rounded-xl overflow-hidden h-full">
            <img
              src={slackApp}
              alt=""
              className=" w-[inherit] h-full  rounded-lg  object-cover transition-transform  scale-[0.85] group-hover:scale-[0.9]  group-hover:cursor-pointer "
            />
          </div>
        </div>
        <div
          className=" flex lg:items-center   gap-4 lg:flex-row
       justify-between mt-6"
        >
          <div className="text-3xl lg:text-4xl flex flex-col">
            <h1 className="text-2xl lg:text-3xl  font-bold">
              {" "}
              Slack App Clone
            </h1>
            <p className="text-xl lg:text-2xl mt-2 text-gray-400  ">
              Modern Slack clone with AVION API.
            </p>
          </div>
          <p className="flex gap-4 items-center">
            <a
              href="https://github.com/Dng120696/Slack-App-Avion-Version-Batch-31-v2"
              className=" lg:text-4xl py-2 px-4 bg-gray-200 dark:bg-gray-700 rounded-xl h-14  flex items-center"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github  text-3xl lg:text-4xl"></i>
            </a>
            <button className="  py-2 px-4 bg-gray-200 dark:bg-gray-700 rounded-xl h-14">
              <a
                href="https://slack-app-avion-version-batch-31.vercel.app/"
                target="_blank"
                className=" lg:text-4xl  flex items-center"
                rel="noreferrer"
              >
                <i className="fa-solid fa-arrow-up-right-from-square text-xl lg:text-2xl"></i>
              </a>
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default SlackClone;
