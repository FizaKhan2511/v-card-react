//npm start
//Je l'ai deployé sur render.com. Le deployement ne s'est pas fait tout de suite parce que dans le champs root directory
//il faut mettre le dosser ou se trouve le code. Ici c'est src (moi je n'avais rien mis du tout parce que c'était optionel)
//et aussi dans le champs build il faut indiquer npm install; npm run build (moi je n'avais mis que npm run build)
import VCard from './App'
var ReactDOM = require('react-dom');
ReactDOM.render(<VCard />, document.getElementById('app'));