import React from "react";

const Desc: React.FC = () => {
  return (
    <div className="" id="Bienvenu">
      <div className="grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="lg:col-span-3 max-w-full">
          <h2 className="text-2xl font-bold tracking-tight text-seagull-950 sm:text-6xl">
            Bienvenu sur le Site Officiel du{" "}
            <span className="">CPM Yaoundé</span>
          </h2>
          <span className="block h-1 mt-2 bg-seagull-500 lg:w-64 w-32 rounded-sm"></span>

          <div className="mt-10 text-seagull-950 w-full">
            Bienvenue de la part de notre équipe, c&apos;est un plaisir de vous
            avoir ici😁. <br />
            Le{" "}
            <span className="text-seagull-700 font-bold">
              Centre de Psychotraumatologie et de Médiation(CPM)
            </span>{" "}
            est un centre multidisciplinaire composé d’un groupe de psychologue,
            de conseillers conjugaux et familiaux offrant du counseling et des
            thérapies à Yaoundé au Cameroun. Nous offrons du
            <span className="italic ">
              {" "}
              counseling individuel, du couple et de la famille.
            </span>
            <p className="italic text-seagull-700 mt-6 text-2xl">
              Notre objectif principal est que vous vous sentiez écouté et
              compris dans vos difficultés actuelles.
            </p>
            <p className="mt-6 text-seagull-950">
              Notre travail se déroule dans un cadre confidentiel et
              accueillant. Nos thérapeutes utilisent les approches intégratives
              et centrées sur le client. Thérapie cognitive et comportementale
              (TCC), Thérapies centrées sur les solutions, la thérapie
              psychodynamique, Programmation neurolinguistique (PNL) et plus
              encore.
            </p>
            <p className="mt-6 text-seagull-950">
              Nous utilisons plusieurs approches de la thérapie familiale qui
              visent à améliorer la communication et le fonctionnement de la
              famille, à résoudre les conflits interpersonnels et à renforcer
              les habiletés d&apos;adaptation et de résolution de problèmes dans
              les familles.
            </p>
            <p className="mt-6 text-seagull-950">
              Nos thérapeutes sont à votre service et peuvent travailler avec
              vous pour vous aider à trouver les moyens de relever les défis
              auxquels vous êtes confrontés.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desc;
