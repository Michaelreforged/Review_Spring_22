import axios from "axios";
import React, { useState } from "react";

const Functions = () =>{

  const [books, setBooks] = useState([])

  const getData = async () =>{
    try{
      let res = await axios.get("https://reqres.in/api/users?delay=1")
      console.log(res);
      setBooks(res.data.data)
    }catch(err){
      console.log(err)
    }
  }

  const renderBooks = () =>{
    return books.map((book)=>{
      return (<div key = {book.id}>
      <h1>books</h1>
      </div>)
    })
  }

  return (
    <>
    <h1>Functions Page</h1>
    <button onClick={()=>getData()}>Get Books</button>
    {renderBooks()}
    </>
  )
}

export default Functions