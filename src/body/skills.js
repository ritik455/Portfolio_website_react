import Card from 'react-bootstrap/Card';
import "../body/body.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import html_img from "../images/html_img.png";
import css_img from "../images/css_img.png";
import js_img from "../images/js_img.png";
import c_img from "../images/c_img.png";
import skills_img from "../images/skills_image.jpg";
import { Slide } from 'react-awesome-reveal';
function Skills() {

    const skillset = [
        {id:1, name:'HTML5', imgsrc:html_img},
        {id:2, name:'CSS', imgsrc:css_img},
        {id:3, name:'Javascript', imgsrc:js_img},
        {id:4, name:'C', imgsrc:c_img}
    ]

  return (
    <div className='skills'>
      <Slide className='skills_image'>
        <img src={skills_img} style={{maxWidth:"100%", height:"auto", marginRight:"5rem"}}></img>
      </Slide>
      <Slide direction='right' className='skills_text'>
        <div className="skills_list_container">
          <div>
            <img src={html_img}></img>
            <h5>HTML</h5>
          </div>
          <div>
            <img src={css_img}></img>
            <h5>CSS</h5>
          </div>
          <div>
            <img src={js_img}></img>
            <h5>Javascript</h5>
          </div>
        </div>
      </Slide>
      
    </div>
    
  );
}

export default Skills;