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

    var allMenuButtons= document.getElementsByTagName("a");
    allMenuButtons[0].className="active";
    allMenuButtons[0].click();
    
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

//красит выбранную кнопку в темно-синий
function  changeButtonColor(x) {
   
    x.classList.add("active");
}
