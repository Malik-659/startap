import React from "react";
import MyPlanet from "../../components/ui/Planetygon/Planetygon";
import makers from "../../image/Rectangle 8.png";
import fiszman from "../../image/image 3.png";
import nasa from "../../image/image 2.png";
import kgusta from "../../image/image 5.png";
import comtecho from "../../image/image 4.png";
import women from "../../image/Rectangle 10.png";
import men from "../../image/image 6.png";

const HomePage = () => {
  return (
    <div className="bg-[#1e1e1e] bg-homepage bg-no-repeat  w-full h-full">
      <div className="w-[95%]">
        <div className="flex items-center justify-end h-screen ">
          <p className="text-white font-jomhuria text-[13rem] text-right">
            ReduX Job
          </p>
        </div>
        <div className="h-full w-full flex flex-col ">
          <h2 className="text-white font-jomhuria text-[7rem] text-right">
            Let's <span className="text-[#5345FA]">See</span> What <br /> Our
            Site <span className="text-[#A455EE]">Offers</span>!
          </h2>
          <p className=" font-jomhuria text-white text-[130px]">Companies</p>
          <div className="bg-black/75 w-3/4 h-[220px] flex m-auto justify-center items-center rounded-xl gap-20">
            <div className="w-[278px] h-[78px] bg-white rounded-xl flex items-center p-2">
              <img src={makers} alt="" />
            </div>
            <img src={fiszman} alt="" />
            <img src={kgusta} alt="" />
            <img src={comtecho} alt="" />
            <img src={nasa} alt="" />
          </div>
        </div>
        <div className=" font-jomhuria text-white text-[110px] h-full ">
          <h2 className="text-[6rem] text-center">Important Info</h2>
          <p className="text-[5rem] bg-bg1 bg-no-repeat">
            The Site <span className="text-[#5345FA]">Is Aimed At Optimal</span>{" "}
            And <br /> Quick Search For Jobs And <br /> Potential Employees. You
            Can{" "}
            <span className="text-[#5345FA]">
              Make <br /> Different Posts
            </span>{" "}
            , Such As Assembling <br /> A Team, Freelancing Orders And <br />{" "}
            Searching For Workers.
          </p>
        </div>
        <div className=" h-full  font-jomhuria  mt-20 ">
          <h2 className="text-white text-[160px] text-center">
            Make An Attractive <span className="text-[#5345FA]">Resume</span>{" "}
            <br /> And <span className="text-[#A253EC]">Get A Job</span> !
          </h2>
          <div className="flex justify-center items-center gap-20">
            <div className="w-[47.75rem] h-[52.938rem] bg-white rounded-3xl p-5">
              <div className="flex">
                <img src={women} alt="" />
                <div className=" ml-11 ">
                  <p className="text-[50px]">Name: Anna</p>
                  <p className="text-[40px]">Age: 20 Yers</p>
                </div>
              </div>
              <div className="text-[45px]">
                <h2 className="text-[#B4A035]">Profesion:</h2>
                <p>I’m Middle Front-End Developer!</p>
              </div>
              <div className="text-[45px]">
                <h2 className="text-[#B4A035]">Professional profile:</h2>
                <p>
                  I strive to create efficient and intuitive web <br />{" "}
                  applications using advanced front-end <br /> technologies. I
                  have experience in developing user interfaces, optimizing
                  performance and adapting designs for various devices.
                </p>
              </div>
              <div className="text-[45px]">
                <h2 className="text-[#B4A035]">Programming languages:</h2>
                <p>JavaScript, HTML, CSS</p>
              </div>
            </div>
            <div className="w-[47.75rem] h-[52.938rem] bg-white rounded-3xl p-5">
              <div className="flex">
                <img src={women} alt="" />
                <div className=" ml-11 ">
                  <p className="text-[50px]">Name: Anna</p>
                  <p className="text-[40px]">Age: 20 Yers</p>
                </div>
              </div>
              <div className="text-[45px]">
                <h2 className="text-[#B4A035]">Profesion:</h2>
                <p>I’m Middle Front-End Developer!</p>
              </div>
              <div className="text-[45px]">
                <h2 className="text-[#B4A035]">Professional profile:</h2>
                <p>
                  I strive to create efficient and intuitive web <br />{" "}
                  applications using advanced front-end <br /> technologies. I
                  have experience in developing user interfaces, optimizing
                  performance and adapting designs for various devices.
                </p>
              </div>
              <div className="text-[45px]">
                <h2 className="text-[#B4A035]">Programming languages:</h2>
                <p>JavaScript, HTML, CSS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
