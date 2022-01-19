import React, { Component, useState } from 'react';
import '../css/roadmapcss.css';
import roadmappng from "../img/roadmap.png";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default class Roadmap extends Component {

  

    render() {

      const cardStyle={
        backgroundImage: "linear-gradient(180deg, #667eea, #764ba2)",
         color: '#fff'

      }
        return (
               
<div>
  <div >
   <img className="roadmapposition reveal fade-left" src={roadmappng}/>
   </div>
   <div>
  <VerticalTimeline >
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    //contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // contentStyle={{ background: "transparent", color: '#fff' }}
    contentStyle={ cardStyle }
    
    contentArrowStyle={{ borderRight: '15px solid  #693594)' }}
    // date="2011 - present"
     iconStyle={{background: '#693594', color: '#fff' }}
   icon={<was/>}
    
    
  >
    <h3 className="vertical-timeline-element-title text-black">Phase 1</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
    <div style={{textAlign: this.props.someBoolean ? "center" : "left"}}> 
     
 

 
    <p>•	Visualise FOMO Pot.</p>
    <p>•	Formation of a dedicated team who believes in the long term vision.</p>
    <p>•	Website launch.</p>
    <p>•	Private sale.</p>
    
    
   
    </div>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={ cardStyle }
    contentArrowStyle={{ borderRight: '15px solid  #693594' }}
    // date="2010 - 2011"
    iconStyle={{ background: '#693594', color: '#fff' }}
    icon={<was />}
  >
    <h3 className="vertical-timeline-element-title text-black">Phase 2</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
    <div style={{textAlign: this.props.someBoolean ? "center" : "left"}}>

    <p>•	Certik audit.</p>
    <p>•	Intense Marketing campaign.</p>
    <p>•	Whitelisted Presale.</p>
    

    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={ cardStyle }
    contentArrowStyle={{ borderRight: '15px solid  #693594)' }}
    // date="2008 - 2010"
    iconStyle={{ background: '#693594', color: '#fff' }}
    icon={<was />}
  >

    <h3 className="vertical-timeline-element-title text-black">Phase 3</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4> */}
    <div style={{textAlign: this.props.someBoolean ? "center" : "left"}}>
    <p>•	Pancakeswap listing.</p>
    <p>•	Coinmarketcap listing.</p>
    <p>•	Coingecko listing.</p>
    <p>•	First Lottery.</p>

</div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={ cardStyle }
    contentArrowStyle={{ borderRight: '15px solid  #693594' }}
    // date="2006 - 2008"
    iconStyle={{ background: '#693594', color: '#fff' }}
    icon={<was/>}
  >
    <h3 className="vertical-timeline-element-title text-black">Phase 4</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
    <div style={{textAlign: this.props.someBoolean ? "center" : "left"}}>
   <p> •	NFT Launch.</p>
  <p>•	Exchange listing.</p>
 <p>•	Community giveaways.</p>
  <p>•	Intense post launch marketing campaign.</p>
  </div>

      
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={ cardStyle }
    contentArrowStyle={{ borderRight: '15px solid  #693594' }}
    // date="2006 - 2008"
    iconStyle={{ background: '#693594', color: '#fff' }}
    icon={<was/>}
  >
    <h3 className="vertical-timeline-element-title text-black">Phase 5</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
    <div style={{textAlign: this.props.someBoolean ? "center" : "left"}}>
    
  
  <p>•  Staking Platform.</p>
  <p>•  NFT Marketplace.</p>
  <p>•  Play To Earn Game.</p>
  
 
  </div>

      
  </VerticalTimelineElement>

  
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<use />}
  />
</VerticalTimeline>
</div>
</div>
              
          
        )
    }
}