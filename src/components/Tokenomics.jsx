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
  <div>
    <div className='row'>
      <div className='col-12'>
      <h1 className='text-center pt-5'> Total Supply: 100 Billion</h1>
      </div>
      <div className='col-sm-12 col-md-6'>
     <div className='card m-5 ' style={{backgroundColor:"transparent", borderColor:"white", borderRadius:"20px"}}>
      <div className='card-title text-center py-3'> <h3 style={{color:'#FADC51'}}>Buy Tax</h3> </div>
      <div className='card-text' style={{color:"white",}}>
      <p>5% Marketing</p> 
      <p>2% Development</p> 
      <p>1% LP</p> 
      <p>2% Reflection</p> 
      </div>

     </div>
      
      </div>
      <div className='col-sm-12 col-md-6 '>
      <div className='card m-5' style={{backgroundColor:"transparent", borderColor:"white", borderRadius:"20px"}}>
      <div className='card-title text-center py-3'> <h3 style={{color:'#FADC51'}}>Sell Tax</h3></div>
      <div className='card-text' style={{color:"white"}}>
      <p>7% Marketing</p> 
      <p>2% Development</p> 
      <p>2% LP</p> 
      <p>3% Reflection</p> 
     
      </div>

     </div>
      
      </div>
        </div>
    </div>
  </div>
 
 </div>
  </div>
 
    );
}

export default Tokenomics;