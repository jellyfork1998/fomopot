import React from 'react'
import '../css/knowyourfoundercss.css'
import kf from "../img/utilities.png"
import founder from "../img/utilities.png"


function Knowfounder(){
    return (
  
 <div className="container-fluid kycard">
 <img className="kyfposition reveal fade-right" src={kf}/>
  <div className="row rowkyf">
    <div className="col-md-11 col-sm-6 item text-center mx-auto">
      <div className="card ms-auto me-auto item-card card-block card-info reveal fade-left"
       style={{
            borderRadius: "30px",
            backgroundColor: "#693594",
            borderColor: "#FADC51",
            borderWidth: "5px",
          }}
      >
      
    {/* <img className="image-cropper" src={founder} alt="Photo of sunset"/> */}
        {/* <h4 className="item-card-title mt-3 mb-3">Ayush-Founder/CEO</h4> */}
        <p className="card-text mt-5">"The utilities that have been planned include our own staking platform, Stakable NFT's and NFT minting website, our own launchpad, Play to earn game
and NFT Marketplace. We will build more utilities in the near future as we grow but it will not deviate us from our main utility which is 'Community satisfaction and profit making utility' "</p> 
  </div>
    </div>
    </div>
 
       
  </div>
  



          );
}

export default Knowfounder;