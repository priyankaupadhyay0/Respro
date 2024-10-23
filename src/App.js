// import React from "react";
// import {Link,Route,Routes} from 'react-router-dom'
// import Home from './components/Home.jsx'
// import About from './components/About.jsx'
// import Contact from './components/Contact.jsx'
// import Services from './components/Services.jsx'
// import Pagenotfound from './components/Pagenotfound.jsx'

// const App=()=>{
//   return(
//     <>
//     <Routes>
//       <Route path='/' element={<Home/>}></Route>
//       <Route path='/about' element={<About/>}></Route>
//       <Route path='/contact' element={<Contact/>}></Route>
//       <Route path='/services/:name' element={<Services/>}></Route>
//       <Route path='/*' element={<Pagenotfound/>}></Route>
//     </Routes>

//      <Link to='/'>Home</Link>
//      <Link to='/about'>About</Link>
//      <Link to='/contact'>Contact</Link>
//      <Link to='/services/Java'>Services</Link>
    
//      {/* <a href='/'>Home</a>
//      <a href='/about'>About</a>
//      <a href='/contact'>contact</a>
//      <a href='/Services'>services</a> */}
//   </>
//   )
// }
// export default App;



// import React from 'react'
// import { Link, Route, Routes } from 'react-router-dom'
// import About from './components/About.jsx'
// import Adminhome from './components/Adminhome.jsx'
// import Adminlogin from './components/Adminlogin.jsx'
// import Contact from './components/Contact.jsx'
// import Home from './components/Home.jsx'
// import Pagenotfound from './components/Pagenotfound.jsx'
// import Services from './components/Services.jsx'
// const App = () => {
//   return (
//     <>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/about' element={<About/>}/>
//         <Route path='/contact' element={<Contact/>}/>
//         <Route path='/services/:fname' element={<Services/>}/>
//         <Route path='/adminlogin' element={<Adminlogin/>}/>
//         <Route path='/adminhome/:uname' element={<Adminhome/>}/>
//         <Route path='/*' element={<Pagenotfound/>}/>
//       </Routes>
//       <Link to="/">Home</Link>
//       <Link to="/about">About</Link>
//       <Link to="/contact">Contact</Link>
//       <Link to="/services/java">Services</Link>
      
//       {/* <Link to="/adminhome" >Adminhome</Link>
//         or enter a page name in browser
//       <Link to="/adminlogin">Adminlogin</Link> */
//         }
//     </>
//   )
// }
// export default App;


// import React from "react";
// import { Link,Route,Routes } from "react-router-dom";
// import Home from './components/Home.jsx';
// import About from './components/About.jsx';
// import Contact from "./components/Contact.jsx";
// import Services from './components/Services.jsx';
// import Pagenotfound from './components/Pagenotfound.jsx';
// import Adminlogin from './components/Adminlogin.jsx';
// import Adminhome from './components/Adminhome.jsx';

// const App=()=>{
//     return(
//         <>
//         <h1>App component is runing</h1>
//         <Link to='/'>Home</Link>
//         <Link to='/about'>About</Link>
//         <Link to='/contact'>Contact</Link>
//         <Link to='/service/Java'>Services</Link>
//         <Link to ='/*'>Pagenotfound</Link>

//         <Routes>
//            <Route path='/' element={<Home/>}/> 
//            <Route path='/about' element={<About/>}/> 
//            <Route path='/contact' element={<Contact/>}/> 
//            <Route path='/service/:fname' element={<Services/>}/> 
//            <Route path='/adminlogin' element={<Adminlogin/>}/> 
//            <Route path='/adminhome/:uname' element={<Adminhome/>}/> 
//            <Route path='/*' element={<Pagenotfound/>}/>

//         </Routes>
//         </>
//     )
// }
// export default App;


import React from "react";
import { Link,Routes,Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Adiminhome from './components/Adminhome';
import Adminlogin from './components/Adminlogin';
import Pagenotfound from './components/Pagenotfound';

const App=()=>{
  return(
    <>
    <h1>App component is runing</h1>
   <Link to='/'>Home</Link>
   <Link to='/about'>About</Link>
   <Link to='/contact'>Contact</Link>
   <Link to='/services/Java'>Services</Link>
   <Link to='/pagenotfound'>Pagenotfound</Link>

   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/services/:fname/' element={<Services/>} />
    <Route path='/adminhome/:uname' element={<Adiminhome/>} />
    <Route path='/adminlogin' element={<Adminlogin/>} />
    <Route path='/pagenotfound' element={<Pagenotfound/>} />

   </Routes>
 
    </>
  )
}
export default App;