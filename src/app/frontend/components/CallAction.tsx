import Image from "next/image";
import Cook from "@/app/frontend/assets/cookinggroup.png";
import Donate from "@/app/frontend/assets/donationGroup.png";
import Worker from "@/app/frontend/assets/WorkerGroup.png";
import Hum from "@/app/frontend/assets/HumanGroup.png";
import Helper from "@/app/frontend/assets/Helper.png";
import Coworker from "@/app/frontend/assets/CoworkerGroup.svg";
import dev from "@/app/frontend/assets/dev.png";
import woman from "@/app/frontend/assets/WomanSmile.png";
import med from "@/app/frontend/assets/med.png";

export default function CallAction() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-t from-white via-seagull-50/100 to-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-2xl font-bold tracking-tight text-seagull-950 sm:text-6xl">
              Vous êtes une organisation, une institution ou une entreprise ?
            </h1>
            <p className="mt-4 text-lg text-seagull-950/75">
              Nous collaborons egalement avec des entreprises de toutes tailles
              ainsi que des organisations, incluant des institutions variées.{" "}
              <br />
              En choisissant nos services de thérapie, vous bénéficierez de
              notre expertise dédiée à soutenir le bien-être mental de vos
              employés ainsi que leur epanouissement, ce qui peut contribuer à
              renforcer la cohésion et le bien-être au sein de votre
              organisation.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <Image
                          src={Donate}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src={Worker}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src={woman}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src={med}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src={Hum}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid  flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src={dev}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src={Cook}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
