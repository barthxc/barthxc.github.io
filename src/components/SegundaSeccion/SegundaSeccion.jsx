import "./SegundaSeccion.css";
const SegundaSeccion = () => {
  return (
    <section id="about">
      <img src="./Portfolio/s2f1.png" alt="Fondo de la sección 2 con una imagen" className="bg" />

      <div className="w-full flex flex-col md:flex-row items-center lg:items-center justify-evenly px-4 gap-4">
        <img alt="BartHxC" id="vector" src="./selfCircle.png" />

        {/* CODE ABOUT*/}
        <div className="w-full max-w-xl  rounded-lg ">
          <div className="relative rounded-lg bg-slate-900 p-2">
            <div className="relative flex text-center">
              <div className="flex pl-3.5 pt-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="-ml-0.5 mr-1.5 h-3 w-3 text-red-500/20 hover:text-red-500"
                >
                  <circle r="12" cy="12" cx="12"></circle>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="-ml-0.75 mr-1.5 h-3 w-3 text-yellow-500/20 hover:text-yellow-500"
                >
                  <circle r="12" cy="12" cx="12"></circle>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="-ml-0.75 mr-1.5 h-3 w-3 text-green-500/20 hover:text-green-500"
                >
                  <circle r="12" cy="12" cx="12"></circle>
                </svg>
              </div>

              <span className="absolute inset-x-0 top-2 text-1xl text-slate-500">
                About.jsx
              </span>
            </div>
            <div className="mt-2 space-y-1.5 pl-5">
              <p className="mt-3 font-mono text-1xl font-normal tracking-wide text-violet-400">
                <span className="text-slate-500">&lt;</span>
                <span className="text-pink-400">About</span>
                <span className="text-slate-500">&gt;</span>
              </p>
              <p className="ml-3 font-mono text-1xl font-normal tracking-wide text-violet-400">
                <span className="text-slate-500">&lt;</span>
                <span className="text-pink-400">Studies</span>
                <span className="text-slate-500">&gt;</span>
                <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                  <span className="relative text-blue-400">
                    Developer <span className="text-violet-400">&&</span> Sound
                    Technician
                  </span>
                </span>
                <span className="text-slate-500">&lt;/</span>
                <span className="text-pink-400">Studies</span>
                <span className="text-slate-500">&gt;</span>
              </p>
              <p className="ml-3 font-mono text-1xl font-normal leading-4 tracking-wide text-violet-400">
                <span className="text-slate-500">&lt;</span>
                <span className="text-pink-400">Skills</span>

                <span className="ml-2 text-violet-400">
                  className<span className="text-slate-500">=</span>
                  <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                    <span className="relative text-blue-400">MERN</span>
                  </span>
                </span>

                <span className="text-slate-500">&gt;</span>
                <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"></span>
              </p>

              <p className="ml-6 font-mono text-1xl font-normal tracking-wide text-violet-400">
                <span className="text-slate-500">&lt;</span>
                <span className="text-pink-400">Front</span>
                <span className="text-slate-500">&gt;</span>
                <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                  <span className="relative text-blue-400">
                    React <span className="text-violet-400">&&</span> Tailwind{" "}
                  </span>
                </span>

                <span className="text-slate-500">&lt;/</span>
                <span className="text-pink-400">Front</span>
                <span className="text-slate-500">&gt;</span>
              </p>

              <p className="ml-6 font-mono text-1xl font-normal tracking-wide text-violet-400">
                <span className="text-slate-500">&lt;</span>
                <span className="text-pink-400">Back</span>
                <span className="text-slate-500">&gt;</span>
                <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                  <span className="relative text-blue-400">
                    Node <span className="text-violet-400">&&</span> Mongoose{" "}
                    <span className="text-violet-400">&&</span> Prisma{" "}
                    <span className="text-violet-400">&&</span> MongoDb
                  </span>
                </span>

                <span className="text-slate-500">&lt;/</span>
                <span className="text-pink-400">Back</span>
                <span className="text-slate-500">&gt;</span>
              </p>

              <p className="ml-3 font-mono text-1xl font-normal tracking-wide text-violet-400">
                <span className="text-slate-500">&lt;/</span>
                <span className="text-pink-400">Skills</span>
                <span className="text-slate-500">&gt;</span>
              </p>

              <p className="ml-3 font-mono text-1xl font-normal leading-4 tracking-wide text-violet-400">
                <span className="text-slate-500">&lt;</span>
                <span className="text-pink-400">Skills</span>
                <span className="text-slate-500">&gt;</span>
                <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                  <span className="relative text-blue-400">
                    MERN <span className="text-violet-400">&&</span> NextJs
                  </span>
                </span>
                <span className="text-slate-500">&lt;/</span>
                <span className="text-pink-400">Skills</span>
                <span className="text-slate-500">&gt;</span>
              </p>

              <p className="ml-3 font-mono text-1xl font-normal tracking-wide text-violet-400">
                <span className="text-slate-500">&lt;</span>
                <span className="text-pink-400">Hobbies</span>
                <span className="ml-2 text-violet-400">
                  value<span className="text-slate-500">=</span>
                  <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                    <span className="relative text-blue-400">music</span>
                  </span>
                </span>
                <span className="text-slate-500">/&gt;</span>
              </p>

              <p className="font-mono text-1xl font-normal tracking-wide text-violet-400">
                <span className="text-slate-500">&lt;/</span>
                <span className="text-pink-400">About</span>
                <span className="text-slate-500">&gt;</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SegundaSeccion;
