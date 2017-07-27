$(document).ready(function(jQuery){

   $("li:has(ul.dropdown)").addClass("dropdownLi")
   $("li.dropdownLi > a").click(function(eventObject){return false})
$(function() {
	$("a").bind('click',function() {
		var _this = $(this);

_this.toggleClass('selected', 5);
_this.next().toggleClass('dropdown', 500);

   $("a").not(_this).each(function() {
    $(this).next().addClass('dropdown', 500);
	  $(this).removeClass('selected', 5);
});
});
});
});
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
