
//npm start
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faGithub } from '@fortawesome/free-brands-svg-icons'

import './App.css';


function VCard() {
  const github =  "github.png";
  const linkedin = "linkedin.png";
  console.log(github);
  return (
   
    <div className="container">
    <div className="vCard">
      <h3>Nadia Akhtar</h3>
      <p>Junior Dev</p>
      <p>fizakhan81@outlook.com</p>
      <p>0000-00-00-00</p>
        <div className="icons">
         <a href="https://github.com/FizaKhan2511" target="_blank" rel="noreferrer">
        <img alt= " " src ={github}  width="45" height="45" name="git"/>
        </a> 
        <a href="https://www.linkedin.com/in/nadia-akhtar-bxl/" target="_blank" rel="noreferrer">
         <img alt= " " src={linkedin} width="45" height="45"/>
        </a>  
         
     </div>
      
    </div>
    </div>
  );
}




export default VCard;/*Once the component is defined, it can be exported for use in other
parts of the application by adding the export default VCard statement at the bottom of the file.*/
