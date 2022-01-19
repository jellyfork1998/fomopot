import React, {useState} from "react";
import "../css/homepagecss.css";
import copy from "copy-to-clipboard"; 
import gifimg from "../img/Fomopot_Stickers.gif";



function Homecenter(props) {
  
    const [copyText, setCopyText] = useState("Copy");
  
    // const handleCopyText = () => {
    //    setCopyText("0x000000000000000000");
    // } 
    
    const copyToClipboard = () => {
       copy("0x000000000000000000");
       setCopyText("Copied");
       setTimeout(()=>{
        setCopyText("Copy");

       },1000)
       
      // alert(`You have copied 0x000000000000000000`);
    }

  return (
    <div  className="container-fluid text-center">
     
      <div className="homecen text-center">
        <img className="homesec-yt" src={props.yellowtop} />
        <img className="homesec-yb" src={props.yellowbottom} />

        <img className="fomosize" src={props.img} />

        <h5 className="text-white" style={{ fontSize: "1.6em" }}>
          {props.txt}
        </h5>
        <img className="fomosticker mb-4" src={gifimg} />

        {/* <div className="row mt-5 align-items-center">
          <div className="col-xl-4">
            <h5
              className="text-white"
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              Contract Address
            </h5>
          </div>
          <div className="col-xl-5 ">
            <a type="button" id="contractadd" className="text-white  btn btn-outline-warning cadd">
              0x000000000000000000
            </a>
          </div>

          <div className="col-xl-2 ">
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
        </div> */}

        <div className="row mt-5 ">
          <div className="col-xl-6 mb-3 mb-sm-3 ms-auto me-auto">
            <a
              type="button"
              className="w-50 px-3 teleg"
              href="https://t.me/FomoPot"
              style={{
                textDecoration: "none",
                color:"black"
                  }}
            >
              {/* Dapp{" "} */}
              Join Telegram
            </a>
          </div>

          <div className="col-xl-12 mb-3 mb-sm-3 ms-auto me-auto ">
          <a href="https://www.certik.com/projects/fomopot">
        <img   className="certimg" src={props.certic} style={{paddingRight:"80px"}} alt="An image"/>
      </a>
          
           
          </div>

          {/* <div className="col-xl-6">
            <a
              type="button"
              className="text-white w-50 px-3 "
              style={{
                backgroundColor: "#F9BF0E",
                fontSize: "1.5em",
                textDecoration: "none",
                borderRadius: "20px",
              }}
            >
              Chart{" "}
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Homecenter;
