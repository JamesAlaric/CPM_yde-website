import React from "react";

const ReservationForm: React.FC = () => {
  return (
    <div className="lg:w-full md:w-1/2 sm:my-4 bg-gray-100 rounded-lg p-8 shadow-md flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 className="text-seagull-950/95 text-lg font-medium title-font mb-5">
        FORMULAIRE DE RENDEZ-VOUS
      </h2>
      <div className="relative mb-4">
        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
          Nom(s)
        </label>
        <input
          type="text"
          id="full-name"
          name="full-name"
          className="w-full bg-white rounded border border-gray-300 focus:border-seagull-500 focus:ring-2 focus:ring-seagull-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="last-name" className="leading-7 text-sm text-gray-600">
          Prenom(s)
        </label>
        <input
          type="text"
          id="last-name"
          name="last-name"
          className="w-full bg-white rounded border border-gray-300 focus:border-seagull-500 focus:ring-2 focus:ring-seagull-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
          Numero de Tel
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full bg-white rounded border border-gray-300 focus:border-seagull-500 focus:ring-2 focus:ring-seagull-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="therapy" className="leading-7 text-sm text-gray-600">
          Type de Thérapie
        </label>
        <select
          id="therapy"
          name="therapy"
          className="w-full bg-white rounded border border-gray-300 focus:border-seagull-500 focus:ring-2 focus:ring-seagull-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        >
          <option value="individuelle">Thérapie individuelle</option>
          <option value="couple">Thérapie de couple</option>
          <option value="famille">Thérapie de famille</option>
          <option value="teletherapie">Téléthérapie</option>
        </select>
      </div>
      <button className="text-white bg-seagull-500 border-0 py-2 px-8 focus:outline-none hover:bg-seagull-600 rounded text-lg">
        Prendre Rendez-vous
      </button>
    </div>
  );
};

export default ReservationForm;
