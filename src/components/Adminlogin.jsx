// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// const Adminlogin =()=> 
// {
//     let[data,updatedata]=useState({uid:'',pwd:''})
//     let naviagte=useNavigate();
//     let change=(e)=>{
//         updatedata({...data,[e.target.name]:e.target.value})
//     }
//   return (
//     <>
//     <form onSubmit={(e)=>{
//         e.preventDefault();
//         if(data.uid==='admin'&&data.pwd==='admin123')
//         {
//             naviagte(`/adminhome/${data.uid}`);
//         }
//         else{
//             alert('Invalid id and password');
//         }
//     }}>
//         Id<input type="text" name="uid" value={data.uid} onChange={change} /><br/>
//         Password<input type="text" name="pwd" value={data.pwd} onChange={change} /><br/>
//         <button>Login</button>
//     </form>
//     </>
//   )
// }

// export default Adminlogin;
