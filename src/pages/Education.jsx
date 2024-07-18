import csuLogo from "../assets/csulogo.jpeg";
import avionLogo from "../assets/avionLogo.jpeg";

function Education() {
  return (
    <section
      id="education"
      className="w-[clamp(30rem,90%,120rem)] min-h-[50vh] py-32 flex items-center justify-center
   gap-10 flex-col
   mx-auto border-b-[1px] border-gray-400"
    >
      <div className="w-full">
        <div className="education mb-20 self-start">
          <h1 className="uppercase text-5xl font-bold tracking-[2px] dark:text-gray-200 text-gray-800">
            Education
          </h1>
        </div>
        <div className="flex justify-between flex-col gap-14 lg:gap-20 lg:items-center lg:flex-row ">
          <div className="flex items-center  lg:flex-row lg:text-left gap-6 md:gap-10">
            <img
              src={avionLogo}
              alt="avion Logo"
              className="w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] lg:w-[12rem] lg:h-[12rem] rounded-full object-cover"
            />
            <div className="flex  flex-col h-full text-2xl md:text-3xl ">
              <div className="mb-4 md:mb-6">
                <p className="text-gray-400 mb-2 text-xl md:text-2xl ">
                  Degree
                </p>
                <p className="font-bold">Full Stack Web Development</p>
              </div>
              <div>
                <p className="text-gray-400 mb-2 text-xl md:text-2xl ">
                  July 2023 - June 2024
                </p>
                <p className="font-bold">Avion School </p>
              </div>
            </div>
          </div>
          <div
            className="flex  items-center lg:flex-row lg:text-left
           gap-6 md:gap-10"
          >
            <img
              src={csuLogo}
              alt="csu Logo"
              className="w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] lg:w-[12rem] lg:h-[12rem] rounded-full object-cover"
            />
            <div className="flex flex-col h-full text-2xl md:text-3xl ">
              <div className="mb-4 md:mb-6">
                <p className="text-gray-400 mb-2 text-xl md:text-2xl ">
                  Degree
                </p>
                <p className="font-bold">
                  Bachelor of Science in Information Technology
                </p>
              </div>
              <div>
                <small className="text-gray-400 mb-2 text-xl md:text-2xl ">
                  August 2016 - June 2020
                </small>
                <p className="font-bold">
                  Cagayan State University - Sanchez Mira
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
