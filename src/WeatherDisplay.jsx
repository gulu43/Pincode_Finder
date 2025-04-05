import React from 'react';

export function WeatherDisplay(props) {
    let tempW = props.temperature > 20 ? 'red' : 'blue';
  return (
    <>
    <div style={ {color:tempW} }> temp:-{props.temperature}  cond:-{props.conditions} </div>
    </>
  );
}