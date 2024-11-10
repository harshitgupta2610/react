import { useState } from "react";
import Chai from "./cc"

function App() {
  const [counter,setCounter]=useState(15)
  //var counter=15;
  const removeval=()=>{
    if(counter>0){
      setCounter(counter-1);
      }
      else{
       setCounter(counter)
      }}
  const addValue =()=>{
   // counter+=1;
   if(counter<20){
   setCounter(counter+1);
   }
   else{
    setCounter(counter)
   }
  }
  return (
  <>
    <h1>heyyyyyyyyyyyyyyyy</h1>
    <h2>counter: {counter}</h2>
    <button
    onClick={addValue}>add</button>
    <br />
    <button
    onClick={removeval}>remove</button>
   <Chai/>
  </>
  )
  
}

export default App
