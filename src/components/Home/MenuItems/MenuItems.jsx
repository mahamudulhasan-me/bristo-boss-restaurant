import React, { useEffect, useState } from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";

const MenuItems = () => {
  const [menus, setMenu] = useState([]);
  useEffect(() => {
    fetch(`menu.json`)
      .then((response) => response.json())
      .then((data) => setMenu(data));
  }, []);
  return (
    <div className="w-4/5 mx-auto my-20">
      <SectionHeader title="FROM OUR MENU" subTitle="Check It Out" />
      <div className="grid grid-cols-2 gap-10">
        {menus.slice(0, 6).map((menu) => (
          <MenuItem key={menu._id} menuDetails={menu} />
        ))}
        <div className="col-span-2 mx-auto">
          <button className="uppercase border-b-4 rounded-xl border-slate-950 text-slate-950 font-semibold py-2 px-5 hover:bg-slate-950 hover:text-white transition-all duration-300 hover:border-yellow-500">
            View Full Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
