import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <div className="mx-auto sm:max-w-xl md:max-w-full md:px-16 px-2">
        <Navbar />
        <Banner />
      </div>
      <Footer />
    </div>
  );
};

export default App;
