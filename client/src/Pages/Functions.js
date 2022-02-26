import axios from "axios";
import React, { useState } from "react";

const Functions = () =>{

  const [colors, setColors] = useState([])

  const getData = async () =>{
    try{
      let res = await axios.get("https://reqres.in/api/books?delay=1")
      normalizeColors(res.data.data)

    }catch(err){
      console.log("error in get data")
    }
  }

  const normalizeColors = (data) =>{
    return setColors(()=>{
      return data.map((info)=>{
        return{...info ,clicked:false}
      })
    })
  } 

  const formatText = (color, name) =>{
    if(!color) return 
    return(
      <div>
      <h1 style={{color:color}}>{name}</h1>
      </div>
    )
  }

  const changeClicked = (clickedColor) =>{
    console.log(clickedColor)
    setColors(()=>{
      return colors.map((color) => {
        if(color.name !==clickedColor.name) return color
        return {...clickedColor, clicked : !clickedColor.clicked}
      })
    })
  }

  const renderColors = () =>{
    return colors.map((color) =>{
      return(
        <div key ={color.id}>
          <h1>{color.name}</h1>
          <button onClick={()=>(changeClicked(color))}> add color to text?</button>
          {color.clicked && formatText(color.color, color.name)}
        </div>
      )
    })
  }

  return(
    <>
    <h1>Functions</h1>
    <button onClick={()=>getData()}> Get Colors</button>
    {renderColors()}
    {/* Format text below will not work due to not having any attributes passed to it */}
    {formatText()}
    </>
  )

}

export default Functions