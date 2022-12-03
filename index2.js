
function replaceTxt() {
    let element = document.getElementById("demo");
    let name = "после наших курсов = 87 баллов";
    
    element.innerHTML = name+"";
}
function show_result() {
    let element2 = document.getElementById("logic");
    let logic_result = 47;
    element2.innerHTML = logic_result+"";
    
    let element3 = document.getElementById("math");
    let math_result = 40;
    element3.innerHTML = math_result+"";

let element4 = document.getElementById("sum");
    const total=logic_result+math_result;
    element4.innerHTML = total;
}

function year(){
    var data = prompt("В каком году Вы родились");
console.log(data);
let sum2 =(100-(2022-data))*12; 
    alert("Вам осталось_"+ sum2+"_месяцев_"+"до 100 лет");
}



