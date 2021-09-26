const prevInput = document.querySelector("#inputField");
const quantityInput = document.querySelector("#quantityField");
const currInput = document.querySelector("#currField");
const message = document.querySelector("#setmessage");
const submitBtn = document.querySelector("#submit-btn");

// Step - Adding Event Listeners
submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  var prev = Number(prevInput.value);
  var curr = Number(currInput.value);
  var qualityNum = Number(quantityInput.value);

  calculateProfitOrLoss(prev, qualityNum, curr);
}

// Step - Calculate profit and Loss
function calculateProfitOrLoss(prev, quantity, curr) {
  // loss condition
  if (prev > curr) {
    let loss = (prev - curr) * quantity;
    let lossPercentage = (loss / (prev * quantity)) * 100;
    message.style.color = "red";
    message.innerHTML = `You loss ${loss.toFixed(
      2
    )} and your loss Percentage is ${lossPercentage.toFixed(2)}%`;
  }
  // profit calculation
  else if (prev < curr) {
    let profit = (curr - prev) * quantity;
    let profitPercentage = (profit / (prev * quantity)) * 100;
    message.style.color = "green";
    message.innerHTML = `You gain total Rs.${profit.toFixed(2)}
     and you profit Percentage is ${profitPercentage.toFixed(2)}%`;
  }
  // No profit, no loss
  else {
    message.style.color = "green";
    message.innerHTML = `No Loss, No Profit !`;
  }
}
