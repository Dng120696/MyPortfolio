import useStore from "../store/store";
import { projData } from "../store/projData";
import { useEffect, useState } from "react";
import RailsTech from "./Technologies/RailsTech";
import ReactTech from "./Technologies/ReactTech";

function ProjectModal() {
  const state = useStore();
  const { setOpenProjectModal, projName, isOpenProjectModal } = state;
  const findProject = projData[projName];

  const [currentSlide, setCurrentSlide] = useState(0);
  const maxSlide = findProject.images.length - 1;
  console.log(currentSlide);
  function handlePreviousSlide() {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 0 : prevSlide - 1));
  }

  function handleNextSlide() {
    setCurrentSlide((prevSlide) =>
      prevSlide === maxSlide ? maxSlide : prevSlide + 1
    );
  }

  useEffect(() => {
    if (!isOpenProjectModal) {
      setCurrentSlide(0);
    }
  }, [isOpenProjectModal]);

  return (
    <section
      className={` proj_modal ${
        isOpenProjectModal ? "opacity-100 scale-100" : "scale-0 opacity-0"
      } fixed w-[90%] lg:w-[95%]  max-h-[90vh] ${
        projName === "onlineStoreApp" || projName === "stockTradingApp"
          ? "pb-32"
          : projName === "journalApp"
          ? "pb-20"
          : "pb-28 "
      } sm:pb-0 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[100] 
     rounded-xl bg-gray-50 dark:bg-gray-700 dark:text-gray-50  text-5xl overflow-x-auto
      `}
    >
      <i
        className="fa-solid fa-xmark absolute top-5 lg:top-6 right-6 lg:right-8 text-2xl lg:text-3xl cursor-pointer z-[100] text-gray-50 dark:lg:text-gray-50 lg:text-gray-800"
        onClick={() => setOpenProjectModal(false)}
      ></i>
      <div className="grid grid-cols-1 grid-rows-[35%,50%] sm:grid-rows-[1fr,1.25fr] lg:grid-cols-[1.25fr,1fr] xl:grid-cols-[2fr,1fr] 2xl:grid-cols-[2.5fr,1fr] lg:grid-rows-1 ">
        <div
          className={`${findProject.bgColor} py-6 relative  flex items-center justify-center overflow-hidden shadow-md rounded-lg h-full`}
        >
          <button
            className={`bg-gray-200 dark:bg-gray-600 rounded-full w-12 h-12 mx-auto flex items-center justify-center absolute left-6 lg:left-12 top-1/2 translate-x-[-50%] translate-y-[-50%] cursor-pointer  z-[100] ${
              currentSlide === 0 ? "hidden" : ""
            }`}
            onClick={handlePreviousSlide}
          >
            <i className="fa-solid fa-angle-left text-3xl"></i>
          </button>
          <button
            className={`bg-gray-200 dark:bg-gray-600 rounded-full w-12 h-12 mx-auto flex items-center justify-center absolute  right-[-1rem] lg:right-0 top-1/2 translate-x-[-50%] translate-y-[-50%] cursor-pointer z-[100] ${
              currentSlide === maxSlide ? "hidden" : ""
            }`}
            onClick={handleNextSlide}
          >
            <i className="fa-solid fa-angle-right text-3xl"></i>
          </button>
          <div className="flex items-center w-[80%] lg:w-[90%] h-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out  "
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                width: `${findProject.images.length * 100}%`,
              }}
            >
              {findProject?.images.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  className="h-full w-full rounded-lg object-cover scale-[0.95]  md:scale-[0.9]"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="py-10 lg:py-28 px-6 lg:px-10 self-stretch">
          <h1 className="text-2xl md:text-3xl lg:text-4xl  font-bold mb-10">
            {findProject.title}
          </h1>
          <div className="text-xl lg:text-2xl flex  items-center gap-4  mb-6 lg:mb-12 h-12 lg:h-14">
            <span className="dark:bg-gray-600 bg-gray-200  h-full px-4 lg:px-6 inline-flex items-center gap-2 rounded-2xl ">
              <i className="fa-brands fa-github  text-2xl"></i>
              <a
                href={findProject.githubLinks}
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </span>

            <span className="dark:bg-gray-600 bg-gray-200  h-full px-4 lg:px-6 inline-flex items-center gap-2 rounded-2xl ">
              <i className="fa-solid fa-arrow-up-right-from-square text-xl "></i>
              <a href={findProject.liveLinks} target="_blank" rel="noreferrer">
                Go to site
              </a>
            </span>
          </div>
          <p className="mb-6 lg:mb-12 text-xl md:text-[14px]  lg:text-2xl leading-[1.6] md:leading-[1.8] lg:leading-[1.8] text-gray-600 dark:text-gray-300 text-justify  indent-[3rem]">
            {findProject.description}
          </p>
          <p className="text-xl md:text-2xl  font-bold  text-gray-700 dark:text-gray-50 mb-4 lg:mb-6">
            Technologies
          </p>
          <p className=" flex items-center flex-wrap gap-4 text-xl  lg:text-2xl ">
            {(projName === "onlineStoreApp" ||
              projName === "stockTradingApp" ||
              projName === "journalApp") && (
              <>
                <RailsTech />
                {projName === "stockTradingApp" && (
                  <a
                    href="https://rspec.info/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center bg-gray-200 dark:bg-gray-600 px-4 py-2 rounded-lg"
                  >
                    <i className="devicon-rspec-plain colored mr-1"></i>
                    Rspec
                  </a>
                )}
                {projName !== "journalApp" && (
                  <a
                    href="https://www.postman.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center bg-gray-200 dark:bg-gray-600 px-4 py-2 rounded-lg"
                  >
                    <i className="devicon-postman-plain colored mr-1"></i>
                    Postman
                  </a>
                )}
              </>
            )}
            {(projName === "slackCloneApp" ||
              projName === "bankingApp" ||
              projName === "restCountries") && (
              <>
                <ReactTech />
                {projName === "slackCloneApp" && (
                  <a
                    href="https://jestjs.io/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center bg-gray-200 dark:bg-gray-600 px-4 py-2 rounded-lg"
                  >
                    <i className="devicon-jest-plain colored mr-1"> </i>Jest
                  </a>
                )}
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProjectModal;
