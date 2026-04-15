'use strict';
const names = ['John', 'Paul', 'Jones'];
const target = document.getElementById('target');
let html = '<ul>';
for (let i = 0; i < names.length; i++) {
  html += '<li>' + names[i] + '</li>';
}
html += '</ul>';
target.innerHTML = html;