import { TagCloud } from "@frank-mayer/react-tag-cloud";
import dataCloud from "./dataCloud";
import { useState } from "react";

const Tag = () => {
  const [skills, setSkills] = useState(dataCloud);

  return (
    <>
      <TagCloud
        className="text-2xl font-bold text-cyan-500 flex place-content-evenly"
        options={(w) => ({
          radius: Math.min(350, w.innerWidth, w.innerHeight) / 2,
          maxSpeed: "fast",
        })}
      >
        {skills}
      </TagCloud>
    </>
  );
};

export default Tag;
