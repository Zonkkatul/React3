import React, { useState } from 'react';

function Color() {
  const [color, setColor] = useState("#000000");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <h2>Choose a Color</h2>
      <input type="color" value={color} onChange={handleColorChange} />
      <div style={{ marginTop: '20px', width: '100px', height: '100px', backgroundColor: color }}>
    
      </div>
    </div>
  );
}

export default Color;
