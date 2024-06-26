import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Horizon Solutions</title>
        <meta name="description" content="Horizon Solutions Home page" />
      </Helmet>
      <div className="bg-gradient-to-r from-slate-900 to-slate-800">
        <NavBar />
        <div className="flex justify-center  h-screen ">
          <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white w-screen">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
              <div className="mx-auto max-w-lg text-center">
                <h2 className="text-3xl font-extralight sm:text-4xl  ">
                  Boost your online presence
                </h2>

                <p className="mt-4 text-lime-500 text-xl">
                  Unlock your professional potential
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-1 ">
                <a
                  className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-lime-500/10 hover:shadow-lime-500/10"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-10 text-lime-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>

                  <h2 className="mt-4 text-xl font-bold text-white">
                    Digital solutions for professionals
                  </h2>

                  <p className="mt-1 text-sm text-gray-300">
                    Increase your online engagement, multiply your potential
                    customers
                  </p>
                </a>
              </div>

              <div className="mt-12 text-center ">
                <a
                  title="Book a free consultation"
                  href="https://calendly.com/lucasspeziale/dynamedia"
                  className="inline-block rounded-3xl bg-lime-600 px-12 py-3 sm:text-3xl font-normal font-sans text-white transition hover:bg-lime-500 focus:outline-none focus:ring shadow-xl focus:ring-yellow-400 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                >
                  <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                    Book your free consultation call now
                  </div>
                </a>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
