import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
import { Header } from "../components/Header";

export function MainContainer({ onSetDark, isDark }) {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Home>
        <Header onSetDark={onSetDark} isDark={isDark} />
      </Home>
      <About />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}
