import React from 'react'
import { useState } from 'react';

const Content = () => {
        const[number,setAdd]=useState(0)

        const increment=()=>{
          setAdd(number+1)
        }
        
        const decrement=()=>{
          setAdd(number-1)
        }
        const [name,setName]=useState("Trainee")

        const Traineename=()=>{
          const Names=["Karthi","siva","Arun","Hari"];
          const int=Math.floor(Math.random()*4)
          setName (Names[int])
        }
  
  return (
    <main>
       
       <h1>Hello,{name}</h1>
       <button onClick={Traineename}>Let's Go</button>
      <h3>Give Rating {number}</h3>
      <button onClick={increment}>ADD</button>
      <button onClick={decrement}>SUB</button>
      <button>SUBMIT</button>


    </main>
  
  )
}

export default Content