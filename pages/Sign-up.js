import Link from "next/link";
const SignUp = () => {
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
            Create your account
          </h2>
          <p class="mt-2 text-center text-gray-400 text-sm">
            Or{" "}
            <Link href="/sign-in">
              <span className="text-green-400 hover:text-green-500 font-medium cursor-pointer">
                sign in to your account
              </span>
            </Link>
          </p>
        </div>
        <form
          className="z-30 mt-8 px-5 py-10 w-full bg-gradient-to-br shadow-lg from-gray-800 to-gray-900 space-y-6 md:px-10"
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
            <div>
              <label for="password" className="text-gray-200 text-sm font-bold">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                className="placeholder-gray-400 relative focus:z-10 block mb-4 mt-1 px-3 py-2 w-full text-gray-900 bg-gray-200 focus:outline-none appearance-none sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="group relative flex justify-center px-4 py-2 w-full text-gray-900 text-lg font-extrabold bg-gradient-to-br border border-transparent focus:outline-none from-green-400 hover:from-green-500 to-green-500 hover:to-green-500 transform hover:scale-103 duration-300 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-2"
            >
              Create account
            </button>
          </div>
          <div className="flex flex-row items-center justify-center w-full">
            <hr className="w-20 border-gray-500 md:w-24" />
            <p className="mx-3 text-center text-gray-400 text-sm">
              Or continue with
            </p>
            <hr className="w-20 border-gray-500 md:w-24" />
          </div>
          <div className="grid gap-8 grid-cols-2 w-full">
            <div className="flex items-center justify-center py-1.5 hover:bg-gray-100 bg-gray-200 rounded-full cursor-pointer transform hover:scale-103 duration-300">
              <img src="/google.svg" className="h-6" />
            </div>
            <div className="flex items-center justify-center py-1.5 hover:bg-gray-100 bg-gray-200 rounded-full cursor-pointer transform hover:scale-103 duration-300">
              <img src="/github.svg" className="h-7" />
            </div>
          </div>
        </form>
        <div className="w-full">
          <Link href="/">
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

export default SignUp;
