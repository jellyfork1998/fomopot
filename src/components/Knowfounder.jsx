import React from 'react'
import '../css/knowyourfoundercss.css'
import kf from "../img/utilities.png"



function Knowfounder(){
    return (
  
 <div className="container-fluid kycard">
 <div style={{marginTop:"5px"}}>
 <img className="kyfposition reveal fade-right" src={kf}/>
 </div>
 
  <div className='row mt-5'>
    <div className="col-md-11 col-sm-6 item text-left mx-auto">
      <div className="card my-3 mx-auto item-card card-block card-info reveal fade-left "
       style={{
            borderRadius: "30px",
            backgroundImage: "linear-gradient(180deg, #667eea, #764ba2)",
            //backgroundColor: "#693594",
            borderColor: "#FADC51",
            borderWidth: "5px",
            
          }}
      >
      
    {/* <img className="image-cropper" src={founder} alt="Photo of sunset"/> */}
        {/* <h4 className="item-card-title mt-3 mb-3">Ayush-Founder/CEO</h4> */}
        <p className="card-text mt-5">The utilities that have been planned include :</p>
        <p className="card-text" >* Staking Platform</p>
        <p className="card-text"> * Stakeable NFT's</p>
        <p className="card-text">* NFT minting website</p>
        <p className="card-text" >* LaunchPad</p>
        <p className="card-text">* NFT Marketplace</p>
        <p className="card-text">* Play to earn game</p>

<p className="card-text" >"We will build more utilities in the near future as we grow but it will not deviate us from our main utility which is 
Community satisfaction and profit making utility"</p> 
  </div>
    </div>
    </div>
 
       
  </div>
  



          );
}

export default Knowfounder;