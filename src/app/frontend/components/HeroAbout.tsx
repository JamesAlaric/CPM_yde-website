import React from "react";
import Banner from "@/app/frontend/assets/banner1.png";
import Image from "next/image";

const HeroAbout: React.FC = () => {
  return (
    <>
      <div className="relative font-bold tracking-wide text-white bg-neutral-50 w-full">
        <header className="relative flex flex-col items-center justify-center px-16 pt-5 pb-12 w-full min-h-[818px] max-md:px-5 max-md:max-w-full">
          <Image
            loading="lazy"
            src={Banner}
            className="object-cover absolute inset-0 w-full h-full z-0"
            alt="Background image"
          />
          {/* Superposition pour assombrir l'image */}
          <div className="absolute inset-0 bg-gradient-to-t from-seagull-200 via-seagull-300 to-black opacity-40 z-10"></div>
          <div className="relative z-auto flex flex-col items-center max-w-[1110px] max-md:w-full">
            <h2 className="mt-10 text-4xl text-center leading-[50px] text-seagull-200 max-md:text-4xl max-md:leading-[62px]">
              Analyser les Troubles de la Santé Mentale à travers le Prisme de
              la Psychotraumatologie, la Médiation et la Gestion des Conflits!
            </h2>
          </div>
        </header>
      </div>
    </>
  );
};

export default HeroAbout;
