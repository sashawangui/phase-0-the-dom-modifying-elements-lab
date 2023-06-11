// Write your code here!

let body=document.body
let main = document.getElementById("main");

body.removeChild(main);

let newHeader =document.createElement('h1');
newHeader.id="victory";
newHeader.innerHTML="Natalie is the champion"
body.appendChild(newHeader)