 // NavBar
 let CE = document.getElementById("CE"),
     C = document.getElementById("C"),
     del = document.getElementById("Del");

 // Operators
 let plus = document.getElementById("plus"),
     minus = document.getElementById("minus"),
     multi = document.getElementById("multi"),
     dot = document.getElementById("dot"),
     plusOrMinus = document.getElementById("plusOrMinus"),
     division = document.getElementById("division"),
     equals = document.getElementById("equals");

 // Number's
 let seven = document.getElementById("7"),
     eight = document.getElementById("8"),
     nine = document.getElementById("9"),
     four = document.getElementById("4"),
     five = document.getElementById("5"),
     six = document.getElementById("6"),
     one = document.getElementById("1"),
     two = document.getElementById("2"),
     three = document.getElementById("3"),
     zero = document.getElementById("0");

 // Output
 let output = document.getElementById("output");

 // Get all numbers
 let numberArr = document.getElementsByClassName("btn-number");

 // Get all Operators
 let operatorsArr = document.getElementsByClassName("btn-oporator");

 // Keep track of the values
 let displayValue = "";
 let currentValue;
 let stringArr = [];

 // clear the output display
 C.addEventListener("click", function () {
     displayValue = "";
     currentValue = undefined;
     stringArr = [];
     output.innerText = "0";
 });

 // backspace
 del.addEventListener("click", function () {

     let lengthOfdesplayValue = displayValue.length;
     displayValue = displayValue.slice(0, lengthOfdesplayValue - 1);
     output.innerText = displayValue;
     if (displayValue === "") {
         output.innerText = "0";
     }
 });

 let updateOutput = (event) => {

     let btnText = event.target.innerText;
     displayValue += btnText;
     output.innerHTML = displayValue;


 }

 let performOperation = (event) => {

     let btnOp = event.target.innerText;


     switch (btnOp) {

         case "+":
             currentValue = displayValue;
             displayValue = "";
             output.innerText = "+";
             stringArr.push(currentValue);
             stringArr.push("+")
             break;

         case "-":
             currentValue = displayValue;
             displayValue = "";
             output.innerText = "-";
             stringArr.push(currentValue);
             stringArr.push("-")
             break;

         case "×":
             currentValue = displayValue;
             displayValue = "";
             output.innerText = "x";
             stringArr.push(currentValue);
             stringArr.push("*")
             break;

         case "÷":
             currentValue = displayValue;
             displayValue = "";
             output.innerText = "÷";
             stringArr.push(currentValue);
             stringArr.push("/")
             break;

         case "=":
             stringArr.push(displayValue);
             let evaluation = eval(stringArr.join(" "));
             displayValue = evaluation + "";
             output.innerText = displayValue;
             stringArr = [];
             break;

         default:
             break;
     }

 }


 for (let i = 0; i < numberArr.length; ++i) {
     numberArr[i].addEventListener("click", updateOutput)
 }

 for (let i = 0; i < operatorsArr.length; ++i) {
     operatorsArr[i].addEventListener("click", performOperation)
 }
