import { useState } from "react";
import Chai from "./chai"
import card from "./components/card";

function App() {
/*
 let [counter,setcounter] = useState(15)
  //let counter = 15;

  const addvalue =() => {
    //counter = counter +1;
    console.log("value added",counter);
    setcounter(counter+1)
  }
  */
  return (
   <>
   <h1 className='bg-green-400'>TailWind </h1>
   <card/> 
 </>
  )
}

export default App
