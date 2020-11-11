var myInput = document.getElementById("myInput");

myInput.onfocus = function(){

    myInput.setAttribute("data-place",this.getAttribute("placeholder"));

    this.setAttribute("placeholder",'');

}
myInput.onblur = function() {

    myInput.setAttribute("placeholder",this.getAttribute("data-place"));

    this.setAttribute("data-place","");


}