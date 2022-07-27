import { _gPageHtml } from "../HTML_Pages/274";
import { _gPageHtml1 } from "../HTML_Pages/224";
import { _gPageHtml2 } from "../HTML_Pages/276";
import { _gPageHtml3 } from "../HTML_Pages/278";
import { LPage } from "../HTML_Pages/175";
import { Spage } from "../HTML_Pages/95";
export var _gNavData = {
    "95": { //scr1
        pageId: "95",
        prevPageId: "",
        nextPageId: "274",
        dataurl: "95.html",
        isShowInMenu: true,
        isStartPage: true,
        options: [{
            NextPgId: "274"
        }]
    },
    "274": {
        pageId: "274",
        prevPageId: "95",
        nextPageId: "224",
        dataurl: "274.html",
        isShowInMenu: false,
        options: [{
            NextPgId: "224"
        }]
    },
    "224": {
        pageId: "224",
        prevPageId: "274",
        nextPageId: "276",
        dataurl: "224.html",
        isDecisionPage: true,
        questions: [],
        isQuestion: true,
        isQuestionAttempted: false,
        isCustomNext:true,
        isRandomOpt: true,
        maxScore: 5,
        QuestionType: "radio",
        questionId: 1,
        options: [{
            NextPgId: "276"
        }]
    },

    "276": {
        pageId: "276",
        prevPageId: "224",
        nextPageId: "278",
        dataurl: "276.html",
        questions: [],
        isShowInMenu: false,
        options: [{
            NextPgId: "278"
        }]
    },
    "278": {
        pageId: "278",
        prevPageId: "276",
        nextPageId: "175",
        dataurl: "278.html",
        questions: [],
        isMMPage:true,
        isShowInMenu: true,
        options: [{
            NextPgId: "175"
        }]
    },

    "175": { //Result
        pageId: "175",
        prevPageId: "",
        nextPageId: "",
        dataurl: "175.html",
        isLastPage: true,
        isShowInMenu: true,
        options: [{
            NextPgId: null
        }]
    }
}
export var pageHtml = {
    "95":{
        _htmlData: Spage
    },
    "274" : {
      _htmlData:  _gPageHtml
    },
    "224" : {
        _htmlData:_gPageHtml1
    },
    "276" :{
        _htmlData:_gPageHtml2
    },
    "278" :{
        _htmlData:_gPageHtml3
    }   ,
    "175" :{
        _htmlData: LPage
    }
    
}
export var _gRandomPgId=(_currentPageObject)=>{
    var pageId = '';
     var _nxtPgId='';
    if (_currentPageObject.pageId == "224") {
        var _ctrlId = _currentPageObject.StudSelOption;
        switch (_ctrlId) {
            case 'option1':
            case 'option2':
                _nxtPgId = "276";
                break;
            case 'option3':
            case 'option4':
                _nxtPgId = "278";
                break;
        }
        pageId = _nxtPgId;
    } 
    return pageId;
}
export var _gModuleTitle = "Service Marketing"
export var _gStartPageId = "95";
export var _gAboutSimPageId = "104";
export var _gTranscriptPageId = "101";
export var _gObjDefDefaultTargetLink = "qualsims/marketing/service-marketing/armstrong14";
export var _gObjDefDefaultUser = "armstrong14";
export var _gObjDefCompId = "setLearningObjective";


