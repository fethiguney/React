import React from 'react'

const Style3 = () => {

    const isRadius = true;

    const titleStyle ={
      color: "grey",
      border: "1px solid black",
      backgroundColor: "orange",
      padding: "10px",
      borderRadius: isRadius ? "20px" : "0px",
      fontSize: "30px"
      }
  return (
    <div>
        <h1>STYLE</h1>
        <h2 style={titleStyle}>Internal Style</h2>

        <h2 style={{
            ...titleStyle, 
            color: "black",
            backgroundColor: "aliceblue"
           
            }}>Internal & Inline Style</h2>
    </div>
  )
}

export default Style3