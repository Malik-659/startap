import React from "react";
import MyPlanet from "../../components/ui/Planetygon/Planetygon";

const HomePage = () => {
  return (
    <div className="bg-[#1e1e1e] bg-homepage bg-no-repeat  w-full h-screen">
      <div className="flex container  items-center h-full ">
        <p className="text-white font-jomhuria text-[250px] text-right ">ReduX Job</p>
      </div>
      <div className="container" >
        <h2 className="text-white font-jomhuria text-[200px] text-left">Let's <span className="text-[#5345FA]">See</span> What <br /> Our Site <span className="text-[#A455EE]">Offers</span>!</h2>
      </div>
    </div>
  );
};

export default HomePage;
