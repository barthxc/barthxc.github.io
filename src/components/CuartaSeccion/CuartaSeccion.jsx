import Card from "../Card/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer/Footer";
const CuartaSeccion = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 5, // Mostrar 3 tarjetas por fila en pantallas pequeñas
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          arrows: true,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 978,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 675,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          infinite:true,
          centerMode: true,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          infinite:true,
          centerMode: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          centerMode: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          centerMode: true,
          centerPadding: "5px",
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          centerMode: true,
          centerPadding: "-10px",

        },
      },
    ],
  };

  const dataProyect = [
    {
      nombre: "BartHxC",
      img: "p1.jpeg",
      tec: "Become a developer",
      linkweb: "https://www.linkedin.com/in/pablo-bartolomé-gallardo-8167a81b4/",
    },
    {
      nombre: "Portfolio",
      img: "p2.jpg",
      tec: "HTML- CSS - JS",
      linkgit: "https://github.com/barthxc/barthxc.github.io",
      v0:"https://github.com/barthxc/portfolio",
    },
    // {
    //   nombre: "CV Web",
    //   img: "p3.jpg",
    //   tec: "REACT",
    //   linkweb: "www.google.com",
    // },
    {
      nombre: "BakeryVaqueros",
      img: "p4.jpg",
      tec: "HTML - CSS - JQuery",
      linkweb: "https://celadon-lily-9d6de6.netlify.app",
      linkgit: "https://github.com/barthxc/BakeryVaquerosFront",
    },
    {
      nombre: "GoatSales",
      img: "p5.jpg",
      tec: "HTML - CSS - JS - LocalStorage",
      linkweb: "https://helpful-gumption-b43956.netlify.app",
      linkgit: "https://github.com/barthxc/GoatSales",
    },
    
    {
      nombre: "Travel Agency",
      img: "p16.png",
      tec: "NODE - EXPRESS - PUG",
      linkweb: "https://agencia-viajes-node-gamma.vercel.app",
      linkgit: "https://github.com/barthxc/Agencia-de-Viajes-Node-Express-Pug",
    },
    {
      nombre: "App Veterinary",
      img: "p17.png",
      tec: "MERN FullStack",
      linkweb: "https://effortless-pegasus-4a07bd.netlify.app",
      linkgit: "https://github.com/barthxc/MERN_APV_FRONT",
    },
    {
      nombre:"Coworking SanJuan",
      img:"p18.jpg",
      tec:"MERN FullStack",
      linkweb:"https://genuine-sorbet-fbbf1d.netlify.app",
      linkgit:"https://github.com/barthxc/Frontend-Turnos-Coworking-SanJuan"
    },
    {
      nombre:"Filmli",
      img:"p19.png",
      tec:"MERN FullStack",
      linkweb:"https://astonishing-wisp-979f91.netlify.app",

    },
    {
      nombre:"Tech Explorer",
      img:"p20.png",
      tec:"MERN FullStack",
      linkweb:"https://stupendous-cuchufli-a7d2a1.netlify.app",
      linkgit:"https://github.com/barthxc/Tech-Explorer-Front"
    },


    //Principales
    {
      nombre: "Form Email",
      img: "p6.png",
      tec: "HTML - CSS - JS",
      linkweb: "https://quiet-strudel-4970cf.netlify.app",
      linkgit: "https://github.com/barthxc/FakeForm",
    },
    {
      nombre: "Task",
      img: "p7.png",
      tec: "HTML - CSS - LocalStorage",
      linkweb: "https://glittery-liger-8f2d53.netlify.app",
      linkgit: "https://github.com/barthxc/AppTask",
    },
    {
      nombre: "Veterinary Form",
      img: "p8.png",
      tec: "HTML - CSS - IndexedDB",
      linkweb: "https://magical-meerkat-f6dd52.netlify.app",
      linkgit: "https://github.com/barthxc/Veterinario-Form",
    },
    {
        nombre: "WeatherApp",
        img: "p9.png",
        tec: "HTML - CSS - Fetch",
        linkweb: "https://extraordinary-zabaione-eea825.netlify.app",
        linkgit: "https://github.com/barthxc/WeatherApp",
      },
      {
        nombre: "RecipeList",
        img: "p10.jpg",
        tec: "HTML - CSS - Fetch - LocalStorage",
        linkweb: "https://sparkling-gaufre-c842f2.netlify.app",
        linkgit: "https://github.com/barthxc/RecipeList",
      },
      {
        nombre: "ImageFinder",
        img: "p11.png",
        tec: "HTML - CSS - Fetch",
        linkweb: "https://hilarious-peony-fa991a.netlify.app",
        linkgit: "https://github.com/barthxc/ImageFinder",
      },
      {
        nombre: "CriptoCalc",
        img: "p12.png",
        tec: "HTML - CSS - Fetch",
        linkweb: "https://singular-zuccutto-9f1d29.netlify.app",
        linkgit: "https://github.com/barthxc/CriptoCalc",
      },
      {
        nombre: "TipCalculator",
        img: "p13.png",
        tec: "Fetch - Json-Server",
        linkgit: "https://github.com/barthxc/Calculadora-Propinas",
      },
      {
        nombre: "CRM Clients",
        img: "p14.png",
        tec: "CRUD - Json-Server - Async/Await",
        linkgit: "https://github.com/barthxc/CRM-JsonServer-CRUD-REST",
      },
      {
        nombre: "Loan Calculador",
        img: "p15.png",
        tec: "VUE",
        linkweb: "https://peaceful-pixie-38d541.netlify.app",
        linkgit: "https://github.com/barthxc/cotizador-prestamos-Vue",
      },
      {
        nombre: "Loan Calculador",
        img: "p15.png",
        tec: "REACT",
        linkweb: "https://leafy-croissant-385175.netlify.app",
        linkgit: "https://github.com/barthxc/cotizador-prestamos-React",
      },
      {
        nombre: "In coming!",
        img: "incoming.png",
        tec: "New Proyect Soon!",
      },
  ];

  return (
    <section id="projects">
      <img src="./Portfolio/s4f1.png" alt="Fondo de la sección 4 con una imagen" className="bg" />

      <div className="w-full  mx-auto mb-10 px-10">
        <Slider {...settings}>
          {dataProyect.map((proyecto) => (
            <Card proyecto={proyecto} key={proyecto.nombre} />
          ))}
        </Slider>
      </div>
      <Footer/>
    </section>
  );
};

export default CuartaSeccion;
