import React from "react";
import MyPlanet from "../../components/ui/Planetygon/Planetygon";
import makers from "../../image/Rectangle 8.png";
import fiszman from "../../image/image 3.png";
import nasa from "../../image/image 2.png";
import kgusta from "../../image/kgustahaha.png";
import comtecho from "../../image/comtexno.png";
import women from "../../image/Rectangle 10.png";
import men from "../../image/image 6.png";

const HomePage = () => {
  return (
    <div className="bg-[#1e1e1e] bg-homepage bg-no-repeat w-full h-full ">
      <div className="w-[95%] mx-auto">
        <div className="flex items-center justify-end h-screen ">
          <p className="text-white font-jomhuria text-[11rem] text-right">
            ReduX Job
          </p>
        </div>
        <div className="h-full w-full flex flex-col ">
          <h2 className="text-white font-jomhuria text-[5rem] mr-[10rem] text-right">
            Let's <span className="text-[#5345FA]">See</span> What <br /> Our
            Site <span className="text-[#A455EE]">Offers</span>!
          </h2>
          <p className=" font-jomhuria text-white text-[4rem] mt-72">
            Companies
          </p>
          <div className="bg-black/50 w-[95%] mt-10 h-[220px] flex m-auto justify-around items-center rounded-xl">
            <div className="bg-white rounded-xl flex items-center p-2">
              <img src={makers} alt="" />
            </div>
            <img src={fiszman} alt="" />
            <img src={kgusta} alt="" width="100" />
            <img src={comtecho} alt="" width="100" />
            <img src={nasa} alt="" />
          </div>
        </div>
        <div className="font-jomhuria text-white text-[110px] h-full mt-96">
          <h2 className="text-[5rem] text-center">Important Info</h2>
          <p className="text-[3rem] bg-bg1 mt-20 leading-loose bg-no-repeat">
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
          <h2 className="text-white text-[5rem] text-center">
            Make An Attractive <span className="text-[#5345FA]">Resume</span>{" "}
            <br /> And <span className="text-[#A253EC]">Get A Job</span> !
          </h2>
          <div className="flex justify-center gap-20 mt-32">
            <div className="w-[47.75rem] text-3xl h-auto bg-white rounded-3xl p-14">
              <div className="flex">
                <img src={women} alt="" />
                <div className=" ml-11 ">
                  <p className="text-4xl">Name: Anna</p>
                  <p>Age: 19 Yers</p>
                </div>
              </div>
              <div className="leading-relaxed my-5">
                <h2 className="text-[#B4A035]">Profesion:</h2>
                <p>I’m Middle Front-End Developer!</p>
              </div>
              <div className="leading-relaxed">
                <h2 className="text-[#B4A035]">Professional profile:</h2>
                <p>
                  I strive to create efficient and intuitive web applications
                  using advanced front-end technologies. I have experience in
                  developing user interfaces, optimizing performance and
                  adapting designs for various devices.
                </p>
              </div>
              <div className="leading-relaxed my-5">
                <h2 className="text-[#B4A035]">Programming languages:</h2>
                <p>JavaScript, HTML, CSS</p>
              </div>
            </div>
            <div className="w-[47.75rem] text-3xl h-auto bg-white rounded-3xl p-14">
              <div className="flex">
                <img src={men} alt="" />
                <div className=" ml-11 ">
                  <p className="text-4xl">Name: Aman</p>
                  <p>Age: 20 Yers</p>
                </div>
              </div>
              <div className="leading-relaxed my-5">
                <h2 className="text-[#B4A035]">Profesion:</h2>
                <p>I’m Middle Full-Stack Developer!</p>
              </div>
              <div className="leading-relaxed">
                <h2 className="text-[#B4A035]">Professional profile:</h2>
                <p>
                  I am a Full Stack developer with experience in creating
                  effective web applications, capable of working with both
                  front-end and back-end. I have experience in developing
                  scalable and innovative projects.
                </p>
              </div>
              <div className="leading-relaxed my-5">
                <h2 className="text-[#B4A035]">Programming languages:</h2>
                <p>JavaScript, Python, PHP, React, Laravel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
