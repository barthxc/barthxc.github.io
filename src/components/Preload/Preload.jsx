import { useState, useEffect } from "react";

import "./Preaload.css";

const Preload = () => {
  const [loading, setLoading] = useState(true);

  function desvanecerHexagon() {
    const hexagons = document.querySelectorAll(".hexagon"); // Selecciona todos los elementos div
    // Desplazar la ventana al inicio de la página
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(function () {
      for (let i = 0; i < hexagons.length; i++) {
        if (hexagons[i].classList.contains("hexagon")) {
          // Verifica si el elemento tiene la clase "hexagon"
          hexagons[i].style.transition = "opacity 1s";
          hexagons[i].style.opacity = 0;

          // Agregar un evento de escucha para el final de la transición
          hexagons[i].addEventListener("transitionend", function () {
            setLoading(false);
          });
        }
      }
    }, 1000);
  }

  useEffect(() => {
    

    const handleLoad = () => {
      desvanecerHexagon();
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);



  return loading ? (
    <>
    
      <div className="hexagon" aria-label="Animated hexagonal ripples">
        <img className="imagen" src="./LOGO_MORADO-B1.png" alt="Imagen" />
        <div className="hexagon__group" style={{ color: "#59277a" }}>
          <div className="hexagon__sector" style={{ color: "#ababab" }}></div>
          <div className="hexagon__sector" style={{ color: "#ababab" }}></div>
          <div className="hexagon__sector" style={{ color: "#ababab" }}></div>
          <div className="hexagon__sector" style={{ color: "#ababab" }}></div>
          <div className="hexagon__sector" style={{ color: "#ababab" }}></div>
          <div className="hexagon__sector" style={{ color: "#ababab" }}></div>
          <div className="hexagon__sector" style={{ color: "#ababab" }}></div>
          <div className="hexagon__sector" style={{ color: "#ababab" }}></div>
        </div>
        <div className="hexagon__group" style={{ color: "#6c2f93" }}>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
        </div>
        <div className="hexagon__group" style={{ color: "#7f37ad" }}>
          <div className="hexagon__sector" style={{ color: "#ababab" }}></div>
          <div className="hexagon__sector" style={{ color: "#ababab" }}></div>
          <div className="hexagon__sector" style={{ color: "#ababab" }}></div>
          <div className="hexagon__sector" style={{ color: "#ababab" }}></div>
          <div className="hexagon__sector" style={{ color: "#ababab" }}></div>
          <div className="hexagon__sector" style={{ color: "#ababab" }}></div>
          <div className="hexagon__sector" style={{ color: "#ababab" }}></div>
          <div className="hexagon__sector" style={{ color: "#ababab" }}></div>
        </div>
        <div className="hexagon__group" style={{ color: "#923fc6" }}>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
        </div>
        <div className="hexagon__group" style={{ color: "#59277a" }}>
          <div className="hexagon__sector" style={{ color: "#ababab" }}></div>
          <div className="hexagon__sector" style={{ color: "#ababab" }}></div>
          <div className="hexagon__sector" style={{ color: "#ababab" }}></div>
          <div className="hexagon__sector" style={{ color: "#ababab" }}></div>
          <div className="hexagon__sector" style={{ color: "#ababab" }}></div>
          <div className="hexagon__sector" style={{ color: "#ababab" }}></div>
          <div className="hexagon__sector" style={{ color: "#ababab" }}></div>
          <div className="hexagon__sector" style={{ color: "#ababab" }}></div>
        </div>
        <div className="hexagon__group" style={{ color: "#6c2f93" }}>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
        </div>
        <div className="hexagon__group" style={{ color: "#7f37ad" }}>
          <div className="hexagon__sector" style={{ color: "#ababab" }}></div>
          <div className="hexagon__sector" style={{ color: "#ababab" }}></div>
          <div className="hexagon__sector" style={{ color: "#ababab" }}></div>
          <div className="hexagon__sector" style={{ color: "#ababab" }}></div>
          <div className="hexagon__sector" style={{ color: "#ababab" }}></div>
          <div className="hexagon__sector" style={{ color: "#ababab" }}></div>
          <div className="hexagon__sector" style={{ color: "#ababab" }}></div>
          <div className="hexagon__sector" style={{ color: "#ababab" }}></div>
        </div>
        <div className="hexagon__group" style={{ color: "#923fc6" }}>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
        </div>
      </div>
    </>
  ) : null;
};

export default Preload;
