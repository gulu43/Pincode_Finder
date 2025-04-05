import React, { useState } from 'react';

export function Click() {
    let [count, setCount] = useState(0);
  return (
    <>
      <div>Button click {count} times</div>

      <button onClick={()=>{
        setCount((prev)=> (prev + 1))
      }}>CLick me</button>
    </>
  );
}