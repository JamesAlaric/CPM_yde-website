import React from "react";
import Banner from "@/app/frontend/assets/banner1.png";
import Image from "next/image";
import Link from "next/link";
import wha from "@/app/frontend/assets/Socials/whatsapp.png";

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

            {/* Lecteur vidéo Wistia */}
            <div className="w-full h-80 md:h-96 lg:h-120 bg-gray-700 my-10">
              <iframe
                src="https://fast.wistia.com/embed/medias/2bvbbwanaa"
                title="Wistia video player"
                allowFullScreen
                frameBorder="0"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Boutons pour les petits écrans en dessous de lg */}
            <div className="grid grid-cols-1 gap-2 mx-1 lg:hidden">
              <Link
                href="https://wa.me/237655656678"
                className="text-sm font-semibold leading-6 items-center bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-md flex justify-center"
              >
                <div className="flex items-center gap-2">
                  <Image className="h-4 w-4 mb-1" src={wha} alt="wha_logo" />
                  <span className="text-center">Ecrivez-nous sur Whatsapp</span>
                </div>
              </Link>
              <Link
                href="#/Reservation"
                className="text-sm font-semibold leading-6 bg-seagull-500 hover:bg-seagull-600 text-white p-2 rounded-md flex justify-center"
              >
                <span className="text-center">Réservez en ligne</span>
              </Link>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default HeroAbout;
