import React from 'react'
import { useState } from 'react';

const Content = () => {

    function changeColor(){
        const colors=["red","blue","Yellow","green"];
        const int=Math.floor(Math.random()*3);
        return colors[int]
    
      }

     
  return (
    <main>
       <p >The color is color</p>
       <button >ChangeColor</button>
    </main>
  
  )
}

export default Content