const guest = [
    "Jay Gatsby", "Nick Carraway", "Daisy Buchanan", "Tom Buchanan", "Myrtle Wilson", "Jordan Baker", "Meyer Wolfsheim", "George Wilson"
];


/* const btn1 = document.querySelector("#button1");
btn1.onclick = function() {
    let nameToCheck = document.getElementById("userName").value;
    if (guest.includes(nameToCheck)) {
        alert(`benvenuto ${nameToCheck}`)
    } else {
        alert(`spiacente, ${nameToCheck} non è sulla lista`)
    }
} */

function nameToCheck() {  
    let userName = document.getElementById("userName").value;
    if (guest.includes(userName)) {
        alert(`benvenuto ${userName}`)
    } else {
        alert(`spiacente, ${userName} non è sulla lista`)
    }  
}

document.querySelector('#button1').addEventListener('click', nameToCheck);