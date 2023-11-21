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
              la frase: Si no es funcional, consigue que lo sea. Y si no puedes,
              hazlo bonito.
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
              Me encanta el diseño a pesar de no estar especializado. Me gusta
              la armonía y el contraste. Los detalles pueden hacer la
              diferencia. También me encantan las hormigas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Section2;
