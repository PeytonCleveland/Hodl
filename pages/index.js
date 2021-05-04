import TextLoop from "react-text-loop";
import Link from "next/link";

const Home = () => {
  return (
    <section className="flex flex-col pt-28 w-screen bg-gradient-to-br from-primary to-secondary md:pt-44">
      <div className="container flex flex-col items-center justify-between md:flex-row">
        <h1 className="text-center text-gray-900 text-4xl font-extrabold uppercase md:text-left md:text-5xl lg:text-7xl">
          Create your
          <br className="block md:hidden" />
          <TextLoop>
            <span className="ml-0 text-transparent text-4xl bg-gradient-to-tl bg-clip-text from-green-400 to-green-500 md:ml-5 md:text-5xl lg:text-7xl">
              ADA
            </span>
            <span className="ml-0 text-transparent text-4xl bg-gradient-to-tl bg-clip-text from-green-400 to-green-500 md:ml-5 md:text-5xl lg:text-7xl">
              ETHEREUM
            </span>
            <span className="ml-0 text-transparent text-4xl bg-gradient-to-tl bg-clip-text from-green-400 to-green-500 md:ml-5 md:text-5xl lg:text-7xl">
              ATOM
            </span>
            <span className="ml-0 text-transparent text-4xl bg-gradient-to-tl bg-clip-text from-green-400 to-green-500 md:ml-5 md:text-5xl lg:text-7xl">
              NEO
            </span>
            <span className="ml-0 text-transparent text-4xl bg-gradient-to-tl bg-clip-text from-green-400 to-green-500 md:ml-5 md:text-5xl lg:text-7xl">
              TEZOS
            </span>
          </TextLoop>
          <br /> stake pool instantly
        </h1>
        <button className="block mt-5 px-7 py-3 text-lg font-extrabold bg-gradient-to-br shadow-xl from-green-400 hover:from-green-500 to-green-500 hover:to-green-500 transform hover:scale-103 duration-300 md:hidden">
          CREATE STAKE POOL
        </button>
      </div>
      <div className="container grid grid-cols-1 mt-16 pb-10 md:grid-cols-3">
        <div className="hidden md:block">
          <div className="mb-5 w-24 h-2 bg-gradient-to-br from-green-400 to-green-500" />
          <h2 className="mb-4 text-gray-200 text-3xl font-extrabold uppercase">
            Create and discover stake pools for your favorite crypto
          </h2>
          <h3 className="mb-8 text-gray-400 text-xl font-semibold">
            Join and explore the crypto community, share and promote your stake
            pool
          </h3>
          <Link href="/Sign-up">
            <button className="flex flex-row items-center px-8 py-4 text-xl font-extrabold bg-gradient-to-br shadow-xl from-green-400 hover:from-green-500 to-green-500 hover:to-green-500 transform hover:scale-103 duration-300">
              CREATE STAKE POOL
            </button>
          </Link>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="group relative pb-1 px-5 py-5 w-11/12 bg-gradient-to-br shadow-xl from-gray-800 hover:from-gray-800 hover:to-gray-800 to-gray-900 cursor-pointer transform hover:scale-103 duration-300 md:pb-7 md:px-7 md:w-10/12">
            <span
              role="img"
              aria-label="sheep"
              className="absolute left-0 top-0 -ml-2 -mt-4 h-auto text-6xl transform origin-bottom-left group-hover:rotate-45 duration-300 md:-ml-4 md:-mt-6"
            >
              🔎
            </span>
            <h4 className="text-center text-gray-100 text-xl font-extrabold md:text-left md:text-3xl">
              EXPLORE STAKE <br className="hidden md:block" /> POOLS
            </h4>
            <div className="grid grid-cols-4 my-3 py-1.5 w-auto bg-gradient-to-br from-green-400 to-green-500">
              <h6 className="flex justify-center text-gray-800 text-sm font-extrabold">
                POOL
              </h6>
              <h6 className="flex justify-center text-gray-800 text-sm font-extrabold">
                REWARDS
              </h6>
              <h6 className="flex justify-center text-gray-800 text-sm font-extrabold">
                STAKE
              </h6>
              <h6 className="flex justify-center text-gray-800 text-sm font-extrabold">
                FEE%
              </h6>
            </div>
            <div className="grid grid-cols-4 my-3 py-1.5 w-auto">
              <h6 className="text-gray-200 text-xs font-bold">Solar Pool</h6>
              <h6 className="text-center text-gray-200 text-xs font-bold">
                4.58%
              </h6>
              <h6 className="text-center text-gray-200 text-xs font-bold">
                44.29k
              </h6>
              <h6 className="text-right text-gray-200 text-xs font-bold">
                2.13% + 340
              </h6>
            </div>
            <hr className="mx-0 border-gray-500 md:mx-4" />
            <div className="grid grid-cols-4 my-3 py-1.5 w-auto">
              <h6 className="text-gray-200 text-xs font-bold">Solar Pool</h6>
              <h6 className="text-center text-gray-200 text-xs font-bold">
                4.58%
              </h6>
              <h6 className="text-center text-gray-200 text-xs font-bold">
                44.29k
              </h6>
              <h6 className="text-right text-gray-200 text-xs font-bold">
                2.13% + 340
              </h6>
            </div>
            <hr className="mx-0 border-gray-500 md:mx-4" />
            <div className="grid grid-cols-4 my-3 py-1.5 w-auto">
              <h6 className="text-gray-200 text-xs font-bold">Solar Pool</h6>
              <h6 className="text-center text-gray-200 text-xs font-bold">
                4.58%
              </h6>
              <h6 className="text-center text-gray-200 text-xs font-bold">
                44.29k
              </h6>
              <h6 className="text-right text-gray-200 text-xs font-bold">
                2.13% + 340
              </h6>
            </div>
            <hr className="mx-0 border-gray-500 md:mx-4" />
            <div className="grid grid-cols-4 my-3 py-1.5 w-auto">
              <h6 className="text-gray-200 text-xs font-bold">Solar Pool</h6>
              <h6 className="text-center text-gray-200 text-xs font-bold">
                4.58%
              </h6>
              <h6 className="text-center text-gray-200 text-xs font-bold">
                44.29k
              </h6>
              <h6 className="text-right text-gray-200 text-xs font-bold">
                2.13% + 340
              </h6>
            </div>
            <hr className="mx-0 border-gray-500 md:mx-4" />

            <div className="grid grid-cols-4 my-3 py-1.5 w-auto">
              <h6 className="text-gray-200 text-xs font-bold">Solar Pool</h6>
              <h6 className="text-center text-gray-200 text-xs font-bold">
                4.58%
              </h6>
              <h6 className="text-center text-gray-200 text-xs font-bold">
                44.29k
              </h6>
              <h6 className="text-right text-gray-200 text-xs font-bold">
                2.13% + 340
              </h6>
            </div>

            <p className="hidden mt-4 text-center text-gray-200 font-bold md:block">
              Stake your{" "}
              <TextLoop>
                <span>ADA</span>
                <span>ETHEREUM</span>
                <span>ATOM</span>
                <span>NEO</span>
                <span>TEZOS</span>
              </TextLoop>{" "}
              –{" "}
              <span className="text-green-400 font-bold cursor-pointer">
                Earn Rewards!
              </span>
            </p>
          </div>
        </div>
        <div className="hidden justify-end md:flex">
          <div className="group relative px-7 py-5 w-10/12 h-full bg-gradient-to-br shadow-xl from-green-400 hover:from-green-500 hover:to-green-600 to-green-700 cursor-pointer transform hover:scale-103 duration-300">
            <div
              style={{
                backgroundImage: `url("grid.png")`,
                height: `100%`,
                width: `100%`,
                position: `absolute`,
                left: `0`,
                top: `0`,
              }}
            >
              <div className="absolute z-30 left-5 top-36 text-gray-100 text-3xl font-extrabold uppercase">
                We do the work, <br /> You get the rewards.
              </div>
              <Link href="/Sign-up">
                <button className="absolute z-30 bottom-8 right-8 px-6 py-2 text-lg font-extrabold bg-gradient-to-br from-green-400 hover:from-green-500 to-green-500 hover:to-green-500 transform hover:scale-105 duration-300">
                  START NOW
                </button>
              </Link>
              <div className="flex flex-col items-center -mt-6 ml-5 w-48 space-y-4">
                <div className="relative flex items-center justify-center w-48 h-16 bg-gray-100 rounded-full shadow-lg transform group-hover:-translate-y-2 animate-bounce-slow duration-300">
                  <div className="absolute bottom-0 left-0 right-0 m-auto w-12 h-12 bg-gray-100 transform rotate-45" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="z-30 mr-2 w-8 h-8 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  <h6 className="z-30 text-gray-900 text-3xl font-extrabold">
                    $172.90
                  </h6>
                </div>
                <h6 className="text-gray-900 text-2xl font-extrabold">
                  REWARDS{" "}
                  <span
                    role="img"
                    aria-label="sheep"
                    className="h-auto text-2xl"
                  >
                    🎉
                  </span>
                </h6>
              </div>
            </div>
            <img src="/up-bg.svg" className="absolute bottom-0 left-0 w-full" />
            <img
              src="/arrow.svg"
              className="absolute bottom-10 left-4 w-10/12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
