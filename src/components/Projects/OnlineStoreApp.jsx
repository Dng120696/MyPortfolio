import RailsTech from "../Technologies/RailsTech";
import OnlineStoreImg from "../../assets/Online_Store_App.png";
function OnlineStoreApp() {
  return (
    <div>
      <h1 className="mb-6 text-3xl lg:text-4xl font-medium">
        Online Store App
      </h1>
      <div className="relative w-[30rem] sm:w[35rem] mobile-lg:w-[37.6rem] mobile-lg:h-[19.5rem] md:w-[32.5rem]  lg:w-[44rem]  xl:w-[58rem] xl:h-[30rem] h-[15rem] sm:h-[20rem] md:h[22rem] lg:h-[24.2rem] bank_img overflow-hidden">
        {" "}
        <img
          src={OnlineStoreImg}
          alt=""
          className=" w-[inherit] h-full  rounded-md  object-cover "
        />
        <p className="link_bank_app  flex items-center gap-6 absolute top-[-50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-100 w-[inherit]  h-[inherit]  justify-center">
          <a
            href="https://github.com/Dng120696/Online_Store_App"
            className="text-4xl"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github dark:text-black "></i>
          </a>
          <button className="text-3xl border-gray-700  py-1 px-4 dark:bg-white dark:text-gray-900 rounded-md font-bold hover:dark:bg-gray-900 hover:dark:text-white hover:dark:border-white hover:bg-gray-900 hover:text-white hover:border-white">
            <a
              href="https://online-store-app-development.onrender.com"
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
        <p className="icon-container flex items-center gap-2 text-3xl md:text-4xl">
          <RailsTech />
          <a href="https://www.postman.com/" target="_blank" rel="noreferrer">
            <i className="devicon-postman-plain colored"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default OnlineStoreApp;
