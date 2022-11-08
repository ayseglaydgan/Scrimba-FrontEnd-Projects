import React from 'react'

function Colors() {

    const [colors, setColor] = React.useState(["red", "green", "blue"]);
  return (
    <div>
      <h2>Colors</h2>
      {colors.map((color, i) => (<div key={i}>{color}</div>))}
      <button onClick={() => setColor((prev) => [...colors, "yellow"])}>Add</button>
    </div>
  )
}

export default Colors
