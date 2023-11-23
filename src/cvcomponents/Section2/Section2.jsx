import "./Section2.css";

function Section2() {
  return (
    <div className="aboutme" id="about">
      <div className="section-content">
        <h2 className="section-title">About me</h2>
        <h3>WHOAMI</h3>

        <p className="special">La elocuencia está sobrevalorada</p>
        <p>
          Apasionado por la tecnología y la creatividad, busco nuevas
          oportunidades para desarrollarme profesionalmente y aplicar mis
          habilidades en proyectos innovadores. Comprometido, curioso y
          divertido. Estoy emocionado por descubrir nuevas oportunidades que me
          permitan seguir creciendo como profesional.
        </p>

        <div className="fila">
          <div className="col">
            <i className="fa-solid fa-user"></i>
            <span className="titulo-detalle">Perfil</span>
            <p>
              Soy un divertido sujeto al que le gusta añadir todos los
              conocimientos posibles al cerebro y a los proyectos. Me quedo con
              la frase: <span className="special">¿La mejor versión de ti mismo lo haría? Si no es así, conviértete en tu mejor versión!
                </span>
            </p>
          </div>

          <div className="col">
            <i className="fa-solid fa-location-dot"></i>
            <span className="titulo-detalle">Ubicacion</span>
            <p>¡Donde el proxy me aloje! España/Andalucía por ahora.</p>
          </div>

          <div className="col">
            <i className="fa-sharp fa-solid fa-heart"></i>
            <span className="titulo-detalle">Intereses</span>
            <p>
            Busco desentrañar el misterio del FullStack con el stack MERN como brújula, práctico para usar mi lágito de aventurero llamado Python. También me gustan las hormigas!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Section2;
