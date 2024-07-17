import useStore from "../../store/store";

function ReactTech() {
  const projName = useStore((state) => state.projName);
  return (
    <>
      <a
        href="https://tailwindcss.com/"
        target="_blank"
        rel="noreferrer"
        className="flex items-center bg-gray-200 dark:bg-gray-600 px-4 py-2 rounded-lg"
      >
        <i className="devicon-tailwindcss-original colored mr-1"></i>
        Tailwind CSS
      </a>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/CSS"
        target="_blank"
        rel="noreferrer"
        className="flex items-center bg-gray-200 dark:bg-gray-600 px-4 py-2 rounded-lg"
      >
        <i className="devicon-css3-plain colored mr-1"></i>
        CSS
      </a>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        target="_blank"
        rel="noreferrer"
        className="flex items-center bg-gray-200 dark:bg-gray-600 px-4 py-2 rounded-lg"
      >
        <i className="devicon-javascript-plain colored mr-1"></i>
        JavaScript
      </a>

      {projName !== "restCountries" ? (
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center bg-gray-200 dark:bg-gray-600 px-4 py-2 rounded-lg"
        >
          <i className="devicon-react-original colored mr-1"></i>
          React.js
        </a>
      ) : (
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center bg-gray-200 dark:bg-gray-600 px-4 py-2 rounded-lg"
        >
          <i className="devicon-typescript-plain colored mr-1"></i>
          TypeScript
        </a>
      )}

      <a
        href="https://reactrouter.com/"
        target="_blank"
        rel="noreferrer"
        className="flex items-center bg-gray-200 dark:bg-gray-600 px-4 py-2 rounded-lg"
      >
        <i className="devicon-reactrouter-plain colored mr-1"></i>
        React Router
      </a>
      <a
        href="https://vitejs.dev/"
        target="_blank"
        rel="noreferrer"
        className="flex items-center bg-gray-200 dark:bg-gray-600 px-4 py-2 rounded-lg"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
          className="w-6   mr-1"
          alt="Vite"
        />
        Vite
      </a>
      {projName !== "restCountries" && (
        <a
          href="https://vitest.dev/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center bg-gray-200 dark:bg-gray-600 px-4 py-2 rounded-lg"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg"
            className="w-6  mr-1"
            alt="Vitest"
          />
          Vitest
        </a>
      )}
    </>
  );
}

export default ReactTech;
