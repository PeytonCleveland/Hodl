import { useState } from "react";
import classNames from "classnames";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="container h-16 md:h-28 lg:w-full py-0 md:py-8 md:border-b-2 md:border-gray-900 flex flex-row bg-gradient-to-br from-gray-800 to-gray-900 md:from-transparent md:to-transparent shadow-xl md:shadow-none justify-between fixed md:absolute left-0 right-0 z-50">
      <div className="flex flex-row items-center space-x-4 ml-1.5">
        <img src="/vercel.svg" className="w-28 md:w-36 hidden md:block" />
        <img
          src="/Vercel-Primary.svg"
          className="w-28 md:w-36 block md:hidden"
        />
        <div className="group flex flex-row relative">
          <div className="bg-gradient-to-br from-green-400 to-green-500 text-gray-900 font-bold px-2.5 py-1 text-xs rounded-full italic cursor-help shadow-xl hidden md:block">
            BETA
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl text-gray-300 opacity-90 z-50 invisible group-hover:visible absolute left-14 w-44 h-auto text-xs text-center p-2 -mt-3">
            Hodl is currently in beta and not open to the public
          </div>
        </div>
      </div>
      <button
        className="block lg:hidden text-green-400 md:text-gray-900 mr-2.5"
        onClick={() => setOpen(!open)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 8h16M4 16h16"
          />
        </svg>
      </button>
      <div className="hidden lg:block">
        <Link href="/Sign-in">
          <button className="text-gray-200 text-base px-12 py-2 font-extrabold uppercase tracking-wide bg-gradient-to-br hover:text-green-400 transform duration-300 hover:scale-105">
            SIGN IN
          </button>
        </Link>
        <Link href="/Sign-up">
          <button className="bg-gradient-to-br from-gray-800 to-gray-900 text-gray-200 text-base px-10 py-2.5 ml-4 font-extrabold tracking-wider transform duration-300 hover:scale-103 uppercase hover:from-gray-800 hover:to-gray-800 shadow-xl">
            Sign up
          </button>
        </Link>
      </div>
      <div
        className={classNames(
          // Common classes
          "absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden",
          {
            block: open === true,
          },
          {
            hidden: open === false,
          }
        )}
      >
        <div class="shadow-lg ring-1 ring-black ring-opacity-5 bg-gradient-to-br from-gray-800 to-gray-900">
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <img src="/Vercel-Primary.svg" className="w-36" />
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => setOpen(!open)}
                  class="bg-gradient-to-br from-green-400 to-green-500 p-2 inline-flex items-center justify-center text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span class="sr-only">Close menu</span>
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <a
                  href="#"
                  class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <svg
                    class="flex-shrink-0 h-6 w-6 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  <span class="ml-3 text-base font-medium text-gray-200">
                    Analytics
                  </span>
                </a>

                <a
                  href="#"
                  class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <svg
                    class="flex-shrink-0 h-6 w-6 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    />
                  </svg>
                  <span class="ml-3 text-base font-medium text-gray-200">
                    Engagement
                  </span>
                </a>

                <a
                  href="#"
                  class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <svg
                    class="flex-shrink-0 h-6 w-6 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span class="ml-3 text-base font-medium text-gray-200">
                    Security
                  </span>
                </a>

                <a
                  href="#"
                  class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <svg
                    class="flex-shrink-0 h-6 w-6 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                  <span class="ml-3 text-base font-medium text-gray-200">
                    Integrations
                  </span>
                </a>

                <a
                  href="#"
                  class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <svg
                    class="flex-shrink-0 h-6 w-6 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  <span class="ml-3 text-base font-medium text-gray-200">
                    Automations
                  </span>
                </a>
              </nav>
            </div>
          </div>
          <hr className="mx-4 border-primary" />
          <div class="py-6 px-5 space-y-6">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
              <a
                href="#"
                class="text-base font-medium text-primary hover:text-gray-700"
              >
                Pricing
              </a>

              <a
                href="#"
                class="text-base font-medium text-primary hover:text-gray-700"
              >
                Docs
              </a>

              <a
                href="#"
                class="text-base font-medium text-primary hover:text-gray-700"
              >
                Help Center
              </a>

              <a
                href="#"
                class="text-base font-medium text-primary hover:text-gray-700"
              >
                Guides
              </a>

              <a
                href="#"
                class="text-base font-medium text-primary hover:text-gray-700"
              >
                Events
              </a>

              <a
                href="#"
                class="text-base font-medium text-primary hover:text-gray-700"
              >
                Security
              </a>
            </div>
            <div>
              <a
                href="#"
                class="w-full flex items-center justify-center px-4 py-3 border-transparent text-base font-bold text-gray-900 bg-gradient-to-br from-green-400 to-green-500"
              >
                Sign up
              </a>
              <p class="mt-6 text-center text-base font-medium text-gray-200">
                Existing customer?
                <a href="#" class="text-primary ml-2">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
