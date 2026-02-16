// document.getElementById("btn").addEventListener("click", function(){
//     alert("Simple calculator")
// })

const buttons = ["x", 'AC', '%', '/']
let calcButtons = "";
for (let i= 0 ; i < buttons.length; i++){
    calcButtons += 
    ` <li id="btnlist" class="border mx-4 p-3">
            <button>${buttons[i]}</button>
        </li>
    `      
}
document.getElementById("btnlist").innerHTML = calcButtons;

let numButtons = "";
for(let i = 0; i < 10; i++){
numButtons +=
 ` <li id="numlist" class="border mx-4 p-4 m-2">
            <button>${i}</button>
        </li>
    ` 
}
document.getElementById("numlist").innerHTML = numButtons;

const actions = [
    {
    subtract : "-",
    add : "+"
}]
// document.getElementById("btnlists").innerHTML = calcButton.map((index)=>(
//     <li class="border mx-4" key={index}>
//            <button>x</button>
//            </li>
// ))
// join
// ;

const calculate = function (){
let num = "";
num 

    return 
}