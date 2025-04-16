const countDownElement = document.getElementById("countDown");
const resetValueElement = document.getElementById("resetValue");
let startCount = 0;
let intervalID;

const startTimer = () => {
  intervalID = setInterval(() => {
    countDownElement.innerText = startCount++;
  }, 1000);
};

const resetTimer = () => {
  startCount = 0;
  countDownElement.innerText = startCount;
  clearInterval(intervalID);
};

const stopTimer = () => {
  clearInterval(intervalID);
};

const showStopValue = () => {
  const newPara = document.createElement("p");
  newPara.innerText = `⌚ The stop time is ${countDownElement.innerText}`;
  resetValueElement.append(newPara);
};

const clearTimeValue = () => {
  resetValueElement.innerHTML = "";
};

document.querySelector(".start_btn").addEventListener("click", startTimer);

document.querySelector(".reset_btn").addEventListener("click", resetTimer);

document.querySelector(".stop_btn").addEventListener("click", stopTimer);

document.querySelector(".time_btn").addEventListener("click", showStopValue);

document.querySelector(".clear_btn").addEventListener("click", clearTimeValue);
