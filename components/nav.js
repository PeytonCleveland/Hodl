import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import classNames from "classnames";

const Nav = () => {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  const activeStyleFull =
    "flex flex-row w-full items-center space-x-4 border-r-4 border-green-400 bg-green-400 bg-opacity-20 py-2 mb-2 cursor-pointer pl-6 text-gray-100";

  const activeStyleCompact =
    "flex flex-row w-full items-center transform pl-1 justify-center space-x-4 border-r-4 border-green-400 bg-green-400 bg-opacity-20 py-2 mb-2 cursor-pointer text-gray-100";

  const inactiveStyleFull =
    "flex flex-row w-full items-center space-x-4 py-2 mb-2 group cursor-pointer pl-6 text-gray-400";

  const inactiveStyleCompact =
    "flex flex-row w-full items-center justify-center space-x-4 py-2 mb-2 group cursor-pointer text-gray-400";

  return (
    <div
      className={classNames(
        // Common classes
        "flex flex-col justify-between pt-8 h-screen bg-gradient-to-br from-gray-800 to-gray-900",
        // Full-size
        {
          "w-64": open === true,
        },
        // Compact
        {
          "w-20": open === false,
        }
      )}
    >
      <div className="flex flex-col w-full">
        <div
          className="flex flex-row justify-between mb-6 w-full"
          className={classNames(
            // Common classes
            "flex flex-row mb-6 w-full",
            // Full-size
            {
              "justify-between": open === true,
            },
            // Compact
            {
              "justify-center": open === false,
            }
          )}
        >
          <img
            src="/Vercel-Primary.svg"
            className={classNames(
              // Common classes
              "mb-6 ml-6 w-32",
              // Full-size
              {
                block: open === true,
              },
              // Compact
              {
                hidden: open === false,
              }
            )}
          />
          <button
            onClick={() => setOpen(!open)}
            className={classNames(
              // Common classes
              ".5 p-0 w-8 h-8 text-gray-200 bg-green-400 bg-opacity-25 hover:bg-opacity-30 border-2 border-green-700 focus:outline-none cursor-pointer transform hover:scale-105 duration-300",
              // Full-size
              {
                "mr-6": open === true,
              },
              // Compact
              {
                "mr-0 rotate-180": open === false,
              }
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          className={
            router.pathname === "/App/Dashboard"
              ? open
                ? activeStyleFull
                : activeStyleCompact
              : open
              ? inactiveStyleFull
              : inactiveStyleCompact
          }
        >
          <Link href="/App/Dashboard">
            <div className="flex flex-row space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>

              <h5
                className={classNames(
                  "text-md font-semibold",
                  { hidden: open === false },
                  { block: open === true }
                )}
              >
                Dashboard
              </h5>
            </div>
          </Link>
        </div>
        <div
          className={
            router.pathname === "/App/Explore"
              ? open
                ? activeStyleFull
                : activeStyleCompact
              : open
              ? inactiveStyleFull
              : inactiveStyleCompact
          }
        >
          <Link href="/App/Explore">
            <button className="flex flex-row focus:outline-none space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 group-hover:text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>

              <h5
                className={classNames(
                  "text-md group-hover:text-green-400 font-semibold",
                  { hidden: open === false },
                  { block: open === true }
                )}
              >
                Explore
              </h5>
            </button>
          </Link>
        </div>
        <div
          className={
            router.pathname === "/App/Prices"
              ? open
                ? activeStyleFull
                : activeStyleCompact
              : open
              ? inactiveStyleFull
              : inactiveStyleCompact
          }
        >
          <Link href="/App/Prices">
            <button className="flex flex-row focus:outline-none space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 group-hover:text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <h5
                className={classNames(
                  "text-md group-hover:text-green-400 font-semibold",
                  { hidden: open === false },
                  { block: open === true }
                )}
              >
                Prices
              </h5>
            </button>
          </Link>
        </div>

        <div
          className={
            router.pathname === "/App/Learn"
              ? open
                ? activeStyleFull
                : activeStyleCompact
              : open
              ? inactiveStyleFull
              : inactiveStyleCompact
          }
        >
          <Link href="/App/Learn">
            <button className="flex flex-row focus:outline-none space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 group-hover:text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h5
                className={classNames(
                  "text-md group-hover:text-green-400 font-semibold",
                  { hidden: open === false },
                  { block: open === true }
                )}
              >
                Learn
              </h5>
            </button>
          </Link>
        </div>

        <div
          className={
            router.pathname === "/App/Wallets"
              ? open
                ? activeStyleFull
                : activeStyleCompact
              : open
              ? inactiveStyleFull
              : inactiveStyleCompact
          }
        >
          <Link href="/App/Wallets">
            <button className="flex flex-row focus:outline-none space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 group-hover:text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>

              <h5
                className={classNames(
                  "text-md group-hover:text-green-400 font-semibold",
                  { hidden: open === false },
                  { block: open === true }
                )}
              >
                Wallets
              </h5>
            </button>
          </Link>
        </div>
        <div
          className={
            router.pathname === "/App/News"
              ? open
                ? activeStyleFull
                : activeStyleCompact
              : open
              ? inactiveStyleFull
              : inactiveStyleCompact
          }
        >
          <Link href="/App/News">
            <button className="flex flex-row focus:outline-none space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 group-hover:text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>

              <h5
                className={classNames(
                  "text-md group-hover:text-green-400 font-semibold",
                  { hidden: open === false },
                  { block: open === true }
                )}
              >
                News
              </h5>
            </button>
          </Link>
        </div>
      </div>
      <div
        className={classNames(
          "relative mb-8 ml-6 mr-6 h-64 bg-gradient-to-br from-primary to-secondary",
          { hidden: open === false },
          { block: open === true }
        )}
      >
        <div
          style={{
            backgroundImage: `url("../grid.png")`,
            height: `100%`,
            width: `100%`,
            position: `absolute`,
            left: `0`,
            top: `0`,
            backgroundSize: `cover`,
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `space-between`,
          }}
        >
          <div>
            <div className="flex flex-row justify-between mt-2 px-4">
              <h5 className="text-gray-200 text-lg font-extrabold leading-6">
                New feature{" "}
                <span role="img" aria-label="sheep" className="text-md h-auto">
                  🎉
                </span>
              </h5>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-200 hover:text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <p className="mt-4 px-4 text-gray-200 text-xs">
              Lorem ipsum dolor sit amet! Consectetor adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <button className="text-md mb-5 mx-4 py-1.5 w-10/12 text-gray-900 font-extrabold bg-gradient-to-br shadow-lg from-green-400 hover:from-green-500 to-green-500 hover:to-green-500 transform hover:scale-103 duration-300">
            Check it out
          </button>
        </div>
      </div>
    </div>
  );
};
export default Nav;
