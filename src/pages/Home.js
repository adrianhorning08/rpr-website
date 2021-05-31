import React from "react";

import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
// import FeaturesBlocks from "../partials/FeaturesBlocks";
// import News from "../partials/News";
import Cta from "../partials/Cta";
import Footer from "../partials/Footer";
import GameTiles from "../partials/GameTiles";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome />
        {/* <FeaturesHome /> */}
        <GameTiles />
        {/* <FeaturesBlocks /> */}
        {/* <FeaturesWorld /> */}
        {/* <News /> */}
        <Cta />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
