import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer text-center text-white" id="contact">
      <div className="container pt-4">
        <div>
          <a
            className="btn btn-floating btn-lg m-1"
            href="https://www.linkedin.com/in/pablo-bartolomé-gallardo-8167a81b4/"
            role="button"
            rel="noopener noreferrer"
            target="_blank"
            data-mdb-ripple-color="dark">
            <i className="fab fa-linkedin"></i>
          </a>

          <a
            className="btn btn-floating btn-lg m-1"
            href="https://github.com/barthxc"
            role="button"
            rel="noopener noreferrer"
            target="_blank"
            data-mdb-ripple-color="dark">
            <i className="fab fa-github"></i>
          </a>

          <a
            className="btn btn-floating btn-lg m-1"
            href="https://twitter.com/bart_hxc"
            role="button"
            rel="noopener noreferrer"
            target="_blank"
            data-mdb-ripple-color="dark">
            <i className="fab fa-twitter"></i>
          </a>

          <a
            className="btn btn-floating btn-lg m-1"
            href="mailto:barthxc.business@gmail.com"
            role="button"
            data-mdb-ripple-color="dark">
            <i className="fa-solid fa-envelope"></i>
          </a>

          <a
            href="/cv"
            className="btn btn-floating btn-lg m-1"
            role="button"
            data-mdb-ripple-color="dark">
            <i className="fa-solid fa-file-lines"></i>
          </a>

          <a
            className="btn btn-floating btn-lg m-1"
            href="./Documents/Cvs/PBG-CV.pdf"
            role="button"
            target="blank"
            data-mdb-ripple-color="dark">
            <i
              className="fa-solid fa-file-arrow-down fa-beat"
              style={{ color: "#634B8A" }}></i>
          </a>
        </div>
      </div>

      <p>
        Thanks!&nbsp;
        <a
          href="https://www.conchimunuerad.com"
          target="_blank"
          rel="noopener noreferrer">
          Illustrator - Conchi Munuera
        </a>
      </p>
    </footer>
  );
};

export default Footer;
