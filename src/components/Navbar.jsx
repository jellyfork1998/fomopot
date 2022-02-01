import React , {useState} from 'react';
import fomologo from "../img/fomologo.png";
import '../css/navbarcss.css';




function NavbarOne(){

  const chandra =()=>{
    window.location.href="#home"
    
  }
return (

  
<nav id="navid" className="navbar navbar-expand-xl navbar-light  fixed-top">
  <div className="container-fluid mx-5 mt-3">
    {/* <a className="navbar-brand ms-5 "  href="#" >Navbar</a> */}
    <img src={fomologo} onClick={chandra}   className="fomologo"></img>
    <button className="navbar-toggler"style={{background:"#FAC200"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" ></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link text-white active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item ${nav-it}">
          <a className="nav-link text-white" href="#kyf">Utilities</a>
        </li>
        <li className="nav-item ${nav-it}">
          <a className="nav-link text-white" href="#tok">Tokenomics</a>
        </li>
        <li className="nav-item ${nav-it}">
          <a className="nav-link text-white" href="#howto">How To Buy</a>
        </li>
        
        <li className="nav-item ${nav-it}">
          <a className="nav-link text-white" href="#roadmap">Roadmap</a>
        </li>
       
       

        <a  type='button' href='https://pancakeswap.finance/swap?outputCurrency=0x8d5cf97ff6a29e57cb5f4c9e85bbfc7934aa9073' className="text-white px-3 my-2 mx-2" style={{ backgroundColor:'#F9BF0E', borderRadius:'25px',  fontSize:"1.5em", textDecoration:'none' }}>
            Buy Now
        </a>
       
       
      </ul>
 
    </div>
  </div>
</nav>
);


}

export default NavbarOne;