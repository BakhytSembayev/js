   function chek(){
    let n = document.getElementById('number').value;
    if (n % 2 ==0){
        let r = document.getElementById('result');
        r.innerHTML = ("У Вас четное число")
    } 
    else{
        let r = document.getElementById('result');
        r.innerHTML = ("Ваше число нечетное")
    }     
}
/**
 * 
 * 
 */