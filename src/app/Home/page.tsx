import Image from "next/image";
import React from "react";


import Desc from "../frontend/components/Desc";
import ServTh from "../frontend/components/ServiceTh";
import Serv from "../frontend/components/Serv";
import WhyCPM from "../frontend/components/Whycpm";
import CallAction from "../frontend/components/CallAction";
import Ecoute from "../frontend/components/Ecoute";
import Footer from "../frontend/components/Footer";


const page: React.FC = () => {
  return (
    <>
      
      <Desc />
      <Serv />
      <WhyCPM />
      <Ecoute />
      <ServTh />
      <CallAction/>
      <Footer/>
    </>
  );
};

export default page;
