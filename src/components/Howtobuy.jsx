import React from "react";
import "../css/howtobuycss.css";
import howtobuy from "../img/how2buy.png";

function Howtobuy() {
  return (
    <div className="container-fluid" style={{marginLeft:"auto",marginRight:"auto"}}>
      <img className="howtobuyposition reveal fade-right" src={howtobuy} />

      <div style={{ marginTop: "25px" }}>
        <div
          className="card  ms-auto me-auto text-center py-2 mt-3 text-white card-info reveal fade-left"
          style={{
            borderRadius: "30px",
            backgroundColor: "#693594",
            marginTop: "150px",
            borderColor: "#FADC51",
            borderWidth: "5px",
          }}
        >
          <div className="card-text my-5">
            <h6>STEP 1</h6>
            <p>
              Install Trust Wallet or Metamask Open your Google Chrome or
              Firefox and visit Metamask.io. Download the Metamask Chrome
              extention and setup a wallet. On mobile? Get Metamask's app for
              Iphone or Android
            </p>
            <h6>STEP 2</h6>
            <p>
              Install Trust Wallet or Metamask Open your Google Chrome or
              Firefox and visit Metamask.io. Download the Metamask Chrome
              extention and setup a wallet. On mobile? Get Metamask's app for
              Iphone or Android
            </p>
            <h6>STEP 3</h6>
            <p>
              Install Trust Wallet or Metamask Open your Google Chrome or
              Firefox and visit Metamask.io. Download the Metamask Chrome
              extention and setup a wallet. On mobile? Get Metamask's app for
              Iphone or Android
            </p>
            <h6>STEP 4</h6>
            <p>
              Install Trust Wallet or Metamask Open your Google Chrome or
              Firefox and visit Metamask.io. Download the Metamask Chrome
              extention and setup a wallet. On mobile? Get Metamask's app for
              Iphone or Android
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Howtobuy;
