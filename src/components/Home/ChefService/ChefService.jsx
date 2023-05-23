import React from "react";

import bg from "../../../assets/home/chef-service.jpg";
const ChefService = () => {
  return (
    <div
      className="w-4/5 mx-auto p-16 bg-cover rounded-sm my-20"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className=" rounded-sm p-5 bg-slate-950 bg-opacity-60 py-20 text-white text-center ">
        <h2 className="text-3xl font-cinzel font-semibold mb-2 ">
          Bistro Boss
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default ChefService;
