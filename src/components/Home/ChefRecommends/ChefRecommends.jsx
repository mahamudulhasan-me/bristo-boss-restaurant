import React, { useEffect, useState } from "react";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";

const ChefRecommends = () => {
  const [recommendsItems, setRecommendsItems] = useState([]);
  useEffect(() => {
    fetch("./menu.json")
      .then((response) => response.json())
      .then((data) => setRecommendsItems(data));
  }, []);
  return (
    <div className="my-20 w-4/5 mx-auto ">
      <SectionHeader title="CHEF RECOMMENDS" subTitle="Should Try" />
      <div className="grid grid-cols-3 gap-10">
        {recommendsItems
          .reverse()
          .slice(0, 3)
          .map((item) => (
            <div
              key={item._id}
              className="flex flex-col justify-between text-center items-center bg-yellow-50"
            >
              <img src={item.image} alt="" />
              <h1 className="mt-5 text-slate-950 text-xl font-cinzel font-semibold">
                {item.name}
              </h1>
              <p className="text-sm text-slate-950 font-semibold w-4/5">
                {item.recipe}
              </p>
              <button className=" mt-6 mb-4 uppercase border-b-4 rounded-xl hover:border-slate-950 text-yellow-500 bg-gray-50 py-2 px-5 hover:bg-slate-950 hover:text-white transition-all duration-300 border-yellow-500">
                Add to Cart
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ChefRecommends;
