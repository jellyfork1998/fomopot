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
import Certicimg from "../src/img/certic.png";
import "./css/gencss.css";




function App() {



  return (
   <div>
    
     
       
    <section id= "home" className="homesec">
    <Navbar />
      
     <Homecenter 
      img={fomocaption}
      yellowtop={Ytimg}
      yellowbottom={Ybimg}
      certic={Certicimg}
      txt="FOMO Pot is a community driven token on the binance smart chain which grows and multiplies in your wallet just  by holding." 
    />
{/* 
<Knowfounder />

<Token />
<Howtobuy />
<Roadmap /> */}

    </section>

    
       

      <section id="kyf"  className="kfsec">
      
      <Knowfounder />
       
      </section>

    <section id="tok" >
    
    <Token />
    
    </section>

    <section id="howto" className="howtobuysec">
    <Howtobuy />
    </section>

    <section id="roadmap" className="roadmapsec">
    
    <Roadmap />
   
     
    </section>
  
   

   <footer>
   <Ftcomp  />
   </footer>
   
     
    </div>
    
  );
}

export default App;
