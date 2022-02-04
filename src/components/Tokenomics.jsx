import React, {useState} from 'react'
import '../css/Tokenomicscss.css'
import tokenheadpng from "../img/tokenomics.png"
import tobeannounce from "../img/tobeannounced.png"
import copy from "copy-to-clipboard"; 


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

 
  const [copyText, setCopyText] = useState("Copy");
  
  // const handleCopyText = () => {
  //    setCopyText("0x000000000000000000");
  // } 
  
  const copyToClipboard = () => {
     copy("0x8d5cf97ff6a29e57cb5f4c9e85bbfc7934aa9073");
     setCopyText("Copied");
     setTimeout(()=>{
      setCopyText("Copy");

     },1000)
     
    // alert(`You have copied 0x000000000000000000`);
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

 <div className='d-flex flex-wrap justify-content-center my-3 align-items-center'>
  
          <div className='mx-2 contaddmarg'>
            <h5
              className="text-white"
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              Contract Address
            </h5>
          </div>
          <div className='mx-2 '>
            <a type="button" id="contractadd" className="text-white  btn btn-outline-warning  cadd">
            0x8d5cf97ff6a29e57cb5f4c9e85bbfc7934aa9073
            </a>
          </div>

          <div className='mx-2'>
            <button
              id="copy"
              className="marg"
              style={{
                backgroundColor: "#F9BF0E",
                width: "auto",
                marginRight:'auto',
                marginBottom: "auto",
                textDecoration: "none", fontSize: "1.5em",
                borderRadius:"10px",
                color:"white"
                
              }}
              onClick={copyToClipboard }
             
            >
              {copyText}
            </button>
          </div>
      

</div>
  </div>



     



 </div>
  </div>
 
    );
}

export default Tokenomics;