// publish page please 
function plus() {
 let n1 = document.getElementById("n1").value;
 let n2 = document.getElementById("n2").value;
 let p = document.getElementById("result")
 p.innerHTML = Number(n1) + Number(n2) ;
}

function minus() {
 let n1 = document.getElementById("n1").value;
 let n2 = document.getElementById("n2").value;
 let p = document.getElementById("result")
 p.innerHTML = n1 - n2 ;
}

function divide() {
 let n1 = document.getElementById("n1").value;
 let n2 = document.getElementById("n2").value;
 let p = document.getElementById("result")
 p.innerHTML = n1 / n2 ;
}

function multiply() {
 let n1 = document.getElementById("n1").value;
 let n2 = document.getElementById("n2").value;
 let p = document.getElementById("result")
 p.innerHTML = n1 * n2 ;
}
