import React from "react"
import {useLocation, useParams} from "react-router"

const NoMatch = () =>{
  const loc = useLocation();
  console.log(loc)
  const params = useParams()
  console.log(params)

  return(
    <div>
      <h1>No match for {loc.pathname}</h1>
    </div>
  )

}
export default NoMatch