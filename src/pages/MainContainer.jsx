import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
import { Header } from "../components/Header";
import { useEffect } from "react";

export function MainContainer({ onSetDark, isDark }) {
  useEffect(() => {
    const section = document.querySelectorAll("section");

    const secEntry = (entries, observer) => {
      entries.forEach((entry) => {
        const { target, isIntersecting } = entry;
        target.classList.toggle("section--hidden", !isIntersecting);
        if (isIntersecting) {
          observer.unobserve(target);
        }
      });
    };

    const sectionObserver = new IntersectionObserver(secEntry, {
      root: null,
      threshold: 0.5,
    });

    section.forEach((sec) => sectionObserver.observe(sec));
  }, []);

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
