import React, { useEffect } from 'react'
import initMain from '../assets/js/initMain'

function TypedCom() {
    useEffect(()=>{
        initMain();
    },[]);
    
  return (
    <div>
        <span id="typed1"></span>
    </div>
  )
}

export default TypedCom