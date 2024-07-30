
import { useState } from 'react';

import './App.css'

function App() {

  let[value,setValue] = useState(15);

  function addValue(){
    value=value+1;
    console.log(value);
    setValue(value);
  }

  function subtValue(){
    value=value-1;
    console.log(value);
    setValue(value);
  }

  return (
    <>

    <div class="flex items-center justify-center h-screen">

      <button class="bg-blue-500 w-32 p-4 m-4	text-2xl"
      onClick={addValue}
      >Increment Number</button>

      <h1 class="text-6xl mx-24 border-inherit" >{value}</h1>

      <button class="bg-yellow-500 w-36 p-4 m-4	text-2xl"
      onClick={subtValue}
      >Decrement Number</button>

    </div>
      
      
      


    </>
  )
}

export default App
