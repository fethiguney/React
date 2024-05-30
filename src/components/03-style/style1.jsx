import React from 'react'

const Style1 = () => {

    const isRadius = true;
  return (
    <div>
        <h1>STYLE</h1>
        <h2 style={{
            color: "red",
            border: "1px solid black",
            backgroundColor: "yellow",
            padding: "10px",
            borderRadius: isRadius ? "20px" : "0px",
            fontSize: "30px"
            }}>Inline Style</h2>
    </div>
  )
}

export default Style1