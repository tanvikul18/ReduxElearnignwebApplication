import React, { useEffect } from 'react'
import { _gNavData,pageHtml, _gStartPageId } from '../API/navigation_data'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import InitialiseModule from './InitialiseModule';
import { useLocation } from 'react-router-dom';
import { getNextPageId } from './Actions';
let gRandomData=[],gVisitedPages={};
let pageVisiteSeq  = 0 ,  selOption = '',iscorrect='';
export default function PageRouting() {
   const {pageId}=useParams();
   const {state} = useLocation();
   const getNPageDataVisitedPages = state;
   const dispatch = useDispatch();
   var _NData = '';
   let _currentPageObj = _gNavData[pageId];
     dispatch(getNextPageId( _currentPageObj.pageId))
     const Get = ()=>{
        return _NData;
     }
     const Set=(_gNavData)=>{
        _NData = _gNavData
     }
     
     const LongestPath= (NodeTree, startNode)=> {
        var paths = [];

        function findAllPaths(startNode, currentCost, optionCost, pathstr) {
            for (var i = 0; i < startNode.options.length; i++) {
                var child = startNode.options[i];
                if (child.NextPgId == null) {
                    paths.push({
                        TotalLength: currentCost,
                        TotalOptionCount: optionCost,
                        Path: pathstr
                    });
                } else {
                    var optCost = startNode.isQuestion == true ? optionCost + 1 : optionCost;
                    findAllPaths(NodeTree[child.NextPgId], currentCost + 1, optCost, pathstr + "-" + child.NextPgId);
                }
            }
            pathstr = "";
        }
        debugger;
        findAllPaths(startNode, 1, 0, startNode.pageId + "");

        function getMax(arr, prop) {
            var max;
            for (var i = 0; i < arr.length; i++) {
                if (!max || parseInt(arr[i][prop]) > parseInt(max[prop]))
                    max = arr[i];
            }
            return max;
        }
        return getMax(paths, 'TotalLength');
    }
   
    /*const AddMenuList=(_currentpageID)=>{
        var curPage = GetCurrentPage();
        curPage.isMenuVisited = true;
        document.getElementById('appmenulist').innerHTML='';
      //  document.getElementById('appmenulist').insertAdjacentHTML('beforeend','<li role="none"><a href="javascript:void(0)" class="menuitem" role="menuitem" tabindex="-1"  data-id="' + tempPageId + '">' + gVisitedPages[tempPageId].PageTitle.trim() + '</a></li>');
      
    }*/
  
     const GetProgressData=()=>{
        var progData = [];
        var visitpage = 0;
        for (var i in _NData) {
            if (_NData[i].IsComplete) {
                visitpage++;
            }
        }
        progData.push(visitpage);
        return visitpage;
     }
  const updateProgressBar = (event)=>{
    debugger;
    var lastpage = "l1p1";
    for (var pageId in gVisitedPages) {
        if (gVisitedPages[pageId].isLastPageVisited) {
            lastpage = pageId;
        }
    }
    var TotalLength = LongestPath(Get(), Get()[lastpage]).TotalLength;
    var progData = GetProgressData();
    var lprog_pecent = (progData / ((TotalLength + progData) - 1) * 100).toFixed(2);
    console.log(lprog_pecent)
    //document.getElementsByClassName('progressForeground').style.width= lprog_pecent + "%";
  
    document.getElementById('progressInnrDiv').innerText="Progress " + Math.round(lprog_pecent) + "%";
    if (lprog_pecent == 100) {
      
        document.getElementById('progressInnrDiv').innerText="Progress 100%";
    }
  }
  const submitQuestionResponse=()=>{
    
        var scoreSet = [0, 3, 5, 1];
        var curPage = _currentPageObj;
    //    var visitedPageObj = GetVisitedPage(curPage.pageId);
       document.getElementById('btnSubmit').classList.add('disabled')
       document.getElementById('option-group').classList.add('disabled')
        
    
        var fdkText, fdkAudio, fdkScore, custNextPgId, cGroupName, checkedOptionArray;
    

            fdkText = selOption.getAttribute("fdkText");
            fdkScore = Number(selOption.attr("qScore"));
        console.log(fdkText + ''+ fdkScore)
            

        
        
     
      
  
  }
  function setOptionIcon(isRsultPage) {
    var getOptions  =document.getElementsByClassName('roleradio'); 
    
    Array.from(getOptions).forEach(function(element) {
        var orgnlSrc = element.children[0].children[0].children[0].getAttribute("orignalsrc");
        var rollSrc = element.children[0].children[0].children[0].getAttribute("rolloversrc");
        if(element.classList.contains('optionselected')){
            element.children[0].children[0].children[0].setAttribute("src", rollSrc);
        }
        else{
            element.children[0].children[0].children[0].setAttribute("src", orgnlSrc);
        }
    });
}

  function QuestionOptionChanged (){
    debugger;
    var getOptions  =document.getElementsByClassName('roleradio');  
    
         selOption = this.getAttribute('opt_id');       
          iscorrect = this.getAttribute('iscorrect');  
        Array.from(getOptions).forEach(element=>element.classList.remove('optionselected'))
       this.classList.add('optionselected');
       setOptionIcon(false)
        document.getElementById('btnSubmit').classList.remove('disabled')
  
  }
    const InitialiseQuestion=()=>{
       var curPage = _currentPageObj;
       var getOptions  =document.getElementsByClassName('roleradio');    
        Array.from(getOptions).forEach(function(element) {
            element.classList.remove('optionselected')
            element.addEventListener('click', QuestionOptionChanged);
        });
        document.getElementById('btnSubmit').addEventListener('click', submitQuestionResponse)
     if (curPage.isQuestionAttempted) {
       
      document.getElementById('btnSubmit').classList.add('disabled')
  
         //initializeQuestionReview();
     } else {
      document.getElementById('btnSubmit').classList.add('disabled')
      document.getElementById('btnSubmit').classList.remove('btn')
      document.getElementById('btnSubmit').classList.remove('btn-primary')
       document.getElementById('linknext').classList.add('disabled')
         //#v1.0 - to handle issue for fast click on next

         document.getElementById('linkprevious').classList.remove('disabled')
     }
    }
    const ShuffleArray=(arr)=>{
        for (
            var j, x, i = arr.length; i; j = parseInt(Math.random() * i),
            x = arr[--i], arr[i] = arr[j], arr[j] = x
        );
        return arr;
    }
    
    const GetStartPageVisted = (_pageId)=>{
        if (!gVisitedPages[_pageId]) {
            for (var j in gVisitedPages) {
                gVisitedPages[j].isLastPageVisited = false;
            }
            
           
            gVisitedPages[_pageId] = {
                isVisited: true,
                IsComplete: true,
                isLastPageVisited: true,
                pageVisiteSeq: pageVisiteSeq
            };

            for (var j in gVisitedPages) {
                _NData[j].isVisited = true;
                _NData[j].IsComplete = true;
                _NData[j].isMenuVisited = true;
                _NData[j].PageTitle = gVisitedPages[j].PageTitle;
                _NData[j].prevPageId = gVisitedPages[j].prevPageId;
            }
            pageVisiteSeq++;
        }
    }
    const LoadPage=(_pageId)=>{
        debugger;
     
        let _gDatapageHtml = pageHtml[_pageId];
       console.log("NExtPageID" +_pageId);
       document.getElementById('landingPage').innerHTML = ''
       document.getElementById('landingPage').innerHTML = _gDatapageHtml._htmlData;
      
       GetStartPageVisted(_gStartPageId);
        if (!gVisitedPages[_pageId]) {
        for (var j in gVisitedPages) {
            gVisitedPages[j].isLastPageVisited = false;
        }
        
       
        gVisitedPages[_pageId] = {
            isVisited: true,
            IsComplete: true,
            isLastPageVisited: true,
            pageVisiteSeq: pageVisiteSeq
        };
        for (var j in gVisitedPages) {
            _NData[j].isVisited = true;
            _NData[j].IsComplete = true;
            _NData[j].isMenuVisited = true;
            _NData[j].PageTitle = gVisitedPages[j].PageTitle;
            _NData[j].prevPageId = gVisitedPages[j].prevPageId;
        }
        pageVisiteSeq++;
    }
       //  AddMenuList();
       updateProgressBar();
       debugger;
       if(_currentPageObj.isQuestion!== undefined && _currentPageObj.isQuestion){
          InitialiseQuestion();
       }
        document.getElementById('linkprevious').classList.remove('disabled')

        if(_currentPageObj.isLastPage){
            document.getElementById('linknext').classList.add('disabled')
           document.getElementById('pageaction_btn1').classList.add('disabled')
        }
        
     } 
     
     useEffect(()=>{
        console.log("u r in page routing")
        Set(_gNavData);
        LoadPage(pageId)
        
     },[])
  return (
     <div>
      <InitialiseModule></InitialiseModule>
     </div>
  )
}
