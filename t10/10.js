

const target = document.getElementById('target');
const form = document.querySelector('form');
const fname = document.querySelector('input[name=fName]');
const lname = document.querySelector('input[name=lName]');
const p = document.querySelector('p');

form.addEventListener('submit', function(evt) {

    evt.preventDefault();
    p.innerText = `Your name is ${fname.value} ${lname.value}`;
    target.textContent = `${firstName} ${lastName}`;
});