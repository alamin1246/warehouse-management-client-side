import React, { useEffect } from "react";
import InventoryItems from "../../InventoryPage/InventoryItems/InventoryItems";
import Banner from "../Banner/Banner";
import BestOffer from "../BestOffer/BestOffer";
import WhyGreatSection from "../homeSection/WhyGreatSection";
import Map from "../Map/Map";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner />
      <div className="bg-gray-100">
      <h3 className='bg-blue-800 text-white'><marquee behavior="" direction="">Welcome to Kids Toys Stock Management.</marquee></h3>
        <InventoryItems />
        <WhyGreatSection />
        <Map />
        <BestOffer />
      </div>
    </>
  );
};

export default Home;
