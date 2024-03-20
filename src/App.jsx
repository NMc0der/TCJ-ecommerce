import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import Category from "./components/Category";
import Category2 from "./components/Category2";
import Services from "./components/Sevices";
import Banner from "./components/Banner";
import headphones from "./assets/headphone.png";
import Products from "./components/Products";
import smartwatch2 from "./assets/smartwatch2-removebg-preview.png";
import Blogs from "./components/Blogs";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

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

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#2dcc6f",
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
      <Products />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
