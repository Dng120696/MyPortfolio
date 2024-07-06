import leetcodeImg from "../assets/leetcodeImage.png";

function Contact() {
  return (
    <section
      id="contact"
      className="w-[clamp(30rem,90%,120rem)] min-h-[60vh] py-32 flex items-center justify-center
       gap-10 flex-col
       mx-auto border-b-[1px] border-gray-400"
    >
      <div className="w-full">
        <div className="contact_me mb-20 self-start">
          <h1 className="uppercase text-5xl font-bold tracking-[2px] dark:text-gray-200 text-gray-800">
            Contact
          </h1>
        </div>

        <div>
          <ul className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-y-16 lg:gap-y-20  xl:gap-y-32 ">
            <li className="flex  items-center gap-6">
              <span className="text-7xl lg:text-8xl">
                <i className="fa-solid fa-envelope text-[#1c84d4]"></i>
              </span>
              <p className=" flex flex-col gap-2">
                <span className="text-[1.6rem] md:text-2xl text-gray-500 dark:text-gray-400  font-medium">
                  Send me an email:
                </span>

                <a
                  href="mailto:christianpatrickcnebab@gmail.com"
                  target="_blank"
                  rel="
                  noreferrer"
                  className=" text-[1.4rem] md:text-2xl lg:text-3xl font-bold text-light-texto-primary dark:text-dark-texto-primary  hover:cursor-pointer hover:underline"
                >
                  christianpatrickcnebab@gmail.com
                </a>
              </p>
            </li>
            <li className="flex  items-center gap-6">
              <span className="text-7xl lg:text-8xl">
                <i className="fa-brands fa-linkedin text-[#1c84d4]"></i>
              </span>
              <p className=" flex flex-col gap-2">
                <span className="text-2xl text-gray-500 dark:text-gray-400  font-medium">
                  My LinkedIn Account:
                </span>

                <a
                  href="https://www.linkedin.com/in/christian-patrick-nebab-85901a213/"
                  target="_blank"
                  rel="
                  noreferrer"
                  className=" text-[1.6rem] md:text-2xl lg:text-3xl font-bold text-light-texto-primary dark:text-dark-texto-primary  hover:cursor-pointer hover:underline"
                >
                  /in/christian-patrick-nebab
                </a>
              </p>
            </li>
            <li className="flex  items-center gap-6">
              <span className="text-7xl lg:text-8xl">
                <i className="fa-brands fa-github"></i>
              </span>
              <p className=" flex flex-col gap-2">
                <span className="text-2xl text-gray-500 dark:text-gray-400  font-medium">
                  My Github Account:
                </span>

                <a
                  href="https://github.com/Dng120696"
                  target="_blank"
                  rel="
                  noreferrer"
                  className=" text-[1.6rem] md:text-2xl lg:text-3xl font-bold text-light-texto-primary dark:text-dark-texto-primary  hover:cursor-pointer hover:underline"
                >
                  /github/Dng120696
                </a>
              </p>
            </li>
            <li className="flex  items-center gap-6">
              <span className="text-7xl lg:text-8xl">
                <i className="fa-brands fa-square-facebook text-[#1c84d4]"></i>
              </span>
              <p className=" flex flex-col gap-2">
                <span className="text-2xl text-gray-500 dark:text-gray-400  font-medium">
                  My Facebook Account:
                </span>

                <a
                  href="https://www.facebook.com/christianpatrick.nebab"
                  target="_blank"
                  rel="
                  noreferrer"
                  className=" text-[1.6rem] md:text-2xl lg:text-3xl  font-bold text-light-texto-primary dark:text-dark-texto-primary  hover:cursor-pointer hover:underline"
                >
                  /fb/christianpatrick.nebab
                </a>
              </p>
            </li>
            <li className="flex  items-center gap-6">
              <span className="text-7xl lg:text-8xl">
                <img
                  src={leetcodeImg}
                  alt="leet"
                  className="w-14  h-14 lg:w-24 lg:h-24"
                />
              </span>
              <p className=" flex flex-col gap-2">
                <span className="text-2xl text-gray-500 dark:text-gray-400  font-medium">
                  My LeetCode Account:
                </span>

                <a
                  href="https://www.leetcode.com/dng120696"
                  target="_blank"
                  rel="
                  noreferrer"
                  className="text-[1.6rem] md:text-2xl lg:text-3xl font-bold text-light-texto-primary dark:text-dark-texto-primary  hover:cursor-pointer hover:underline"
                >
                  /leetcode.com/dng120696
                </a>
              </p>
            </li>
            <li className="flex  items-center gap-6">
              <span className="text-7xl lg:text-8xl">
                <i className="fa-brands fa-twitter text-[#1c84d4]"></i>
              </span>
              <p className=" flex flex-col gap-2">
                <span className="text-2xl text-gray-500 dark:text-gray-400  font-medium">
                  My Twitter Account:
                </span>

                <a
                  href="https://twitter.com/dng0216"
                  target="_blank"
                  rel="
                  noreferrer"
                  className=" text-[1.4rem] md:text-2xl lg:text-3xl font-bold text-light-texto-primary dark:text-dark-texto-primary  hover:cursor-pointer hover:underline"
                >
                  /twitter/christianpatrick.nebab
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
