import React from "react";
import { useLocation} from "react-router";

const NoMatch = () => {
  const props = useLocation()
  console.log(props)
  return(
    <div>
      <h1>No Match For {props.pathname}</h1>
    </div>
  )
}

export default NoMatch