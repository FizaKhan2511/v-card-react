
//npm start
//Je l'ai deployé sur render.com. Le deployement ne s'est pas fait tout de suite parce que dans le champs root directory
//il faut mettre le dosser ou se trouve le code. Ici c'est src (moi je n'avais rien mis du tout parce que c'était optionel)
//et aussi dans le champs build il faut indiquer npm install; npm run build (moi je n'avais mis que npm run build)

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
        <img alt= " " src ={github}  width="45" height="45"/>
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
