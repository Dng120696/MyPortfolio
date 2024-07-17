import useStore from "../../store/store";
import restCountries from "../../assets/restCountriesImg/1.png";
function RestCountriesAPI() {
  const state = useStore();
  const { setOpenProjectModal, setProjName } = state;
  return (
    <div className="text-3xl">
      <div
        className="group w-full xl:h-[30rem] h-[15rem] sm:h-[20rem] md:h[22rem]  lg:h-[24.2rem] bank_img overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.25)]"
        onClick={() => {
          setOpenProjectModal(true);
          setProjName("restCountries");
        }}
      >
        <div
          className="bg-gray-700 flex items-center justify-center rounded-xl overflow-hidden h-full
        "
        >
          <img
            src={restCountries}
            alt=""
            className=" w-[inherit] h-full  rounded-md  object-cover transition-transform  scale-[0.85] group-hover:scale-[0.9]  group-hover:cursor-pointer "
          />
        </div>
      </div>
      <div
        className=" flex lg:items-center  gap-4 lg:flex-row
       justify-between mt-6"
      >
        <div className="text-xl md:text-2xl flex flex-col">
          <h1 className=" text-2xl lg:text-2xl font-bold">
            Rest Countries API App
          </h1>
          <p className="text-xl lg:text-2xl mt-2 text-gray-400  ">
            Comprehensive global country data.
          </p>
        </div>

        <p className="flex gap-4 items-center">
          <a
            href="https://github.com/Dng120696/Rest-Countries-API-Typescript"
            className=" lg:text-4xl py-2 px-4 bg-gray-200 dark:bg-gray-700 rounded-xl h-14  flex items-center"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github text-3xl lg:text-4xl "></i>
          </a>
          <button className="  py-2 px-4 bg-gray-200 dark:bg-gray-700 rounded-xl h-14">
            <a
              href="https://rest-countries-api-typescript.vercel.app"
              target="_blank"
              className=" lg:text-4xl  flex items-center"
              rel="noreferrer"
            >
              <i className="fa-solid fa-arrow-up-right-from-square text-xl lg:text-2xl "></i>
            </a>
          </button>
        </p>
      </div>
    </div>
  );
}

export default RestCountriesAPI;
