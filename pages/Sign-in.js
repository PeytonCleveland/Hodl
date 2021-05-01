const SignIn = () => {
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
            Sign in to your account
          </h2>
          <p class="mt-2 text-center text-sm text-gray-400">
            Or{" "}
            <a href="#" class="font-medium text-green-400 hover:text-green-500">
              create your account
            </a>
          </p>
        </div>
        <form
          className="mt-8 space-y-6 bg-gradient-to-br from-gray-800 to-gray-900 px-5 md:px-12 py-10 shadow-lg z-30"
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

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-green-400 form-checkbox focus:ring-indigo-500 border-gray-300"
              />
              <label for="remember_me" class="ml-2 block text-sm text-gray-300">
                Remember me
              </label>
            </div>

            <div class="text-sm">
              <a href="#" class="font-medium text-primary hover:text-green-400">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent transform duration-300 hover:scale-103 text-lg font-extrabold text-gray-900 bg-gradient-to-br from-green-400 to-green-500 hover:from-green-500 hover:to-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
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
            <div className="flex justify-center items-center rounded-full py-1.5 bg-gray-200">
              <img src="/google.svg" className="h-6" />
            </div>
            <div className="flex justify-center items-center rounded-full py-1.5 bg-gray-200">
              <img src="/github.svg" className="h-7" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
