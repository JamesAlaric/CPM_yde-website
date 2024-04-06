import React from "react";
import Banner from "@/app/frontend/assets/banner1.png";
import Image from "next/image";

const HeroAbout: React.FC = () => {
  return (
    <>
      <div
        id="hero-about"
        className="relative font-bold tracking-wide text-white bg-neutral-50 w-full"
      >
        <header className="relative flex flex-col items-center justify-center px-16 pt-5 pb-12 w-full min-h-[818px] max-md:px-5 max-md:max-w-full">
          <div className="absolute inset-0 z-0">
            <Image
              loading="lazy"
              src={Banner}
              className="object-cover absolute inset-0 w-full h-full"
              alt="Background image"
            />
            {/* Superposition pour assombrir l'image */}
            <div className="absolute inset-0 bg-gradient-to-t from-seagull-200 via-seagull-300 to-black opacity-40 z-10"></div>
          </div>
          <div className="relative z-auto flex flex-col items-center max-w-[1110px] max-md:w-full">
            <h2 className="my-4  font-bold sm:text-5xl text-4xl text-center leading-[50px] text-seagull-50 max-md:text-4xl max-md:leading-[62px]">
            Service de Counselling et Thérapie
            </h2>

            {/* Espace réservé pour le lecteur vidéo */}
            <div className="w-full h-80 md:h-96 lg:h-120 bg-gray-700 my-10"></div>
          </div>
        </header>
      </div>
    </>
  );
};

export default HeroAbout;
