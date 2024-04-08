import Image from "next/image";
import React from "react";

import Desc from "./frontend/components/Desc";
import ServTh from "./frontend/components/ServiceTh";
import Serv from "./frontend/components/Serv";
import WhyCPM from "./frontend/components/Whycpm";
import CallAction from "./frontend/components/CallAction";
import Ecoute from "./frontend/components/Ecoute";
import Step from "./frontend/components/Step";
import Bienfait from "./frontend/components/Bienfait";
import CallAction2 from "./frontend/components/CallAction2";
import ContactBoard from "./frontend/components/contactBoard";
import Footer from "./frontend/components/Footer";
import ReservationForm from "./frontend/components/ReservationForm";
import Navbar from "./frontend/components/Navbar";
import HeroAbout from "./frontend/components/HeroAbout";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroAbout />
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-12 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mx-auto pt-10 grid grid-cols-1 lg:mx-4 lg:max-w-none lg:grid-cols-1 lg:items-start lg:gap-y-0">
          <Desc />
          <Serv />
          <div className="lg:-ml-12 -mt-14 lg:p-12  lg:sticky lg:top-8 lg:col-start-2 lg:row-start-1 lg:overflow-hidden">
            <ReservationForm />
          </div>
        </div>
      </div>

      <WhyCPM />
      <Ecoute />
      <ServTh />
      <CallAction />
      <Step />
      <Bienfait />
      <CallAction2 />
      <ContactBoard />
      <Footer />
      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          
          src={next}
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}
    </>
  );
}
