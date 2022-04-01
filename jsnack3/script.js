function summNumber() {
  let check = 0;
  let sum = 0;

  while (check == 0) {
    let setNumber = document.getElementById("summNumb").value;
    if (setNumber > 999 && setNumber < 10000) {
      check = 1;
      while (setNumber) {
        sum += setNumber % 10;
        setNumber = Math.floor(setNumber / 10);
      }
    }
    else {
      alert("si prega di inserire un numero di 4 cifre");
      break;
      
      
    }
  }
  alert("la somma dei numeri è: " + sum);
}

document.querySelector("#button3").addEventListener("click", summNumber);
