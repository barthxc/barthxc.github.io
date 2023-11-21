import React from "react";
import { experienciaData } from "./data";

const ExperienceTable = () => (
  <>
    {experienciaData.map((info) => (
      <React.Fragment key={info.id}>
        <tr>
          <td className="data">
            <h3>{info.experiencia}</h3>
          </td>
          <td className="description" rowSpan="2">
          {info.description.map((desc) => (
              <React.Fragment key={desc.id}>
                {desc.texto}
                <br />
              </React.Fragment>
            ))}
          </td>
        </tr>
        <tr>
          <td>
            <h4>{info.empresa}</h4>
            <p>{info.puesto}</p>
          </td>
        </tr>
      </React.Fragment>
    ))}
  </>
);

export default ExperienceTable;