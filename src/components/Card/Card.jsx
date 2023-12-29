import "./Card.css";

const Card = ({ proyecto }) => {

  const { nombre, linkgit, linkweb, tec, img,v0 , react, astro} = proyecto;

  return (
    <div className="card">
      <div className="card__img">
        <img src={`./ImgProyects/${img}`} loading="lazy" alt="" />
      </div>

      <div className="card__title">{nombre}</div>
      <div className="card__subtitle">{tec}</div>
      <div className="card__wrapper">
        {v0 ? <button className="card__btn"><a target="_blank" rel="noopener noreferrer" href={v0}>Version 0</a></button> : null}
        {astro ? <button className="card__btn"><a target="_blank" rel="noopener noreferrer" href={astro}>Astro</a></button> : null}
        {react ? <button className="card__btn"><a target="_blank" rel="noopener noreferrer" href={react}>React</a></button> : null}
        {linkweb ? <button className="card__btn"><a target="_blank" rel="noopener noreferrer" href={linkweb}>Website</a></button> : null}
        {linkgit ? <button className="card__btn card__btn-solid"><a  target="_blank" rel="noopener noreferrer" href={linkgit}>GitHub</a></button> : null}
      </div>
      {/*
    --bg-color: rgb(15 23 42);
        width: 250px;
    height: 300px;
    */}
    </div>
  );
};

export default Card;
