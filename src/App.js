
//npm start
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faGithub } from '@fortawesome/free-brands-svg-icons'

import './App.css';


function VCard() {
  const github =  "icons8-github-squared-64.png";
  const linkedin = "linkedinicone.png";
  console.log(github);
  return (
   
    <div className="container">
    <div className="vCard">
      <h3>Nadia Akhtar</h3>
      <p>Junior Dev</p>
      <p>fizakhan81@outlook.com</p>
      <p>0000-00-00-00</p>
        <div className="icons">
         <a href="https://github.com/FizaKhan2511" target="_blank" rel="noreferrer">Github
        { /*<img alt= " " src ={github}/>}*/}
        </a> 
        <a href="https://www.linkedin.com/in/nadia-akhtar-bxl/" target="_blank" rel="noreferrer">Linkedin
         {/*<img alt= " " src={linkedin} />*/}
        </a>  
         
     </div>
      
    </div>
    </div>
  );
}




export default VCard;/*Once the component is defined, it can be exported for use in other
parts of the application by adding the export default VCard statement at the bottom of the file.*/
