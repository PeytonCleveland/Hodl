import Link from "next/link";
const Forgot = () => {
  return (
    <div class="flex items-center justify-center px-4 py-12 w-screen min-h-screen bg-gradient-to-br from-primary to-secondary sm:px-6 lg:px-8">
      <div
        style={{
          backgroundImage: `url("grid.png")`,
          height: `100%`,
          width: `100%`,
          position: `absolute`,
          left: `0`,
          top: `0`,
          zIndex: `1`,
        }}
      ></div>
      <div class="z-30 flex flex-col items-center w-full max-w-md space-y-8">
        <div>
          <h2 class="text-center text-gray-200 text-2xl font-extrabold md:text-4xl">
            Reset Password
          </h2>
        </div>
        <form
          className="z-30 mt-8 pt-7 px-5 py-10 w-full bg-gradient-to-br shadow-lg from-gray-800 to-gray-900 space-y-6 md:px-12"
          action="#"
          method="POST"
        >
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label
                for="email-address"
                className="text-gray-200 text-sm font-bold"
              >
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                className="placeholder-gray-400 relative focus:z-10 block mb-4 mt-1 px-3 py-2 w-full text-gray-900 bg-gray-200 focus:outline-none appearance-none sm:text-sm"
                placeholder="Example@email.com"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="group relative flex justify-center px-4 py-2 w-full text-gray-900 text-lg font-extrabold bg-gradient-to-br border border-transparent focus:outline-none from-green-400 hover:from-green-500 to-green-500 hover:to-green-500 transform hover:scale-103 duration-300 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-2"
            >
              Request Reset
            </button>
          </div>
        </form>
        <div className="w-full">
          <Link href="/sign-in">
            <p className="flex flex-row w-min text-gray-200 hover:text-green-400 font-extrabold cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              BACK
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
