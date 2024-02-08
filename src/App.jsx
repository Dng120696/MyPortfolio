import { useState } from "react";
import { MainContainer } from "./pages/MainContainer";

export default function App() {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark")) || false
  );
  return (
    <div className={`h-full-screen ${isDark ? "dark" : ""}`}>
      <MainContainer onSetDark={setIsDark} isDark={isDark} />
    </div>
  );
}
