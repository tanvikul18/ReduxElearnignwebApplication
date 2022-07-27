import React, { useEffect } from 'react'
import Header from './Header';
import Navigator from './Navigator';
import {_gModuleTitle} from '../API/navigation_data.js'
export default function InitialiseModule(props) {
   const setSimTitle=()=>{
    if (typeof _gModuleTitle !== "undefined") {
      document.getElementById('titleheader').innerHTML = _gModuleTitle;        
       document.title = _gModuleTitle;
   }
   }
    //var preloader = '<div class="preloader positionAbsolute" style="z-index: 3000;position: absolute !important;left: 0px;top: 0px;width:100%;height: 100%;border-width: 0px;opacity: 0.68;background: #FFF;display:block;" role="alert" aria-live="polite" showcontainer="False" defaultvisibility="Visible" ><img src="images/status.gif" class="k-element-image div-edit-properties preloaderimg" fname="preloader" tabindex=6 alt="Loading..." aria-label="Loading..." style="width: 30px; height: 30px;position: absolute;left: 50%;top: 50%;"><div class="preloaderText" style="left: 49%;top: 55%; position: absolute;">Loading...</div></div>';
    useEffect(()=>{
      setSimTitle()
    },[])
   
  return (
    <div>
      <Header></Header>
      {/* <Navigator></Navigator> */}
     
    </div>
  )
}
