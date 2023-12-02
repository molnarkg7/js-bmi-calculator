function calculate() {
  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);
  let result = document.querySelector("#result");

  if (height === "" || isNaN(height)) alert("Please enter your height!");
  else if (weight === "" || isNaN(weight)) alert("Please enter your weight!");
  else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) result.innerHTML = `Under Weight : <span>${bmi}</span>`;
    else if (bmi >= 18.6 && bmi < 24.9)
      result.innerHTML = `Normal : <span>${bmi}</span>`;
    else result.innerHTML = `Over Weight : <span>${bmi}</span>`;
  }
}

function reset() {
  window.location.reload();
}

let calculateBtn = document.querySelector(".calculate");
let resetBtn = document.querySelector(".reset");

resetBtn.addEventListener("click", reset);
calculateBtn.addEventListener("click", calculate);
