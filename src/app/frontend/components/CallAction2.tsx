import Link from "next/link";
import React from "react";

const CallAction2 = () => {
  return (
<section className="text-seagull-950 bg-seagull-50 flex justify-center items-center">
      <div className="container px-5 py-24 mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="sm:text-3xl text-2xl font-bold title-font mb-2">
            Pourquoi attendre pour chercher de l&apos;aide?
          </h2>
          <p className="leading-relaxed text-base">
            Prenez un rendez-vous pour commencer un changement positif dans
            votre vie.
          </p>
          <div className="flex justify-center mt-6">
            <Link href="/Reservation" className="text-seagull-50">
              <button className="inline-flex bg-seagull-600 border-seagull-50 py-2 px-9 hover:text-seagull-600 hover:bg-white rounded">
                Faites une Réservation en ligne
              </button>
            </Link>
          </div>
          <p className="my-2">ou Appelez le</p>
          <div className="flex justify-center space-x-4">
            <Link href={"tel:+237655656678"} className="text-lime-100 hover:text-lime-600">
              <button className="inline-flex flex-grow bg-lime-600 border-seagull-50 py-2 px-6 hover:text-lime-600 hover:bg-lime-50 rounded">
                655-656-678
              </button>
            </Link>

            <Link href={"tel:+237675947917"} className="text-lime-100 hover:text-lime-600">
              <button className="inline-flex flex-grow bg-lime-600 border-seagull-50 py-2 px-6 hover:text-lime-600 hover:bg-lime-50 rounded">
                675-947-917
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallAction2;
