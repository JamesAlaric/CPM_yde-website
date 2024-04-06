import Image from "next/image";
import React from "react";
import Couple from "@/app/frontend/assets/couple.png";

const Bienfait: React.FC = () => {
  return (
    <section className="overflow-hidden bg-seagull-50/50 sm:grid sm:grid-cols-2">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-left">
          <h2 className="text-3xl text-seagull-950 font-bold tracking-tight sm:text-4xl ">
            C’est quoi les bénéfices d’une thérapie?
          </h2>
          <span className="block h-1 mt-2 bg-seagull-500 w-32 rounded-sm my-4"></span>

          <p className=" text-gray-500 text-seagull-950/75 md:mt-4 md:block">
            Parfois, il est plus facile de parler à un étranger qu&apos;à des
            parents ou des amis mais encore mieux à un professionnel. Pendant
            une thérapie, un conseiller ou un thérapeute formé vous écoute et
            vous aide à trouver vos propres réponses aux problèmes, avec
            empathie sans vous juger. <br />
            <br />
            Le thérapeute vous donnera le temps de parler, pleurer, crier ou
            simplement de penser. C&apos;est l&apos;occasion de regarder
            différemment vos problèmes avec quelqu&apos;un qui va vous respecter
            vous et vos opinions.
          </p>
        </div>
      </div>

      <Image
        alt=""
        src={Couple}
        className="h-56 w-full object-cover sm:h-full"
      />
      
    </section>
  );
};

export default Bienfait;
