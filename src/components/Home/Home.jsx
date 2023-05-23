import React from "react";
import Banner from "./Banner/Banner";
import CallUs from "./CallUs/CallUs";
import Category from "./Category/Category";
import ChefRecommends from "./ChefRecommends/ChefRecommends";
import ChefService from "./ChefService/ChefService";
import Feature from "./Feature/Feature";
import MenuItems from "./MenuItems/MenuItems";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <ChefService />
      <MenuItems />
      <CallUs />
      <ChefRecommends />
      <Feature />
      <Testimonials />
    </div>
  );
};

export default Home;
