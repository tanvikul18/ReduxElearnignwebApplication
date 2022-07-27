import React from 'react'
import layout from '../CSS/layout.css' 
import font from '../CSS/font.css'
import menubutton from '../CSS/menubuttonlink.css';
import Footer from './Footer';
import { _gAbtSim } from '../HTML_Pages/AboutSimPage';
export default function Header() {
    const handleMenu = (event)=>{
    var levelPageId = document.getElementById('appmenulist').getAttribute('data-id');    
    console.log("u r in menu")
    var jsonObj = {};
    jsonObj.isMenuVisit = true;
    jsonObj.pageId = levelPageId;
   
    event.preventDefault();
    event.stopPropagation();
    return false;
    }
    const OpenAbtSim = (event)=>{
    
   
    document.getElementById('infoDetails').firstChild.innerHTML = _gAbtSim;
    document.getElementById('infoDetails').style.display = 'inline-block';
    event.preventDefault();
    }
    const closeAbtSim = (event)=>{
        console.log('u r in')
              document.getElementById('infoDetails').style.display='none';
              event.stopPropagation();
              event.preventDefault();
    }
  return (
  <>
            <div id="skip-to-main">
            <a href="#main-con-id">Skip to main content</a>
        </div>
        <div id="wrapper" className="mxwidth">
           
            <header className="header">
                <div id="header-content" className="mxwidth">
                    <div className="container-fluid moduleTitle px-0">
                        <div id="header-title">
                            <img className="largeDevice" src="/images/logo.png" alt="Pearson" />
                            <img className="smallDevice" src="/images/pearson-logo-v1.png" alt="Pearson" /> 
                            <h1 id="titleheader" tabindex="-1"></h1>
                            
                        </div>
                    </div>
                    <div className="container-fluid navigation px-0" id="header-progress">
                        <div className="menu_button">
                            <button id="appmenu" onClick={handleMenu} aria-controls="appmenulist" aria-label="Menu" title="Menu" aria-expanded="false">
                                <img src="/images/ico_menu-v1.png" alt="" aria-hidden="true" id="menu-icon-img"/>
                            </button>
                            <ul id="appmenulist" onClick={handleMenu} aria-labelledby="appmenu"></ul>
                            <div className="dummyMenuDiv"></div>
                        </div>
                        <div className="progressBar">
                            <div className="background">
                                <div className="progressForeground ProgressForeGroundColor"></div>
                            </div>
                            <div id="scorediv" className="scoreDiv">
                                <div id="progressInnrDiv">Progress 0%</div>
                            </div>
                        </div>
                        <div className="pageaction">
                            <div className="icon-play">
                                <button type="button" id="pageaction_btn1" aria-label="Play" title="Play"><img src="/images/ico_play-18px-v1.png" alt=""/></button>
                                <button type="button" id="pageaction_btn4" aria-label="Pause" title="Pause" style={{"display":"none"}}><img src="/images/ico_pause-18px-v1.png" alt=""/></button>
                                <button type="button" id="pageaction_btn5" aria-label="Replay" title="Replay" style={{"display":"none"}}><img src="/images/ico_replay-18px-v2.png" alt=""/></button>
                            </div>
                            <div className="transcript-popup">
                                <button type="button" id="pageaction_btn2"  aria-expanded="false" title="Transcript" aria-label="Transcript"><img src="/images/ico_transcript-18px-v1.png" alt=""/></button>
                            </div>
                            <div className="info-icon">
                                <button type="button" id="pageaction_btn3" onClick={OpenAbtSim} aria-expanded="false" title="About This Simulation" aria-label="About This Simulation"><img src="/images/info.png" alt=""/></button>
                            </div>
                        </div>
                    </div>
                </div>
                  <div id="infoDetails">
                    <div className="container1">
                    </div>
                    <div className='adiv'>                      
                        <input type="button" class="btnClose" onClick={closeAbtSim} id="btnaboutsimclose" value="Close" style={{"float": "right"}}/>
                    </div>
                </div>
                <div id="transcriptDetails" style={{"display": "none"}}>
                    <div className="container1">
                    </div>
                    <div className='tdiv'>                        
                        <input type="button" className="btnClose" id="btntranscriptclose" value="Close" style={{"float": "right"}}/>
                    </div>
                </div>  
            </header>

            <main>
               
                <div className="main-content innerWrapper">
                   
                    <div className="px-5 landingpage" id="landingPage">
                        <div className="container pt-4 allContentContainer">
                        </div>
                        <div className="submitFeedbackPopup" role="alert" style={{"display": "none"}}>
                            <div className="feedback_panel">
                                <p className="feedback_text"></p>
                                <p className="feedback_instruction"><em>Click <strong>Next</strong> to continue.</em></p>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <Footer></Footer>
        </div>
    </> 
  )
}
