import React, { useState, useEffect } from 'react';
import { TagCloud } from "@frank-mayer/react-tag-cloud";

const data = [
  "TAILWIND",
  "SASS",
  "JAVASCRIPT",
  "PHP",
  "PYTHON",
  "NODE",
  "MONGOOSE",
  "REACT",
  "EXPRESS",
  "BOOTSTRAP",
  "MYSQL",
  "MONGO",
  "GIT",
  "VERCEL",
  "OBSIDIAN",
];

const Cloud = () => {
  const [containerWidth, setContainerWidth] = useState(0);

  const handleResize = () => {
    setContainerWidth(window.innerWidth);
  };

  useEffect(() => {
    // Llama a handleResize cuando el componente monta
    handleResize();

    // Agrega un event listener para el cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Limpieza del event listener al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const tagCloudOptions = {
    radius: Math.min(500, containerWidth) /5,
    maxSpeed: "normal",
  };

  console.log(window)

  return (
    <div className="text-xl  justify-center text-cyan-500 flex">
      <TagCloud options={tagCloudOptions}>
        {data}
      </TagCloud>
    </div>
  );
};

export default Cloud;
