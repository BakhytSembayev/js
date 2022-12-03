    
 
	 function all_even(){
        let evn = prompt() 
	    for (let n=0;n<=evn;n+=2){
	        
            let v = document.getElementById('out'); 
            v.innerHTML+=`${n} `};
          } 
         
       function add(a, b) {
        return a + b
    }

    function buttonPlusClick() {
        let addResult = add(+x.value, +y.value)
        result.value = addResult
    }

    plus.onclick = buttonPlusClick

    function sub(a, b) {
        return a - b
    }

    function buttonMinusClick() {
        let subResult = sub(x.value, y.value)
        result.value = subResult
    }

    minus.onclick = buttonMinusClick

    function mul(a, b) {
        return a * b
    }
    function buttonMultipClick() {
        let multResult = mul(x.value, y.value)
        result.value = multResult
    }
   multip.onclick = buttonMultipClick

   function dev(a, b) {
    return a / b
}
function buttonDivisClick() {
    let divResult = dev(x.value, y.value)
    result.value = divResult
}
divis.onclick = buttonDivisClick

  