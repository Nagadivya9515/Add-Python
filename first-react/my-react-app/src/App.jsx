import ReactDOM from 'react-dom';
import './App.css'

const date = new Date();
let time = date.getHours();
let message = "";

let customStyle = {
  color: "Red"
}

function App() {
  
  if(time === "Morning") {
    message = "Good Morning";
    
  }
  else if(time === "Noon") {
    message = "Good Afternoon";
    customStyle.color = "Blue";
  }
  else if(time === "Evening"){
    message = "Good Evening";
    customStyle.color = "Yellow";
  }
  else {
    message = "Good Night";
    customStyle.color = "Green";
  }
  return <h1 style={customStyle}>{message}</h1>;
}

  

export default App
