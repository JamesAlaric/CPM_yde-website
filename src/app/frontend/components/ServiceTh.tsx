import Image from "next/image";
import Couple from "@/app/frontend/assets/coupledisc.png";
import Famille from "@/app/frontend/assets/therapFam.png";
import Education from "@/app/frontend/assets/childeduc.png";
import Indiv from "@/app/frontend/assets/indiv1.png";

const features = [
  {
    id: 1,
    name: "Thérapie Individuelle",
    text: "La thérapie individuelle vise à traiter les troubles émotionnels, relationnels et psychologiques de l’individu. Cette prise en charge est disponible aux adolescents et aux adultes",
    url: Indiv,
  },
  {
    id: 2,
    name: "Thérapie de Couple",
    text: "La thérapie de couple s’adresse aux couples, mariés ou non, et aux personnes confrontées aux problèmes de la vie commune. Elle vise à aider les couples à surmonter les difficultés relationnelles et à renforcer la proximité émotionnelle et à rétablir leur relation à un niveau de fonctionnement plus sain et plus équilibré",
    url: Couple,
  },
  {
    id: 3,
    name: "Thérapie Familiale",
    text: "La thérapie familiale vise la famille en tant que système social. Elle s’adresse à toutes familles ayant des difficultés relationnelles à améliorer la compréhension mutuelle et accroître le soutien affectif des membres de la famille, en particulier pendant les phases de transition (adolescence des enfants, séparation des parents, chômage, retraite, etc.. ) et des évènements difficiles, comme la mort ou une maladie grave dans la famille",
    url: Famille,
  },
  {
    id: 4,
    name: "Psychoéducation",
    text: "Nous faisons de la psychoéducation sur une variété de problèmes d'éducation des enfants et des adolescents. L'objectif est d'aider les parents à gérer efficacement les difficultés comportementales et émotionnelles de leur enfant ou adolescent",
    url: Education,
  },
];

export default function ServTh() {
  return (
    <div id="Services" className="overflow-hidden bg-gradient-to-t from-white via-seagull-50/100 to-white my-0 py-12 sm:py-32 mx-auto max-w-screen-2xl px-4  sm:px-6 lg:px-8">
      <h2 className="text-3xl text-seagull-950 font-bold tracking-tight sm:text-4xl ">
        Services de Thérapie
      </h2>
      <span className="block h-1 mt-2 bg-seagull-500 w-32 rounded-sm my-4"></span>

      <p className="mt-4 text-seagull-950/70">
        Au CPM il vous sera offert les services suivants:
      </p>
      {features.map((feature, index) => (
        <div
          key={feature.id}
          dir={feature.id % 2 !== 0 ? "rtl" : "ltr:text-right"}
          className={`grid grid-cols-1 lg:h-screen mt-1 lg:grid-cols-2`}
        >
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <Image
                alt={feature.name}
                src={feature.url}
                className="absolute inset-0 h-full w-full object-cover shadow-xl ring-1 ring-gray-400/10"
                width={1442}
                height={1442}
              />
            </div>
          </div>

          <div className="relative flex items-center bg-seagull-100/100">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-seagull-100/100"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl text-seagull-950 font-bold sm:text-3xl">
                {feature.name}
              </h2>

              <p className="mt-4 text-seagull-950/80">{feature.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
