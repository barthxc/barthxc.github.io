import './Section4.css';
import EducacionTable from '../Tables/EducationTable';
import ExperienceTable from '../Tables/EducationTable';

function Section4() {
  return (
    <div className="resume" id="resume">
      <div className="section-content">
        <h2 className="section-title">EDUCACIÓN</h2>
        <h2 className="section-title">&</h2>
        <h2 className="section-title">EXPERIENCIA</h2>
        <div className="info">
          <div className="col">
            <span className="title">Educación</span>
            <table>
              <tbody>
                <EducacionTable/>
              </tbody>
            </table>
          </div>

          <div className="col">
            <span className="title">Experiencia</span>
            <table>
              <tbody>
                <ExperienceTable/>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;