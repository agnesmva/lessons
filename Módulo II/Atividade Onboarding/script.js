const switchBtn = document.getElementById("switchBtn");
const lampadaOn = document.getElementById("on")
const lampadaOff = document.getElementById("off")
const corpo = document.getElementById("corpo")
const texto = document.getElementById("texto")
switchBtn.addEventListener("change", () => {
  // Do something when the switch is toggled
  if (switchBtn.checked) {
    lampadaOn.style.display = "block";
    lampadaOff.style.display = "none";
    corpo.style.backgroundColor = 'white'; 
    texto.style.color = 'black';
  } else {
    lampadaOff.style.display = "block";
    lampadaOn.style.display = "none";
    corpo.style.backgroundColor = 'black';
    texto.style.color = 'white';
  }
})