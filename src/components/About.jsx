// import React from "react";
// import { useLocation } from "react-router-dom";
// const About=()=>{
//     let loc=useLocation();
//     return(
//       <>
//       <h1>About  component is runing</h1>
//       <h2>{loc.pathname}</h2>
//       </>  
//     )
// }
// export default About;


import { useLocation } from "react-router-dom";
const About=()=>{
  let loc=useLocation();
  return(
    <>
    <h1>{loc.pathname}</h1>
    <h1>About is runing</h1>
    </>
  )
}
export default About;