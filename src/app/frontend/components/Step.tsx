import Image from "next/image";
import Link from "next/link";
import React from "react";
import Coworker from "@/app/frontend/assets/Coworker.png";

const Step: React.FC = () => {
  return (
    <section className="text-seagull-950/75 bg-gradient-to-t from-white via-seagull-50/100 to-white flex flex-col items-center">
      <h2 className="text-3xl text-seagull-950 font-bold tracking-tight sm:text-4xl mt-8">
        Comment commencer?
      </h2>
      <span className="block h-1 mt-2 bg-seagull-500 w-32 rounded-sm my-4"></span>
      <div className="container px-5 py-24 mx-auto text-seagull-950/75 flex flex-wrap">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-seagull-500 inline-flex items-center font-bold justify-center text-white relative z-10">
                1
              </div>
              <div className="flex-grow pl-4">
                {/* <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  STEP 1
                </h2> */}
                <p className="leading-relaxed">
                  Appelez-nous au{" "}
                  <Link
                    href={"tel:+237655656678"}
                    className="text-seagull-500 hover:text-seagull-600"
                  >
                    655-656-678
                  </Link>{" "}
                  ou au{" "}
                  <Link
                    href={"tel:+237675947917"}
                    className="text-seagull-500 hover:text-seagull-600"
                  >
                    675-947-917
                  </Link>{" "}
                  (ou{" "}
                  <Link
                    href="/Reservation"
                    className="text-seagull-500 hover:text-seagull-600"
                  >
                    réservez en ligne
                  </Link>
                  ) et dites-nous ce qui vous pose problème.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-seagull-500 inline-flex items-center font-bold justify-center text-white relative z-10">
                2
              </div>
              <div className="flex-grow pl-4">
                {/* <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  STEP 2
                </h2> */}
                <p className="leading-relaxed">
                  Nous fournissons la disponibilité avec des thérapeutes
                  spécifiquement adaptés à vos besoins.
                </p>
              </div>
            </div>
            <div className="flex relative">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-seagull-500 inline-flex items-center font-bold justify-center text-white relative z-10">
                3
              </div>
              <div className="flex-grow pl-4">
                {/* <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  FINISH
                </h2> */}
                <p className="leading-relaxed">
                  Rencontrez votre thérapeute et commencez la route pour vous
                  améliorer.
                </p>
              </div>
            </div>
          </div>
          <Image
            className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
            src={Coworker}
            alt="step"
            height={1440}
            width={1450}
          />
        </div>
      </div>
    </section>
  );
};

export default Step;
