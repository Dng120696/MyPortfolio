export function Header({ onSetDark, isDark }) {
  function handleSetDark() {
    const newIsDark = !isDark;
    onSetDark(newIsDark);
    localStorage.setItem("isDark", JSON.stringify(newIsDark));
  }

  return (
    <header className=" font-semibold">
      <nav className="w-[clamp(30rem,90%,120rem)]  m-auto  flex items-center justify-between fixed top-20 left-[50%] translate-x-[-50%] translate-y-[-50%] z-[100]">
        <h1 className="text-4xl font-bold ">My Portfolio</h1>
        <ul className="flex gap-16 items-center">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#project">Project</a>
          <button className=" py-3 px-6 bg-gray-800 hover:bg-gray-900  text-white rounded-lg">
            <a href="#contact">Contact</a>
          </button>
          <li
            onClick={handleSetDark}
            className="text-3xl hover:cursor-pointer w-10 flex items-center justify-center"
          >
            {isDark ? (
              <i className="fa-solid fa-moon"></i>
            ) : (
              <i className="fa-regular fa-sun"></i>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
