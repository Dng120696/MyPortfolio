import { useState } from "react";
import { MainContainer } from "./pages/MainContainer";
import useStore from "./store/store";

export default function App() {
  const state = useStore();
  const { isOpenProjectModal, setOpenProjectModal } = state;
  console.log(isOpenProjectModal);

  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark")) || false
  );
  return (
    <div className={`h-full-screen ${isDark ? "dark" : ""}  `}>
      <MainContainer onSetDark={setIsDark} isDark={isDark} />
      {isOpenProjectModal && (
        <div
          className="overlay "
          onClick={() => setOpenProjectModal(false)}
        ></div>
      )}
    </div>
  );
}
