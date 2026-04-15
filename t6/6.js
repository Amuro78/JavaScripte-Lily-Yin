
const button = document.querySelector('button');

function popup(evt){
  alert( evt.currentTarget.tagName + ' was clicked');
}

button.addEventListener('click', popup);