function changeStyle() {
    var element = document.getElementById("mydiv");
    for(let i=100;i<=3000;i+=1) {
        element.style.width =`${i}px`;
        element.style.transition="10000ms";
    }
}
function returnBackStyle() {
   var element2 = document.getElementById("mydiv");
   element2.style.width="100px"
}
function changeColorGray() {
    var element3 = document.getElementById("name1");
    element3.style.backgroundColor='gray';
}
function changeColorGreen() {
    var element4 = document.getElementById("name1");
    element4.style.backgroundColor='green';
}
function returnColor() {
    var element10 = document.getElementById("name1");
    element10.style.backgroundColor='';
}
function changeColorGray2() {
    var element5 = document.getElementById("phonenumber");
    element5.style.backgroundColor='gray';
}
function changeColorGreen2() {
    var element6 = document.getElementById("phonenumber");
    element6.style.backgroundColor='green';
}
function changeColorGray3() {
    var element7 = document.getElementById("email");
    element7.style.backgroundColor='gray';
}
function changeColorGreen3() {
    var element8 = document.getElementById("email");
    element8.style.backgroundColor='green';
}
function changeText() {
    var element9= document.getElementById("button");
    element9.innerHTML="Send";}
