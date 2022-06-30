import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Timer = () => {
    const [timer,setTimer] =useState(0)

useEffect(() => {

    let id=setInterval(() => {
        if(!timer > 100){
            clearInterval(id)
        }
        else{
            setTimer(timer + 1)
        }
        
            },1000)
        return () => {
            clearInterval(id)
        }

})

 

  return (
    <div>
     <h1>   Count Down : {timer}</h1>
    </div>
  )
}

export default Timer