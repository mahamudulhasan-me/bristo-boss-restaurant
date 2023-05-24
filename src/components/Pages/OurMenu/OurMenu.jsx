import React from "react";
import banner from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../hooks/useMenu";
import PageTopBanner from "../../Shared/PageTopBanner/PageTopBanner";
import OfferMenu from "./OfferMenu/OfferMenu";

const OurMenu = () => {
  const [allMenu] = useMenu();
  const offeredMenu = allMenu.filter((menu) => menu.category === "offered");
  const pizzaMenu = allMenu.filter((menu) => menu.category === "pizza");
  const dessertMenu = allMenu.filter((menu) => menu.category === "dessert");
  const saladMenu = allMenu.filter((menu) => menu.category === "salad");
  const soupMenu = allMenu.filter((menu) => menu.category === "soupMenu");
  return (
    <div>
      <PageTopBanner
        image={banner}
        title="Our Menu"
        subtitle="Would you like to try a dish?"
      />
      <OfferMenu menuItems={offeredMenu} />
    </div>
  );
};

export default OurMenu;
