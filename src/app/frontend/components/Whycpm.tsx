import { CheckCircle2, Link2 } from "lucide-react";
import Image from "next/image";
import Consul from "@/app/frontend/assets/consuling.png";
import Link from "next/link";

const features = [
  {
    name: "Nous sommes professionnels.",
    description:
      "Tous nos thérapeutes sont des professionnels bien formés et expérimentés. Nos thérapeutes ont satisfait aux exigences rigoureuses de formation et ils sont prêts pour vous assurer le meilleur soutien.",
  },
  {
    name: "Nous sommes rapides.",
    description:
      "Il peut être difficile d'attendre des jours ou des semaines jusqu'à votre premier rendez-vous surtout durant les périodes de vulnérabilité. Avec le CPM vous obtiendrez un rendez-vous dans les plus brefs délais.",
  },
  {
    name: "Nous sommes modernes.",
    description: `Nous nous arrimons à la technologie pour offrir des consultations à distance en visioconférence, ainsi que des traitements innovants utilisant la réalité virtuelle. Nous croyons en l'accessibilité et en l'efficacité des thérapies modernes pour répondre à vos besoins de manière pratique et novatrice.`,
  },
  {
    name: "Nous offrons des Services abordables.",
    description:
      "Nous avons des prix abordables et nous pouvons aussi être pris en charge par certaines assurances",
  },
];

export default function WhyCPM() {
  return (
    <div className="overflow-hidden bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-seagull-950 sm:text-4xl">
                Pourquoi le CPM?
              </p>
              <span className="block h-1 mt-2 bg-seagull-500 w-32 rounded-sm"></span>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-seagull-950/90 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-seagull-950/85">
                      <CheckCircle2
                        className="absolute left-1 top-1 h-5 w-5  text-lime-600 "
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <br />
                    <dd className="inline text-seagull-950/75">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="flex items-center mt-12 pl-9">
              <p className="text-seagull-950/75 ">
                Vous pouvez consulter nos tarifs en cliquant {"  "}
                <Link
                  href="/Pricing"
                  className="underline hover:text-seagull-500"
                >
                  {"  "}ICI
                </Link>
              </p>
            </div>
          </div>
          <Image
            src={Consul}
            alt="Consultation"
            className="object-cover scale-95 w-[32rem] max-w-none max-h-[56rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={1432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
