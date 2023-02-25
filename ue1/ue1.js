function add(){
    let num1 = parseInt(document.getElementById("firstnumber").value); 
    let num2 = parseInt(document.getElementById("secondnumber").value);
    let solution = num1 + num2;
    document.getElementById("solution").innerHTML = solution;
    document.getElementById("history").innerHTML = document.getElementById("history").innerHTML + num1 + '+' + num2 + '=' + solution + '<br>';
}
function substract(){
    let num1 = parseInt(document.getElementById("firstnumber").value); 
    let num2 = parseInt(document.getElementById("secondnumber").value);
    let solution = num1 - num2;
    document.getElementById("solution").innerHTML = solution;
    document.getElementById("history").innerHTML = document.getElementById("history").innerHTML + num1 + '-' + num2 + '=' + solution + '<br>';
}
function multiply(){
    let num1 = parseInt(document.getElementById("firstnumber").value); 
    let num2 = parseInt(document.getElementById("secondnumber").value);
    let solution = num1 * num2;
    document.getElementById("solution").innerHTML = solution;
    document.getElementById("history").innerHTML = document.getElementById("history").innerHTML + num1 + '*' + num2 + '=' + solution + '<br>';
}
function divide(){
    let num1 = parseInt(document.getElementById("firstnumber").value); 
    let num2 = parseInt(document.getElementById("secondnumber").value);
    let solution = num1 / num2;
    document.getElementById("solution").innerHTML = solution;
    document.getElementById("history").innerHTML = document.getElementById("history").innerHTML + num1 + '/' + num2 + '=' + solution + '<br>';
}