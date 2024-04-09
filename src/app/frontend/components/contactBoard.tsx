import Link from "next/link";
import React from "react";

const ContactBoard: React.FC = () => {
  return (
    <section className="text-seagull-950/95 bg-seagull-950/100">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.78986022370728!2d11.526772452475472!3d3.8875759901473876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bc55a70bf331f%3A0xc4005ee620c3c476!2sIPM%2FCPM%20(Institut%20de%20Psychotraumatologie%20et%20de%20M%C3%A9diation)!5e0!3m2!1sen!2scm!4v1712371320317!5m2!1sen!2scm"
              className="rounded-lg h-96 w-full"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="p-4 lg:w-1/3">
            <div className="h-96 bg-slate-50 px-2 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <div className="group flex justify-center gap-1.5 text-gray-700 transition ">
                Ligne Ouverte
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-seagull-600 opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-seagull-400"></span>
                </span>
              </div>

              <h1 className="title-font sm:text-2xl text-xl font-medium text-seagull-950/95 mb-3">
                Prendre Rendez-vous
              </h1>
              <div className="flex justify-center mt-6">
                <Link href="/Reservation" className="text-seagull-50">
                  <button className="inline-flex bg-seagull-600 border-seagull-50 py-2 px-[86px] hover:text-seagull-600 hover:bg-white rounded">
                    Réserver en ligne
                  </button>
                </Link>
              </div>
              <p className="my-2">
                ou <br /> Appelez
              </p>
              <div className="flex justify-center space-x-2">
                <Link
                  href={"tel:+237655656678"}
                  className="text-lime-100 hover:text-lime-600"
                >
                  <button className="inline-flex flex-grow bg-lime-600 border-seagull-50 py-2 px-6 hover:text-lime-600 hover:bg-lime-50 rounded">
                    655-656-678
                  </button>
                </Link>

                <Link
                  href={"tel:+237675947917"}
                  className="text-lime-100 hover:text-lime-600"
                >
                  <button className="inline-flex flex-grow bg-lime-600 border-seagull-50 py-2 px-6 hover:text-lime-600 hover:bg-lime-50 rounded">
                    675-947-917
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/3">
            <div className="h-96 bg-slate-50 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h1 className="title-font sm:text-2xl text-xl font-medium text-seagull-950/95 mb-3">
                Horaire d&apos;ouverture
              </h1>
              <p className="leading-relaxed mt-3">
                <b>Lundi à Vendredi:</b> <br /> 8h30 à 12h - 13h à 17h,
                <br /> ouvert jusqu&apos;à 20h au besoin <br />
                <b>Samedi:</b> <br />
                10h - 15h <br /> Fermé le reste du Week-end.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBoard;
