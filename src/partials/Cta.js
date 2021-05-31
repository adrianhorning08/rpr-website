import React from "react";

function Cta() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:pb-20">
          {/* CTA box */}
          <div
            className="bg-purple-600 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl"
            // className="bg-gradient-to-r from-red-400 to-purple-600 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl"
            data-aos="zoom-y-out"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center">
              {/* CTA content */}
              <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
                <h3 className="h3 text-white mb-2">
                  Whoops. You missed all the good stuff. 🤷‍♂️
                </h3>
                {/* <p className="text-white text-lg opacity-75">
                  We have a generous free tier available to get you started
                  right away.
                </p> */}
              </div>

              {/* CTA button */}
              <div>
                <a
                  className="btn text-purple-600 bg-gradient-to-r from-blue-100 to-white"
                  href="#game-tiles"
                >
                  Beam me up Scotty
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
