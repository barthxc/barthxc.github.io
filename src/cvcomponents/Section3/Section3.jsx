import Tag from '../Tag/Tag';
import './Section3.css';
function Section3() {
  return (
    <div className="skills" id="skills">
      <div className="section-content">
        <h2 className="section-title">Skills</h2>
        <h3>Odio las skills bars</h3>

        <div className="flex-chart">
            <Tag/>
        </div>
      </div>
    </div>
  );
}

export default Section3;
