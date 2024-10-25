export default function loading() {
  return (
    <div className="flex flex-col lg:flex-row py-10 gap-10 justify-center items-start">
      <div className="h-52 w-[350px]  px-4 rounded-2xl shadow-2xl bg-zinc-800 flex items-center justify-center animate-pulse">
      <svg
          className="w-10 h-10 text-gray-200 dark:text-gray-600 animate-pulse"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div className=" bg-zinc-800/50 border-2 border-zinc-800 rounded-2xl p-5 w-full   md:w-[200px] h-36 flex flex-col justify-between shadow-2xl">
        <div>
          <div className="h-5 py-4 bg-zinc-700 animate-pulse rounded-full"> </div>
          <div className="h-2 my-4 py-3 bg-zinc-700 animate-pulse rounded-full"></div>
        </div>
        <div className="h-2 bg-zinc-700 animate-pulse rounded-full"></div>
      </div>
    </div>
  );
}
