import OnlineStoreImg from "../../assets/Online_Store_App.png";
import useStore from "../../store/store";

function OnlineStoreApp() {
  const state = useStore();
  const { setOpenProjectModal, setProjName } = state;
  return (
    <div className="text-3xl">
      <div
        className="group w-full xl:h-[30rem] h-[15rem] sm:h-[20rem] md:h[22rem] lg:h-[24.2rem] bank_img overflow-hidden  shadow-md"
        onClick={() => {
          setOpenProjectModal(true);
          setProjName("onlineStoreApp");
        }}
      >
        <div
          className="bg-blue-700 flex items-center justify-center rounded-xl overflow-hidden h-full
        "
        >
          <img
            src={OnlineStoreImg}
            alt=""
            className=" w-[inherit] h-full  rounded-md  object-cover transition-transform  scale-[0.85] group-hover:scale-[0.9]  group-hover:cursor-pointer "
          />
        </div>
      </div>
      <div
        className=" flex lg:items-center  flex-col-reverse  gap-4 lg:flex-row
       justify-between mt-6"
      >
        <div
          className="text-xl md:text-2xl flex flex-col
        "
        >
          <h1 className=" lg:text-4xl font-medium">Online Store App</h1>
          <p className="text-2xl mt-2 text-gray-400  ">
            Modern E-commerce solution
          </p>
        </div>
        <p className="flex gap-4 items-center">
          <a
            href="https://github.com/Dng120696/Online_Store_App"
            className=" group lg:text-4xl py-2 px-4 bg-gray-200 dark:bg-gray-700 rounded-xl h-14  flex items-center dark:hover:bg-gray-600 "
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github  text-4xl"></i>
          </a>
          <button className="  py-2 px-4 bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-xl h-14">
            <a
              href="https://online-store-app-development.onrender.com"
              target="_blank"
              className="  lg:text-4xl  flex items-center "
              rel="noreferrer"
            >
              <i className="fa-solid fa-arrow-up-right-from-square text-2xl "></i>
            </a>
          </button>
        </p>
      </div>
    </div>
  );
}

export default OnlineStoreApp;
