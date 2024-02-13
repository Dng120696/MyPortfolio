import { useState } from "react";

export function Header({ onSetDark, isDark }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleSetDark() {
    const newIsDark = !isDark;
    onSetDark(newIsDark);
    localStorage.setItem("isDark", JSON.stringify(newIsDark));
  }

  return (
    <header className=" font-semibold">
      <nav className="w-[clamp(30rem,90%,120rem)]  m-auto  flex items-center justify-between fixed top-20 left-[50%] translate-x-[-50%] translate-y-[-50%] z-[100]">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold ">
          My Portfolio
        </h1>
        <ul
          className={`flex gap-6 md:gap-10 lg:gap-14 items-center flex-col md:flex-row absolute md:relative top-[900%]  left-[50%] md:left-[8rem] lg:left-[16rem] xl:left-[30rem] ${
            isOpen ? "flex" : "hidden"
          } md:flex translate-x-[-50%] translate-y-[-50%] md:translate-x-0 md:translate-y-0 w-[clamp(30rem,90%,120rem)] z-[-1] md:w-max  py-16 md:py-0 rounded-xl md:rounded-none bg-gray-300 dark:bg-gray-700 md:dark:bg-transparent md:bg-transparent`}
        >
          <a
            href="#home"
            className="hover:bg-gray-800 hover:text-white dark:hover:bg-gray-900 md:dark:hover:bg-gray-800  w-full text-center py-4 md:px-4 md:rounded-md"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:bg-gray-800 hover:text-white dark:hover:bg-gray-900 md:dark:hover:bg-gray-800 w-full text-center py-3  md:px-4 md:rounded-md"
          >
            About
          </a>
          <a
            href="#project"
            className="hover:bg-gray-800 hover:text-white dark:hover:bg-gray-900 md:dark:hover:bg-gray-800  w-full text-center py-3 md:px-4 md:rounded-md"
          >
            Project
          </a>
          <button className=" py-3 px-6 bg-gray-800 hover:bg-gray-900  text-white rounded-lg">
            <a href="#contact">Contact</a>
          </button>
        </ul>
        <div className="flex text-3xl gap-6">
          <i
            className="fa-solid fa-bars md:hidden hover:cursor-pointer"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          ></i>
          <li
            onClick={handleSetDark}
            className=" hover:cursor-pointer w-10 flex items-center justify-center"
          >
            {isDark ? (
              <i className="fa-solid fa-moon"></i>
            ) : (
              <i className="fa-regular fa-sun"></i>
            )}
          </li>
        </div>
      </nav>
    </header>
  );
}
