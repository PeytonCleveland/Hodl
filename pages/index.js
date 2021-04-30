import TextLoop from "react-text-loop";
import Link from "next/link";

const Home = () => {
  return (
    <section className="w-screen flex flex-col bg-gradient-to-br from-primary to-secondary pt-28 md:pt-44">
      <div className="container flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 uppercase text-center md:text-left">
          Create your
          <br className="block md:hidden" />
          <TextLoop>
            <span className="text-4xl md:text-5xl lg:text-7xl ml-0 md:ml-5 bg-clip-text bg-gradient-to-tl from-green-400 to-green-500 text-transparent">
              ADA
            </span>
            <span className="text-4xl md:text-5xl lg:text-7xl ml-0 md:ml-5 bg-clip-text bg-gradient-to-tl from-green-400 to-green-500 text-transparent">
              ETHEREUM
            </span>
            <span className="text-4xl md:text-5xl lg:text-7xl ml-0 md:ml-5 bg-clip-text bg-gradient-to-tl from-green-400 to-green-500 text-transparent">
              ATOM
            </span>
            <span className="text-4xl md:text-5xl lg:text-7xl ml-0 md:ml-5 bg-clip-text bg-gradient-to-tl from-green-400 to-green-500 text-transparent">
              NEO
            </span>
            <span className="text-4xl md:text-5xl lg:text-7xl ml-0 md:ml-5 bg-clip-text bg-gradient-to-tl from-green-400 to-green-500 text-transparent">
              TEZOS
            </span>
          </TextLoop>
          <br /> stake pool instantly
        </h1>
        <button className="bg-gradient-to-br from-green-400 to-green-500 hover:from-green-500 hover:to-green-500 transform duration-300 hover:scale-103 font-extrabold text-lg px-7 py-3 mt-5 shadow-xl block md:hidden">
          CREATE STAKE POOL
        </button>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-3 mt-16 pb-10">
        <div className="hidden md:block">
          <div className="w-24 h-2 bg-gradient-to-br from-green-400 to-green-500 mb-5" />
          <h2 className="text-3xl text-gray-200 font-extrabold mb-4 uppercase">
            Create and discover stake pools for your favorite crypto
          </h2>
          <h3 className="text-xl text-gray-400 font-semibold mb-8">
            Join and explore the crypto community, share and promote your stake
            pool
          </h3>
          <Link href="/Sign-up">
            <button className="bg-gradient-to-br from-green-400 to-green-500 hover:from-green-500 hover:to-green-500 transform duration-300 hover:scale-103 font-extrabold text-xl px-8 py-4 shadow-xl flex items-center flex-row">
              CREATE STAKE POOL
            </button>
          </Link>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="w-11/12 md:w-10/12 bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-800 hover:to-gray-800 px-5 md:px-7 py-5 pb-1 md:pb-7 shadow-xl relative cursor-pointer transform duration-300 hover:scale-103 group">
            <span
              role="img"
              aria-label="sheep"
              className="text-6xl h-auto absolute left-0 top-0 -ml-2 md:-ml-4 -mt-4 md:-mt-6 transform origin-bottom-left duration-300 group-hover:rotate-45"
            >
              🔎
            </span>
            <h4 className="text-gray-100 font-extrabold text-xl text-center md:text-left md:text-3xl">
              EXPLORE STAKE <br className="hidden md:block" /> POOLS
            </h4>
            <div className="bg-gradient-to-br from-green-400 to-green-500 w-auto my-3 py-1.5 grid grid-cols-4">
              <h6 className="text-sm font-extrabold text-gray-800 flex justify-center">
                POOL
              </h6>
              <h6 className="text-sm font-extrabold flex justify-center text-gray-800">
                REWARDS
              </h6>
              <h6 className="text-sm font-extrabold flex justify-center text-gray-800">
                STAKE
              </h6>
              <h6 className="text-sm font-extrabold flex justify-center text-gray-800">
                FEE%
              </h6>
            </div>
            <div className="w-auto my-3 py-1.5 grid grid-cols-4">
              <h6 className="text-xs font-bold text-gray-200">Solar Pool</h6>
              <h6 className="text-xs font-bold text-center text-gray-200">
                4.58%
              </h6>
              <h6 className="text-xs font-bold text-center text-gray-200">
                44.29k
              </h6>
              <h6 className="text-xs font-bold text-right text-gray-200">
                2.13% + 340
              </h6>
            </div>
            <hr className="mx-0 md:mx-4 border-gray-500" />
            <div className="w-auto my-3 py-1.5 grid grid-cols-4">
              <h6 className="text-xs font-bold text-gray-200">Solar Pool</h6>
              <h6 className="text-xs font-bold text-center text-gray-200">
                4.58%
              </h6>
              <h6 className="text-xs font-bold text-center text-gray-200">
                44.29k
              </h6>
              <h6 className="text-xs font-bold text-right text-gray-200">
                2.13% + 340
              </h6>
            </div>
            <hr className="mx-0 md:mx-4 border-gray-500" />
            <div className="w-auto my-3 py-1.5 grid grid-cols-4">
              <h6 className="text-xs font-bold text-gray-200">Solar Pool</h6>
              <h6 className="text-xs font-bold text-center text-gray-200">
                4.58%
              </h6>
              <h6 className="text-xs font-bold text-center text-gray-200">
                44.29k
              </h6>
              <h6 className="text-xs font-bold text-right text-gray-200">
                2.13% + 340
              </h6>
            </div>
            <hr className="mx-0 md:mx-4 border-gray-500" />
            <div className="w-auto my-3 py-1.5 grid grid-cols-4">
              <h6 className="text-xs font-bold text-gray-200">Solar Pool</h6>
              <h6 className="text-xs font-bold text-center text-gray-200">
                4.58%
              </h6>
              <h6 className="text-xs font-bold text-center text-gray-200">
                44.29k
              </h6>
              <h6 className="text-xs font-bold text-right text-gray-200">
                2.13% + 340
              </h6>
            </div>
            <hr className="mx-0 md:mx-4 border-gray-500" />

            <div className="w-auto my-3 py-1.5 grid grid-cols-4">
              <h6 className="text-xs font-bold text-gray-200">Solar Pool</h6>
              <h6 className="text-xs font-bold text-center text-gray-200">
                4.58%
              </h6>
              <h6 className="text-xs font-bold text-center text-gray-200">
                44.29k
              </h6>
              <h6 className="text-xs font-bold text-right text-gray-200">
                2.13% + 340
              </h6>
            </div>

            <p className="hidden md:block text-center text-gray-200 font-bold mt-4">
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
        <div className="hidden md:flex justify-end">
          <div className="w-10/12 relative h-full group bg-gradient-to-br from-green-400 to-green-700 hover:from-green-500 hover:to-green-600 cursor-pointer px-7 py-5 shadow-xl transform duration-300 hover:scale-103">
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
              <div className="absolute left-5 text-gray-100 uppercase font-extrabold text-3xl top-36 z-30">
                We do the work, <br /> You get the rewards.
              </div>
              <Link href="/Sign-up">
                <button className="absolute bottom-8 right-8 bg-gradient-to-br from-green-400 to-green-500 px-6 py-2 z-30 text-lg font-extrabold transform duration-300 hover:scale-105 hover:from-green-500 hover:from-green-500">
                  START NOW
                </button>
              </Link>
              <div className="flex flex-col items-center w-48 space-y-4 -mt-6 ml-5">
                <div className="w-48 h-16 bg-gray-100 relative rounded-full shadow-lg flex justify-center items-center animate-bounce-slow transform group-hover:-translate-y-2 duration-300">
                  <div className="absolute left-0 right-0 m-auto bottom-0 bg-gray-100 w-12 h-12 transform rotate-45" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 z-30 text-green-500 mr-2"
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
                  <h6 className="z-30 text-gray-900 font-extrabold text-3xl">
                    $172.90
                  </h6>
                </div>
                <h6 className="text-2xl font-extrabold text-gray-900">
                  REWARDS{" "}
                  <span
                    role="img"
                    aria-label="sheep"
                    className="text-2xl h-auto"
                  >
                    🎉
                  </span>
                </h6>
              </div>
            </div>
            <img
              src="/up-bg.svg"
              className=" w-full absolute bottom-0 left-0"
            />
            <img
              src="/arrow.svg"
              className="w-10/12 absolute bottom-10 left-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
