const problems = [
  "Angoisses",
  "Phobies et peurs",
  "Difficultés relationnelles",
  "Dépressions",
  "Problèmes familiaux",
  "Burnout",
  "Difficultés professionnelles",
  "Soucis d’identité",
  "Traumatismes",
  "Manque d’estime de soi",
  "Dépendances",
];

export default function Serv() {
  return (
    <div className="bg-seagull-50 bg-opacity-50 ml-0 py-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 z-10 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-3 lg:px-8">
        <div className="lg:col-span-3 max-w-full">
          <h2 className="text-3xl text-seagull-950 font-bold tracking-tight sm:text-4xl ">
            Que permet la Thérapie ?
          </h2>
          <span className="block h-1 mt-2 bg-seagull-500 w-32 rounded-sm"></span>
          <p className="mt-4 text-seagull-950/70">
            Notre équipe est fière de pouvoir vous venir en aide. Notre
            expertise couvre l’éventail des problèmes et des conditions
            psychologiques, du plus élémentaire au plus complexe. Cela inclut:
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {problems.map((problem, index) => (
              <div key={index} className="border-t border-gray-200 pt-2 w-auto">
                <dt className="font-medium text-seagull-900/100">{problem}</dt>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-seagull-950/70">
            La liste susmentionnée n’est pas exhaustive, et avec plaisir nous
            ferons de notre mieux pour vous aider dans vos difficultés.
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8"></div>
      </div>
    </div>
  );
}
