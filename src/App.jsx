import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import LeftSide from "./components/LeftSide";

const App = () => {
  return (
    <main className="col-span-2 p-6 h-screen flex flex-col justify-between text-white">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
};

export default App;
