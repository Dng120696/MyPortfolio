import { useState } from "react";
import lightMode from "../assets/icon-sun.svg";
import darkMode from "../assets/icon-moon.svg";

export function Header({ onSetDark, isDark }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleMenu() {
    setIsOpen(!isOpen);
  }
  function handleSetDark() {
    const newIsDark = !isDark;
    onSetDark(newIsDark);
    localStorage.setItem("isDark", JSON.stringify(newIsDark));
  }

  return (
    <header className=" font-semibold w-full h-[10vh] flex items-center">
      <nav className="w-[clamp(30rem,90%,120rem)]  m-auto  flex items-center justify-between relative z-[100]">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold ">
          My Portfolio
        </h1>
        <ul
          className={` font-bold
             flex gap-6 md:gap-10 lg:gap-14 items-center flex-col md:flex-row absolute md:relative top-[900%]  left-[50%] md:left-[8rem] lg:left-[16rem] xl:left-[30rem] ${
               isOpen ? "scale-100 opacity-100 " : "scale-0 opacity-0"
             } transition-transform md:scale-100 md:opacity-100 md:flex translate-x-[-50%] translate-y-[-50%] md:translate-x-0 md:translate-y-0 w-[clamp(30rem,90%,120rem)] z-[-1] md:w-max  py-16 md:py-0 rounded-xl md:rounded-none bg-gray-700 text-white md:text-gray-900 md:dark:text-white md:dark:bg-transparent md:bg-transparent`}
        >
          <i
            className="fa-solid fa-xmark absolute top-6 right-8 text-2xl cursor-pointer md:hidden hover:text-gray-300 "
            onClick={handleToggleMenu}
          ></i>
          <a
            href="#home"
            className="hover:bg-gray-700 hover:text-white dark:hover:bg-gray-900 md:dark:hover:bg-gray-700  w-full text-center py-4 md:px-4 md:rounded-md"
            onClick={handleToggleMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:bg-gray-700 hover:text-white dark:hover:bg-gray-900 md:dark:hover:bg-gray-700 w-full text-center py-3  md:px-4 md:rounded-md"
            onClick={handleToggleMenu}
          >
            About
          </a>
          <a
            href="#project"
            className="hover:bg-gray-700 hover:text-white dark:hover:bg-gray-900 md:dark:hover:bg-gray-700  w-full text-center py-3 md:px-4 md:rounded-md"
            onClick={handleToggleMenu}
          >
            Project
          </a>
          <button
            className=" hover:bg-gray-700 hover:text-white dark:hover:bg-gray-900 md:dark:hover:bg-gray-700  w-full text-center py-4 md:px-4 md:rounded-md"
            onClick={handleToggleMenu}
          >
            <a href="#contact">Contact</a>
          </button>
        </ul>
        <div className="flex text-3xl gap-6">
          <span className="flex items-center">
            <i
              className="fa-solid fa-bars md:hidden hover:cursor-pointer"
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            ></i>
          </span>

          <li
            onClick={handleSetDark}
            className=" hover:cursor-pointer w-10 flex items-center justify-center"
          >
            {isDark ? (
              <img src={lightMode} alt="sun" className="w-full h-full" />
            ) : (
              <img src={darkMode} alt="moon" className="w-[20px] h-[20px]" />
            )}
          </li>
        </div>
      </nav>
    </header>
  );
}
