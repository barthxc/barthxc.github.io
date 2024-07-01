import React from "react";
import { certificatesData } from "./certificatesData";
function Section4() {
  return (
    <div className="resume" id="resume">
      <div className="section-content">
        <h2 className="section-title">Certificados</h2>
        <div className="info">
          <div className="col">
            <table>
              <tbody>
                <>
                  {certificatesData.map((info) => (
                    <React.Fragment key={info.id}>
                      <tr>
                        <td className="data">
                          <a
                            href={`./Documents/Certificates/${info.name}.pdf`}
                            role="button"
                            target="blank">
                            <h3>{info.name}</h3>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h4>{info.lugar}</h4>
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
