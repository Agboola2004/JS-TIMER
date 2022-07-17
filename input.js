const alert = document.querySelector(".alert");
const button = document.querySelector(".res");

let imin = document.querySelector(".min");
let isec = document.querySelector(".sec");

let nowsec = 00;
let nowmin = 00;

let interval = null;

function timer() {
  if (isec.value == 0) {
    isec.value = 59;
    imin.value--;
  } else {
    isec.value--;
  }
if(isec.value<10){
  isec.value="0" + isec.value
}

  if (imin.value < 0 && isec.value > -1) {
    document.querySelector(".sec").value = "00";
    document.querySelector(".min").value = "00";

     

    alert.style.display = "block";
    clearInterval(interval);
    button.addEventListener("click", function () {
      alert.style.display = "none";
    });
  }
}

document.querySelector(".start").addEventListener("click", function () {
  interval = setInterval(timer, 1000);
});

document.querySelector(".reset").addEventListener("click", function () {
  clearInterval(interval);
  isec.value = 00;
  imin.value = 00;

  document.querySelector(".sec").value = "00";
  document.querySelector(".min").value = "00";
});
