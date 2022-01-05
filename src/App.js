import React from "react";
import fomocaption from "../src/img/fomocaption.png"
import Homecenter from "./components/Homecenter";
import Roadmap from "./components/Roadmap";
import Navbar from "./components/Navbar";
import Token from "./components/Tokenomics";
import Howtobuy from "./components/Howtobuy";
import Knowfounder from "./components/Knowfounder";
import Ftcomp from "./components/Footercomp";
import Ytimg from "../src/img/yeltop.png";
import Ybimg from "../src/img/yelbottom.png";
import "./css/gencss.css";




function App() {
  return (
   
    <div>
     
    <section className="homesec">
    <Navbar />
     <Homecenter 
      img={fomocaption}
      yellowtop={Ytimg}
      yellowbottom={Ybimg}
      txt="FOMO Pot is a community driven token on the binance smart chain which grows and multiplies in your wallet just  by holding.
We will reward all the holders through reflections in FOMO Pot tokens. Besides that loyal members who continue to hold the tokens will be rewarded via giveaways.
" 
    />
    </section>

    <section id="howto" className="howtobuysec">
    <Howtobuy />
    </section>

    <section id="tok" className="tokensec">
    <Token />
    </section>

   
    <section id="roadmap" className="roadmapsec">
    <Roadmap />
    </section>

    
    <section id="kyf" className="kfsec">
      
    <Knowfounder />
    </section>

   <footer>
   <Ftcomp  />
   </footer>
   
     
    </div>
    
  );
}

export default App;
