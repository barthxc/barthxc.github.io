import "./CvFooter.css";
const CvFooter = () => {
  return (
    <footer className="footercv text-center text-white" id="contact">
      <div className="container pt-4">
        <div>
          <a
            className="btn btn-floating btn-lg m-1"
            href="https://www.linkedin.com/in/pablo-bartolomé-gallardo-8167a81b4/"
            role="button"
            rel="noopener noreferrer"
            target="_blank"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a
            className="btn btn-floating btn-lg m-1"
            href="https://github.com/barthxc"
            role="button"
            rel="noopener noreferrer"
            target="_blank"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-github"></i>
          </a>

          <a
            className="btn btn-floating btn-lg m-1"
            href="https://twitter.com/bart_hxc"
            role="button"
            rel="noopener noreferrer"
            target="_blank"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-twitter"></i>
          </a>

          <a
            className="btn btn-floating btn-lg m-1"
            href="mailto:barthxc.business@gmail.com"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>

          <a
            className="btn btn-floating btn-lg m-1"
            href="./PBGCV.pdf"
            role="button"
            data-mdb-ripple-color="dark"
            download="PBG-CV.pdf"
          >
            <i
              className="fa-solid fa-file-arrow-down fa-beat"
              style={{ color: "#634B8A" }}
            ></i>
          </a>
        </div>
      </div>

      <p>&copy; BartHxC</p>
    </footer>
  );
};

export default CvFooter;
