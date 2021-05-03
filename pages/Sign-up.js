import Link from "next/link";
const SignUp = () => {
  return (
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary py-12 px-4 sm:px-6 lg:px-8">
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
      <div class="max-w-md flex flex-col items-center w-full space-y-8 z-30">
        <div>
          <h2 class="text-center text-2xl md:text-4xl font-extrabold text-gray-200">
            Create your account
          </h2>
          <p class="mt-2 text-center text-sm text-gray-400">
            Or{" "}
            <Link href="/Sign-in">
              <span className="font-medium text-green-400 hover:text-green-500 cursor-pointer">
                sign in to your account
              </span>
            </Link>
          </p>
        </div>
        <form
          className="mt-8 space-y-6 bg-gradient-to-br w-full from-gray-800 to-gray-900 px-5 md:px-10 py-10 shadow-lg z-30"
          action="#"
          method="POST"
        >
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label
                for="email-address"
                className="text-sm text-gray-200 font-bold"
              >
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                className="appearance-none relative block w-full mt-1 px-3 py-2 bg-gray-200 placeholder-gray-400 text-gray-900 focus:outline-none focus:z-10 sm:text-sm mb-4"
                placeholder="Example@email.com"
              />
            </div>
            <div>
              <label for="password" className="text-sm text-gray-200 font-bold">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                className="appearance-none  relative block w-full mt-1 px-3 py-2 bg-gray-200 placeholder-gray-400 text-gray-900 focus:outline-none focus:z-10 sm:text-sm mb-4"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent transform duration-300 hover:scale-103 text-lg font-extrabold text-gray-900 bg-gradient-to-br from-green-400 to-green-500 hover:from-green-500 hover:to-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create account
            </button>
          </div>
          <div className="flex flex-row w-full justify-center items-center">
            <hr className="w-20 md:w-24 border-gray-500" />
            <p className="text-gray-400 text-sm text-center mx-3">
              Or continue with
            </p>
            <hr className="w-20 md:w-24 border-gray-500" />
          </div>
          <div className="grid grid-cols-2 gap-8 w-full">
            <div className="flex justify-center items-center rounded-full py-1.5 cursor-pointer bg-gray-200 transform duration-300 hover:scale-103 hover:bg-gray-100">
              <img src="/google.svg" className="h-6" />
            </div>
            <div className="flex justify-center items-center rounded-full py-1.5 cursor-pointer bg-gray-200 transform duration-300 hover:scale-103 hover:bg-gray-100">
              <img src="/github.svg" className="h-7" />
            </div>
          </div>
        </form>
        <div className="w-full">
          <Link href="/">
            <p className="cursor-pointer w-min font-extrabold text-gray-200 flex flex-row hover:text-green-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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

export default SignUp;
