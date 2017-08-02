/**
 * Created by Computer on 30.07.2017.
 */
//Масштабирует тело
function windowSize() {
    client_w=document.body.clientWidth;
    client_h=document.body.clientHeight;

    var allPages= document.getElementsByClassName("textWindow");
    for(i=0; i<allPages.length; i++){
        allPages[i].style.width=client_w-100+"px";
    }
}
//Кликает на первую кнопку
function autoClickMenu() {
/*
    var allMenuButtons= document.getElementsByTagName("a");
    allMenuButtons[0].className="active";
    allMenuButtons[0].click();
    */
}
function checkMenuButton(x) {
    str=x.id+"Window";

    str=document.getElementById(str);

    var arr = document.getElementsByClassName("textWindow");
    for (i = 0; i < arr.length; i++) {
        arr[i].style.display="none";
    }

    if(str!=null) {
        str.style.display = "block";
    }
}


function messageLink() {
    var window=document.getElementsByClassName("textWindow");
    for(i=0; i<window.length; i++){
        window[i].display="none";
    }
    var messageWindow=document.getElementById("messages");
    messageWindow.firstElementChild.click();
}
function statusLink() {
    var window=document.getElementsByClassName("textWindow");
    for(i=0; i<window.length; i++){
        window[i].display="none";
    }
    var messageWindow=document.getElementById("status");
    messageWindow.firstElementChild.click();
    
}
function searchTypeObj() {
    var window=document.getElementsByClassName("textWindow");
    for(i=0; i<window.length; i++){
        window[i].display="none";
    }
    var messageWindow=document.getElementById("typeObjects");
    messageWindow.firstElementChild.click();
}
function modeObj() {
    var window=document.getElementsByClassName("textWindow");
    for(i=0; i<window.length; i++){
        window[i].display="none";
    }
    var messageWindow=document.getElementById("modeObjects");
    messageWindow.firstElementChild.click();
}

function createUrl(x) {
    var myUrl = "";
    myUrl = "?button=" + x.id;
    history.pushState(null, null, myUrl )
   
}
function get_url_var() {
    var tmp = new Array();
    var tmp2 = new Array();
    var param = new Array();

    var get = location.search;
    if (get != '') {
        tmp = (get.substr(1)).split('?');
        for (var i = 0; i < tmp.length; i++) {
            tmp2 = tmp[i].split('=');
            var smth=document.getElementById(tmp2[1]);
            var father=smth.parentNode;
            var grandFather=father.parentNode;
            grandFather.className="active";
           grandFather.click();
            document.getElementById(tmp2[1]).className="active";
            document.getElementById(tmp2[1]).click();
        }

    }
    else { document.getElementById("changeLog").click(); }
}