import React from 'react'
import '../css/Tokenomicscss.css'
import tokenheadpng from "../img/tokenomics.png"
import tobeannounce from "../img/tobeannounced.png"


function Tokenomics(){
  const cardStyle={
    backgroundImage: "linear-gradient(180deg, #667eea, #764ba2)",
     color: '#fff',
     marginTop:"150px",
     marginBottom:"150px",
     borderRadius: "30px",
     borderColor: "#FADC51",
     borderWidth: "5px"
     
  }
    return (
     
  <div className="container-fluid" style={{marginLeft:"auto",marginRight:"auto"}}>
  <div>
  <img className="tokenheadposition reveal fade-right" src={tokenheadpng}/>
  </div>

  <div className='mx-auto my-5'>
  <div className=' card mx-auto cardsize ' style={cardStyle}>
 <img className='tobeannouncePosition' src={tobeannounce}/>
 </div>
  </div>
 
 
  
 
  
</div>
      
    );
}

export default Tokenomics;