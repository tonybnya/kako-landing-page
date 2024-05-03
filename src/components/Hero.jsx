import React from "react";

const Hero = () => {
  return (
    <div className="xl:flex xl:flex-col xl:items-center">
      <h1 className="font-righteous xl:text-8xl xl:text-left md:text-7xl md:text-center max-sm:text-4xl max-sm:text-center">
        Welcome to <span className="text-red-600 tracking-wider">KaKo</span>,
      </h1>
      <h3 className="text-lato xl:text-2xl xl:text-left md:text-xl md:text-center max-sm:text-sm max-sm:text-center font-righteous xl:mb-6 md:mb-8 max-sm:mb-4">
        Your one-stop destination for all{" "}
        <span className="text-red-600">Batman</span> articles.
      </h3>
      <p className="xl:w-2/3 text-justify font-opensans tracking-wide xl:mb-6 md:mb-8 max-sm:mb-4 md:w-3/4 xl:block xl:mx-auto md:mx-auto max-sm:text-sm">
        You are where the iconic meets the extraordinary in the realm of
        e-commerce. Step into the captivating world of the{" "}
        <span className="text-red-600 font-opensansbold">Batman</span> universe
        reimagined, where every click unveils a treasure trove of merchandise
        inspired by the Dark Knight himself.{" "}
        <span className="text-red-600 font-opensansbold">KaKo</span> offers an
        unparalleled shopping experience for fans and collectors alike. Immerse
        yourself in the mystique of Gotham City as you browse through our
        curated selection of apparel, accessories, and memorabilia, meticulously
        crafted to honor the legacy of one of the most legendary superheroes of
        all time.
      </p>
      <a
        href="https://kako-coming-soon-page.onrender.com/"
        target="_blank"
        className="border-2 border-red-600 rounded-md text-center font-righteous xl:w-[20%] xl:py-2 xl:px-1 xl:mx-0 md:w-[25%] md:py-2 md:px-1 md:block md:mx-auto max-sm:py-2 max-sm:py-1 max-sm:w-[40%] max-sm:block max-sm:mx-auto hover:border-white hover:bg-red-600"
      >
        Shop Now
      </a>
    </div>
  );
};

export default Hero;
