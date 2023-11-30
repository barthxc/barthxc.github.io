import "./PrimeraSeccion.css";
const PrimeraSeccion = () => {
  return (
    <section id="home">
      <h1 className="nick" id="nick">
        Bart HxC
      </h1>
      <a href="#about" className="btn" id="btn">
        Dive in!
      </a>
      <img src="./Portfolio/s1f1.png" alt="Fondo de la sección 1 imagen1" loading="lazy" className="bg" id="foto-1" />
      <img src="./Portfolio/s1f2.png" alt="Fondo de la sección 1 imagen2" loading="lazy" className="ballena-animation bg" id="foto-3" />
      <img src="./Portfolio/s1f3.png" alt="Fondo de la sección 1 imagen3" loading="lazy" className="bg" id="foto-2" />
    </section>
  );
};

export default PrimeraSeccion;
