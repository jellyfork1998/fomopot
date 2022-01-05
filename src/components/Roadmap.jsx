import React from 'react'
import '../css/roadmapcss.css'
import roadmappng from "../img/roadmap.png"


function Roadmap(){
    return (
        
             <div className="container-fluid " style={{marginLeft:"auto",marginRight:"auto"}}>
            <img className="roadmapposition reveal fade-left" src={roadmappng}/>
             </div>
         
    );
}

export default Roadmap;