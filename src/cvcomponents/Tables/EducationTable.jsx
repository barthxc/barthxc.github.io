import React from "react";
import { estudiosData } from "./data";

const EducacionTable = () => (
    <>
      {estudiosData.map((info) => (
        <React.Fragment key={info.id}>
          <tr>
            <td className="data">
              <h3>{info.year}</h3>
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
              <h4>{info.estudio}</h4>
              <p>{info.lugar}</p>
              <span className="promedio">{info.nota}</span>
            </td>
          </tr>
        </React.Fragment>
      ))}
    </>
  );
  
  export default EducacionTable;