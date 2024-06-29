import BankApp from "../../assets/bankAndBudgetApp.png";
import useStore from "../../store/store";

function BankingApp() {
  const state = useStore();
  const { setOpenProjectModal, setProjName } = state;
  return (
    <div className="text-3xl">
      <div
        className="group relative w-full xl:h-[30rem] h-[15rem] sm:h-[20rem] md:h[22rem] lg:h-[24.2rem] bank_img overflow-hidden  shadow-md "
        onClick={() => {
          setOpenProjectModal(true);
          setProjName("bankingApp");
        }}
      >
        <div
          className="bg-blue-700 flex items-center justify-center rounded-xl overflow-hidden h-full
        "
        >
          <img
            src={BankApp}
            alt=""
            className=" w-[inherit] h-full  rounded-md  object-cover transition-transform  scale-[0.85] group-hover:scale-[0.9]  group-hover:cursor-pointer "
          />
        </div>
      </div>
      <div
        className=" flex lg:items-center  flex-col-reverse  gap-4 lg:flex-row
       justify-between mt-6"
      >
        <div className="text-xl md:text-2xl  flex flex-col">
          <h1 className=" text-3xl lg:text-4xl font-medium">
            Banking and Budget Tracker App
          </h1>
          <p className="text-2xl mt-2 text-gray-400">
            Comprehensive banking and budgeting solution.
          </p>
        </div>
        <p className="flex gap-4 items-center">
          <a
            href="https://github.com/Dng120696/Bank-and-Budget-Tracker-App-Batch-31"
            className="text-4xl py-2 px-4 bg-gray-200 dark:bg-gray-700 rounded-xl h-14"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github  "></i>
          </a>
          <button className="py-2 px-4 bg-gray-200 dark:bg-gray-700 rounded-xl h-14">
            <a
              href="https://banking-and-budget-app.vercel.app"
              target="_blank"
              rel="noreferrer"
              className=" lg:text-4xl  flex items-center"
            >
              <i className="fa-solid fa-arrow-up-right-from-square text-2xl"></i>
            </a>
          </button>
        </p>
      </div>
    </div>
  );
}

export default BankingApp;
