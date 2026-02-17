const actionButtons = ["x", "AC", "%", "/", "+", "-"];
const numberbuttons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "="];

const inputField = document.getElementById("inputField");

let currentInput = "";

// creating action buttons
document.getElementById("actionBtns").innerHTML = actionButtons
  .map(
    (btn) =>
      ` <li class="border mx-4 p-3">
            <button class = "action-btn" data-value = ${btn}>${btn}</button>
        </li>
    `,
  )
  .join("");

// creating number buttons
document.getElementById("numberBtns").innerHTML = numberbuttons
  .map(
    (btn) =>
      ` <li class="border mx-4 p-3">
            <button class = "action-btn" data-value = ${btn}>${btn}</button>
        </li>
    `,
  )
  .join("");

// Handling clicks
document.addEventListener("click", (e) => {
  if (!e.target.matches("button")) return;
  const value = e.target.dataset.value;

  if (!value) return;

  if (value === "AC") {
    currentInput = "";
    updateDisplay();
    return;
  }

  if (value === "=") {
    calculate();
    return;
  }

  currentInput += value;
  updateDisplay();
});

function updateDisplay() {
  inputField.textContent = currentInput || 0;
}
function calculate() {
  try {
    currentInput = eval(currentInput).toString();
  } catch {
    currentInput = "Error";
  }

  updateDisplay();
}

// let calcButtons = "";
// for (let i = 0; i < buttons.length; i++) {
//   calcButtons += ` <li class="border mx-4 p-3">
//             <button>${buttons[i]}</button>
//         </li>
//     `;
// }
// document.getElementById("btnlist").innerHTML = calcButtons;

// let numButtons = "";
// for (let i = 0; i < 10; i++) {
//   numButtons += ` <li class="border mx-4 p-4 m-2">
//             <button onclick= ${buttons[i]}>${i}</button>
//         </li>
//     `;
//   //    add + and - on same line
//   buttons.push("+", "-");
// }
// document.getElementById("numlist").innerHTML = numButtons;

// const actions = [
//     {
//     subtract : "-",
//     add : "+",
//     division : "/",
//     multiply : "*"
// }]
// document.getElementById("btnlists").innerHTML = calcButton.map((index)=>(
//     <li class="border mx-4" key={index}>
//            <button>x</button>
//            </li>
// ))
// join
// ;

// function getButtonValue() {
//   buttons[i].addEventlistener("click", () => {
//     buttons[i].value;
//   });
// }

// const calculate = function () {
//   const num = num.value;
//   const subtract = "-";
//   const add = "+";
//   const divide = "?";

//   if (getButtonValue === "x") {
//     num * buttons[i].value;
//   }
//   if (getButtonValue === "/") {
//     num / buttons[i].value;
//   }
//   if (getButtonValue === "+") {
//     num + buttons[i].value;
//   }
//   if (buttons === "C") {
//     clearResult();
//   }

//   function clearResult() {
//     inputField.value = "";
//   }
//   return;
// };
