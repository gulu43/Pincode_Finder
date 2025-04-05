import React, { useState } from 'react';
import { useEffect } from 'react';

export function Input() {
    let [greet,setGreet] = useState('');
    let [boiler,setBoiler] = useState('Hello');

    useEffect(()=>{
        if (greet == '' ) {
            setBoiler('');
        }else{
            setBoiler('Hello');
        }
    },[greet])

  return (
    <>
      <input type="text" onChange={(e)=>{
         setGreet(`${e.target.value}`);
      }}/>

      <div>{boiler} {greet}</div>
    </>
  );
}