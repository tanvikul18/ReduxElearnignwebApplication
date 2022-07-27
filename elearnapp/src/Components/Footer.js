import React, { useEffect } from 'react'
import{useNavigate} from 'react-router-dom'
import layout from '../CSS/layout.css' 
import font from '../CSS/font.css'
import {_gNavData,_gStartPageId,pageHtml,_gRandomPgId,_gModuleTitle} from '../API/navigation_data.js'
import { Page274 } from '../HTML_Pages/274'
import {Page224} from '../HTML_Pages/224'
import { useDispatch,useSelector } from 'react-redux'
import { getNextPageId } from './Actions'
import PageRouting from './PageRouting'
let _currentPageObject = {};

export default function Footer() {
   const navigate = useNavigate();
   const dispatch = useDispatch();
    let isPrev =false;
   
    
    const getNPageID = useSelector((state)=>state.getNPId)
    _currentPageObject = _gNavData[getNPageID.pageId]
    console.log(getNPageID)
    
    let gVisitedPages ={};
    const startPage=(_gStartPageId)=>{
        console.log("Component loaded")
       
        document.getElementById('linkprevious').classList.add('disabled')
      let  _currentPageId = _gNavData[_gStartPageId];  
        let _gFpageHtml = pageHtml[_gStartPageId];
        console.log(_currentPageId)  
      
          //  updateProgressBar();
            // AddMenuList();
            
            document.getElementById('landingPage').innerHTML = _gFpageHtml._htmlData;
            document.title = _gModuleTitle + " | " 
           
        
      }
    const GetRandomPageId = ()=>{
        var pageId = '';
        if (typeof _gRandomPgId === "function") {
            pageId = _gRandomPgId(_currentPageObject);
        }
        return pageId;
    }
    const handlePrev=(event)=>{
    isPrev = true;   
    navigate(`/pagerouting/${_currentPageObject.prevPageId}`)
    window.location.reload();
    event.stopPropagation();
           return false;  
    }
    const handleNext = (event)=>{
      debugger;
        isPrev = false;   
        if(_currentPageObject === undefined)  { 
            _currentPageObject = _gNavData[_gStartPageId]
            navigate(`/pagerouting/${_currentPageObject.nextPageId}`)
        }
       else
       {
       let prevPgId = _currentPageObject.pageId;
        if (_currentPageObject.isCustomNext != undefined && _currentPageObject.isCustomNext) {
            // if (_currentPageObject.nextPageId == '') {
            //     var _nxtPgID = GetRandomPageId();
            //     _currentPageObject.nextPageId = _nxtPgID;
            //     navigate(`/pagerouting/${_currentPageObject.nextPageId}`)
            // } 
            navigate(`/pagerouting/${_currentPageObject.nextPageId}`)
        } else {
            navigate(`/pagerouting/${_currentPageObject.nextPageId}`)
        }
        
       }
       window.location.reload();
       event.preventDefault();
           event.stopPropagation();
           return false;  
            
    }
    useEffect(()=>{
        startPage(_gStartPageId)
    },[_gStartPageId]) 
   
  return (
    <div>
        
    <footer class="footer">
        <nav>
            <div class="footer-navigation">
                <div class="container">
                    <div class="row">
                        <div class="col-6 col-md-6 col-lg-6">
                            <div class="previous float-right">
                                <button id="linkprevious" onClick={handlePrev}>
                                    <img class="prevImg" src="/images/back-button.png" aria-hidden="true" alt=""/>
                                    <span>Previous</span>
                                </button>
                            </div>
                        </div>
                        <div class="col-6  col-md-6 col-lg-6">
                            <div class="next float-left">
                            
                                <button id="linknext" onClick={handleNext}>
                                
                                    <span>Next</span>
                                    <img class="nextImg" src="/images/next-button.png" aria-hidden="true" alt=""/>
                                    
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </footer>
    </div>
  )
}
