import React from "react";

function HeroHome() {
  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40">
          {/* Section header */}
          <div className="text-center pb-12">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Make Rexburg{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-purple-600">
                less boring
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Trying to figure out what to do for FHE, date night, or ward
                activity? We gotchu.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none flex justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <a
                  className="relative w-1/2 w-auto block text-sm font-semibold bg-purple-500 hover:bg-purple-600 rounded-lg text-white px-4 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                  href="#game-tiles"
                >
                  Browse rentals
                </a>
                {/* <button
                  // className="relative w-1/2 w-auto block text-sm font-semibold bg-teal-600 rounded-lg text-white px-4 py-3 items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 hover:bg-teal-500"
                  className="relative w-1/2 w-auto block text-sm font-semibold bg-purple-500 hover:bg-purple-600 rounded-lg text-white px-4 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                  type="submit"
                >
                  Check out rentals
                </button> */}
                {/* <form action="submit">
                  <div className="sm:flex items-center sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 sm:pr-6 lg:pr-0">
                    <input
                      id="name"
                      type="text"
                      // className="form-input w-full text-gray-800"
                      // className="block w-full px-4 py-3 sm:text-sm bg-gray-700 text-gray-200 rounded-lg placeholder-gray-400 focus:bg-white focus:text-gray-900 focus:outline-none"
                      className="block w-full px-4 py-3 sm:text-sm text-gray-200 rounded-lg placeholder-gray-400 focus:bg-white focus:text-gray-900 focus:outline-none"
                      placeholder="Enter email"
                      required
                    />
                    <button
                      // className="relative w-1/2 w-auto block text-sm font-semibold bg-teal-600 rounded-lg text-white px-4 py-3 items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 hover:bg-teal-500"
                      className="relative w-1/2 w-auto block text-sm font-semibold bg-purple-500 hover:bg-purple-600 rounded-lg text-white px-4 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                      type="submit"
                    >
                      Notify me when you launch
                    </button>
                  </div>
                </form> */}
                {/* <div>
                  <a
                    className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                    href="#0"
                  >
                    Start free trial
                  </a>
                </div>
                <div>
                  <a
                    className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                    href="#0"
                  >
                    Learn more
                  </a>
                </div> */}
              </div>
            </div>
          </div>

          {/* Hero image */}
          {/* <div>
            <div
              className="relative flex justify-center mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="450"
            >
              <div className="flex flex-col justify-center">
                <img
                  style={{ objectFit: "cover", height: "40rem" }}
                  className="rounded"
                  src={require("../images/jenga.jpg").default}
                  width="768"
                  height="432"
                  alt="Hero"
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
