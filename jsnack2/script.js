function readNumbers() {
    const userNumbers = [];
    const inputs = Array.from(document.querySelectorAll('.user-number'));
    inputs.forEach(function(input) {
       if(input.value % 2 !== 0) {
         userNumbers.push(input.value);
       }
    });
    alert(`l'array userNumbers ora contiene: [ ${userNumbers} ]`);
  }

document.querySelector('#button2').addEventListener('click', readNumbers)