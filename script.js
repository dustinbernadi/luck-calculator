const submitButton = document.getElementById("luckBtn");

submitButton.onclick = function () {
  luck = Math.floor(Math.random() * 100) + 1;
  let userName = document.getElementById("luckInput").value;

  if (luck <= 60) {
    const unluckyLetter =
      "To bad " +
      userName +
      ", your luck is " +
      luck +
      "%, don't gambling for today";
    document.getElementById("luckResult").innerHTML = unluckyLetter;
    document.getElementById("luckResult").style.color = "red";
  } else {
    const luckyLetter =
      "congratulation " +
      userName +
      ", your luck is " +
      luck +
      "%, what a great start for today";
    document.getElementById("luckResult").innerHTML = luckyLetter;
    document.getElementById("luckResult").style.color = "green";
  }
};
