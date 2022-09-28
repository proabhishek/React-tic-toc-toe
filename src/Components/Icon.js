// import React from "react";
import { FaTimes,FaRegCircle, FaPen } from "react-icons/fa";

const Icon = (props) => {
     // console.log(props)
     if(props.icon == "circle"){
          return <FaRegCircle />
     }
     else if(props.icon == "cross"){
          return <FaTimes />
     }
     else{
          return <FaPen />
     }
}

export default Icon;