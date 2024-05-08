const estudiosData = [
  {
    id: 1,
    year: "2013 - 2015",
    estudio: "Sistemas Microinformáticos",
    description: [
      { id: 1, texto: "Manipulación de equipos informáticos" },
      { id: 2, texto: "Servidores" },
      {
        id: 3,
        texto: "Fundamentos básicos de programación Web",
      },
    ],
    lugar: "IES Diego Angulo",
    nota: "6,7",
  },
  {
    id: 2,
    year: "2017 - 2019",
    estudio: "Sonido para audiovisuales y espectáculos",
    description: [
      { id: 1, texto: "Sonido directo" },
      { id: 2, texto: "Tratamiento acústico" },
      {
        id: 3,
        texto: "Grabación, edición y maximixación",
      },
      { id: 4, texto: "Calibración, monitoreo, FOH" },
    ],
    lugar: "IES Tierno Galván",
    nota: "6,67",
  },
  {
    id: 3,
    year: "2022 - 2024",
    estudio: "Desarrollo de Aplicaciones Web",
    description: [
      { id: 1, texto: "Frontend: HTML, CSS, JavaScript, Bootstrap" },
      { id: 2, texto: "Backend: Java, Php" },
    ],
    lugar: "Universidad Alfonso X El Sabio",
    nota: "Null :)",
  },
  {
    id: 4,
    year: "1996 - Actualidad",
    estudio: "Autoestudio",
    description: [
      { id: 1, texto: "React, Astro, Tailwind, Next, Pug" },
      { id: 2, texto: "Python, Node, Mongoose, Express, Prisma " },
      { id: 3, texto: "MySql, MongoDB" },
      { id: 4, texto: "Git, Obsidian, Vercel" },
      { id: 5, texto: "Docker, TypeScript" },
    ],
    lugar: "???",
    nota: "En constante crecimiento :)",
  },
];

const experienciaData = [
  {
    id: 1,
    experiencia: "2 AÑOS",
    description: [
      { id: 1, texto: "Creación de estructuras" },
      { id: 2, texto: "Acondicionamiento sonoro de escenarios" },
      {
        id: 3,
        texto: "MTV EMA Sevilla 2019",
      },
    ],
    empresa: "PennyWise",
    puesto: "Hammper",
  },
  {
    id: 2,
    experiencia: "1 AÑO",
    description: [
      {
        id: 1,
        texto: "Enseñanza a jóvenes sobre los fundamentos de la robótica",
      },
      { id: 2, texto: "Diseño 3D y programación de videojuegos interactiva" },
    ],
    empresa: "Dicampus",
    puesto: "Docente",
  },
  {
    id: 3,
    experiencia: "3 Meses",
    description: [
      { id: 1, texto: "Next" },
      { id: 2, texto: "Nest" },
      { id: 3, texto: "Docker" },
    ],
    empresa: "Quental",
    puesto: "Prácticas Fullstack",
  },
  {
    id: 4,
    experiencia: "NULL",
    description: [
      { id: 1, texto: "¡Tu puedes ser la siguiente empresa en aparecer aquí!" },
    ],
    empresa: "NULL",
    puesto: "NULL",
  },
];

export { estudiosData, experienciaData };
