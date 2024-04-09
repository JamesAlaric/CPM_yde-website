import React from "react";

const page: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-seagull-800/15 via-white to-white text-seagull-950/100 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-seagull-950">
            Grille de tarifs des prestations au CPM Yaoundé
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-seagull-950/75">
            Consultez nos tarifs pour les différentes prestations.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 xl:w-1/2 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-seagull-500 flex flex-col relative overflow-hidden">
              <span className="bg-seagull-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                POPULAIRE
              </span>
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                Présentiel
              </h2>
              <p className="text-lg text-seagull-950/95 pb-4 mb-4 border-b border-gray-200 leading-none">
                Consultations médicales
              </p>
              <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
                <dl className="-my-3 divide-y divide-gray-100 text-sm">
                  <div className="grid grid-cols-2 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-seagull-950/95">
                      Consultation de médecine générale
                    </dt>
                    <dd className="text-gray-700">5000 F/h</dd>
                  </div>

                  <div className="grid grid-cols-2 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-seagull-950/95">
                      Consultation de psychiatrie de premier niveau
                    </dt>
                    <dd className="text-gray-700">10000 F/h</dd>
                  </div>

                  <div className="grid grid-cols-2 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-seagull-950/95">
                      Consultation de psychiatrie de deuxième niveau
                    </dt>
                    <dd className="text-gray-700">20000 F/h</dd>
                  </div>

                  <div className="grid grid-cols-2 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-seagull-950/95">
                      Psychothérapie individuelle locale
                    </dt>
                    <dd className="text-gray-700">10000-15000 F/h</dd>
                  </div>

                  <div className="grid grid-cols-2 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-seagull-950/95">
                      Hypnose médicale
                    </dt>
                    <dd className="text-gray-700">40000 F/h</dd>
                  </div>

                  <div className="grid grid-cols-2 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-seagull-950/95">
                      Stimulation magnétique transcranienne (TMS)
                    </dt>
                    <dd className="text-gray-700">25000-50000 F/h</dd>
                  </div>

                  <div className="grid grid-cols-2 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-seagull-950/95">
                      Thérapie de couple
                    </dt>
                    <dd className="text-gray-700">
                      prix identique aux thérapies individuelles
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className="p-4 xl:w-1/2 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                Téléconsultation
              </h2>
              <p className="text-lg text-seagull-950/95 pb-4 mb-4 border-b border-gray-200 leading-none">
                Consultations à distance
              </p>
              <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
                <dl className="-my-3 divide-y divide-gray-100 text-sm">
                  {/* Autres informations existantes ici */}

                  <div className="grid grid-cols-2 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-seagull-950/95">
                      Consultation de psychiatrie de deuxième niveau en
                      téléconsultation
                    </dt>
                    <dd className="text-gray-700">25000 F/h</dd>
                  </div>

                  <div className="grid grid-cols-2 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-seagull-950/95">
                      Psychothérapie individuelle en téléconsultation
                    </dt>
                    <dd className="text-gray-700">20000-30000 F/h</dd>
                  </div>

                  <div className="grid grid-cols-2 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-seagull-950/95">
                      Thérapie de couple en téléconsultation
                    </dt>
                    <dd className="text-gray-700">
                      prix identique aux thérapies individuelles
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
