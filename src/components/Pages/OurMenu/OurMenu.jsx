import React from "react";
import banner from "../../../assets/menu/banner3.jpg";
import PageTopBanner from "../../Shared/PageTopBanner/PageTopBanner";

const OurMenu = () => {
  return (
    <div>
      <PageTopBanner
        image={banner}
        title="Our Menu"
        subtitle="Would you like to try a dish?"
      />
    </div>
  );
};

export default OurMenu;
