import loading from "../assets/loading.svg";

function Loading() {
  return (
    <div
      className={`spinner flex items-center justify-center gap-2 w-full text-xl   h-[30vh]  `}
    >
      <img src={loading} alt="loading" className=" w-10 h-10" />
    </div>
  );
}

export default Loading;
