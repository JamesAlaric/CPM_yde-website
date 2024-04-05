import Link from "next/link";
import React from "react";

const Ecoute: React.FC = () => {
  return (
    <section className="text-seagull-50/100 bg-seagull-700 flex justify-center items-center">
      <div className="container px-5 py-24 mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="sm:text-4xl text-2xl font-bold title-font mb-2">
            Nous sommes à votre écoute
          </h2>
          <p className="leading-relaxed text-base">
            Nos conseillères et conseillers travaillent de manière
            confidentielle et adaptent leur approche à vos besoins individuels.
            Votre thérapie commence par votre prise de rendez-vous qui est le
            premier pas vers le changement progressif.
          </p>
          <div className="flex justify-center mt-6">
            <Link
              href="/Reservation"
              className="text-seagull-50 inline-flex items-center"
            >
              <button className="inline-flex bg-seagull-600 border-seagull-50 py-2 px-6  hover:text-seagull-600 hover:bg-seagull-50 rounded">
                PRENEZ RENDEZ-VOUS
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecoute;
