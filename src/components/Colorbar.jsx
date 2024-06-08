import React from 'react';

import { useState } from 'react';

export default function Colorbar(){
    // const [color,setColor]=useState('white');
    // setColor(color);
  function bcChange(color){
      document.body.style.backgroundColor=color;
  }

    
    return (
        <>
            <div className="d-flex flex-row justify-content-around">
                <button className="btn btn-primary m-3" onClick={()=>{bcChange('blue')}}>Blue</button>
                <button className="btn btn-success m-3" onClick={()=>{bcChange('green')}}>Green</button>
                <button className="btn btn-danger m-3" onClick={()=>{bcChange('red')}}>Red</button>
                <button className="btn btn-warning m-3" onClick={()=>{bcChange('yellow')}}>Yellow</button>
            </div>
        </>
    )
}
