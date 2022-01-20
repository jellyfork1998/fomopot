import React from "react";
import "../css/howtobuycss.css";
import howtobuy from "../img/how2buy.png";

function Howtobuy() {
const linkadd="https://medium.com/stakingbits/setting-up-metamask-for-binance-smart-chain-bsc-921d9a2625fd#:~:text=Setup%20MetaMask%20to%20connect%20to,Network%20Name%3A%20BSC%20Mainnet"

  return (
    <div className="container-fluid py-5" style={{marginLeft:"auto",marginRight:"auto"}}>
    <div>
    <img className="howtobuyposition reveal fade-right" src={howtobuy} />
    </div>
      

      <div className="my-5 " >
        <div
          className="card item-card card-block card-info reveal fade-left  ms-auto me-auto text-center py-5 text-white "
          style={{
            borderRadius: "30px",
            backgroundImage: "linear-gradient(180deg, #667eea, #764ba2)",
            //backgroundColor: "#693594",
            borderColor: "#FADC51",
            // backgroundColor:"black",
            // borderColor:"white",
            borderWidth: "5px",
          }}
        >
          <div className="card-text my-5">
            <h6>STEP 1</h6>
            <p>
              Install Trust Wallet or Metamask Open your Google Chrome or
              Firefox and visit <a style={{textDecoration:"none",color:"white"}} href={linkadd} target="_blank" ><span style={{backgroundColor:"#693594",borderRadius:"10px", paddingLeft:"10px",paddingRight:"10px"}}>Metamask.io.</span> </a>  Download the Metamask Chrome
              extention and setup a wallet. On mobile? Get Metamask's app for
              Iphone or Android
            </p>
            <h6>STEP 2</h6>
            <p>Purchase BNB on an Exchange. Transfer BNB to your MetaMask or TrustWallet.
            </p>
            <h6>STEP 3</h6>
            <p>Add Binance Smart Chain to Metamask. Follow the instructions of this link.
            </p>
            <h6>STEP 4</h6>
            <p>Visit PancakeSwap.Finance and click connect wallet. Copy the Fomo Pot contract address below, set your slippage and swap your tokens.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Howtobuy;
