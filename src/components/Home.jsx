import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
    <NavBar/>
    <div className="flex justify-center  h-screen bg-[url(./assets/background.png)] bg-cover bg-center bg-no-repeat top-0 shadow-inner">

      <h1 className="font-sans text-white">Our mission at Horizon</h1>
    </div>
    <Footer/>
    </>
  );
};

export default Home;
