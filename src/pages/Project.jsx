import BankingApp from "../components/Projects/BankingApp";
import JournalApp from "../components/Projects/JournalApp";
import OnlineStoreApp from "../components/Projects/OnlineStoreApp";
import SlackClone from "../components/Projects/SlackClone";
import StockTradingApp from "../components/Projects/StockTradingApp";

function Project() {
  return (
    <section
      id="project"
      className="h-min w-[clamp(30rem,90%,120rem)]  m-auto py-40 border-b-[1px] dark:border-gray-600 border-gray-300 gap-10 "
    >
      <div className="projects mb-12">
        <p className="dark:text-gray-400 text-gray-400 font-bold text-2xl mb-4">
          Discover
        </p>
        <h1 className=" text-5xl font-bold tracking-[2px] dark:text-gray-200 text-gray-800">
          My Project
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        <SlackClone />
        <BankingApp />
        <OnlineStoreApp />
        <StockTradingApp />
        <JournalApp />
      </div>
    </section>
  );
}

export default Project;
