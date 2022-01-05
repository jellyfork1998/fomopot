import React from 'react'
import '../css/Tokenomicscss.css'
import tokenheadpng from "../img/tokenomics.png"
import tobeannounce from "../img/tobeannounced.png"


function Tokenomics(){
    return (
     
  <div className="container-fluid" style={{marginLeft:"auto",marginRight:"auto"}}>
  
 <img className="tokenheadposition reveal fade-right" src={tokenheadpng}/>
 
  
  <img className='tobeannouncePosition' src={tobeannounce}/>
  
</div>
      
    );
}

export default Tokenomics;