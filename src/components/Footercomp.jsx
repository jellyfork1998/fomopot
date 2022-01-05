import React from 'react';
import footerimg from "../img/fomocaption.png";

import '../css/homepagecss.css';
import Socialfollow from "../components/Socialfollow"


function Footercomp(){
    return (
            
            <div className="container-fluid " style={{marginLeft:"auto",marginRight:"auto",backgroundColor:"black" }}>
            <div className="row justify-content-center">
                <div className="col-xl-12 text-center">
                <img  src={footerimg} style={{width:"30%",marginTop:"100px"}}/>
                <Socialfollow />
                </div>
               

            </div>
            </div>
            
           
          
    );
}

export default Footercomp;