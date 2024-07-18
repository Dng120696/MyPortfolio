import BankingApp from "../components/Projects/BankingApp";
import JournalApp from "../components/Projects/JournalApp";
import OnlineStoreApp from "../components/Projects/OnlineStoreApp";
import SlackClone from "../components/Projects/SlackClone";
import StockTradingApp from "../components/Projects/StockTradingApp";
import Loading from "../components/Loading";
import { useState, useEffect } from "react";
import RestCountriesAPI from "../components/Projects/RestCountriesAPI";

function Project() {
  const [isSeeMore, setSeeMore] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [showOther, setShowOther] = useState(false);

  useEffect(() => {
    if (isSeeMore) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        setShowOther(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setShowOther(false);
    }
  }, [isSeeMore]);
  return (
    <>
      <section
        id="project"
        className="h-min w-[clamp(30rem,90%,120rem)] m-auto pt-32 pb-40 border-b-[1px] border-gray-400 gap-10 relative  "
      >
        <div className="projects mb-12">
          <p className="dark:text-gray-400 text-gray-400 font-bold text-2xl mb-4">
            Discover
          </p>
          <h1 className="text-5xl font-bold tracking-[2px] dark:text-gray-200 text-gray-800 mb-20">
            My Project
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 sm:gap-20 md:gap-24 lg:gap-32">
          <OnlineStoreApp />
          <StockTradingApp />
          <SlackClone />
          <BankingApp />
          {showOther && !isLoading && (
            <>
              {" "}
              <JournalApp />
              <RestCountriesAPI />
            </>
          )}
        </div>
        {isLoading && <Loading />}

        <button
          className="text-xl lg:text-2xl font-bold absolute bottom-6 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[50] bg-gray-200  text-gray-700 dark:bg-gray-800 dark:text-gray-200  rounded-full py-3 px-8 flex gap-4 items-center "
          onClick={() => setSeeMore((seeMore) => !seeMore)}
        >
          <span className="">
            <i
              className={`fa-solid ${
                !isSeeMore ? "fa-chevron-down" : "fa-chevron-up"
              } `}
            ></i>
          </span>
          <span>View {isSeeMore ? "Less" : "More"}</span>
        </button>
      </section>
    </>
  );
}

export default Project;
