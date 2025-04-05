import React, { useCallback, useEffect, useState } from 'react';
import './GameCss.css';
export function Game() {
    let [start, setStart] = useState('block');
    let [ball, setBall] = useState('none');
    let [pos, setPos] = useState(20);
    
    function helper(e){
        setStart('none');
        setBall('block');
    }

    function move(e){
        if (e.key == 'ArrowRight') {
            console.log('key pressed-> '+pos);
              
            setPos((prev) => prev + 5);
            console.log('after_key_press->'+pos);

        }
    }

  useEffect(() => {
    document.addEventListener("keydown", move);

    return () => {
      document.removeEventListener("keydown", move);
    };
  }, []);

  return (
    <>
        <div className='ball' style={{display:ball, left:`${pos}px`}} onKeyDown={move}></div>
      <button className='start'style={{display:start}} onClick={helper}>Click me</button>
    </>
  );
}