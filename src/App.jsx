import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import Category from "./components/Category";
import Category2 from "./components/Category2";
import Services from "./components/Sevices";
import Banner from "./components/Banner";
import headphones from "./assets/headphone.png";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "Jan 10 to Jan 28",
  image: headphones,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum dolor sit amet consecerer algapghjhag elit eauwfe drrdceidens",
  bgColor: "#f42c37",
};

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
    </div>
  );
}

export default App;
