import React from "react";
import MyPlanet from "../../components/ui/Planetygon/Planetygon";
import makers from "../../image/Rectangle 8.png";
import fiszman from "../../image/image 3.png";
import nasa from "../../image/image 2.png";
import kgusta from "../../image/image 5.png";
import comtecho from "../../image/image 4.png";

const HomePage = () => {
  return (
    <div className="bg-[#1e1e1e] bg-homepage bg-no-repeat  w-full h-full">
      <div className="flex items-center  mr-96  justify-end h-screen ">
        <p className="text-white font-jomhuria text-[300px] text-right ">
          ReduX Job
        </p>
      </div>
      <div className="container h-screen mr-96 flex flex-col ">
        <h2 className="text-white font-jomhuria text-[200px] text-right">
          Let's <span className="text-[#5345FA]">See</span> What <br /> Our Site{" "}
          <span className="text-[#A455EE]">Offers</span>!
        </h2>
        <p className=" font-jomhuria text-white text-[130px]">Companies</p>
        <div className="bg-black/75 w-[1439px] h-[220px] flex justify-center items-center m-auto rounded-xl gap-20">
          <div className="w-[278px] h-[78px] bg-white rounded-xl flex items-center p-2">
            <img src={makers} alt="" />
          </div>
          <img src={fiszman} alt="" />
          <img src={kgusta} alt="" />
          <img src={comtecho} alt="" />
          <img src={nasa} alt="" />
        </div>
        <div className=" font-jomhuria text-white text-[110px] h-screen ">
          <h2>Important Info</h2>
          <p>
            The site is aimed at optimal and <br /> quick search for jobs and <br /> potential
            employees. You can make <br /> different posts, such as assembling <br /> a team,
            freelancing orders and <br /> searching for workers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
