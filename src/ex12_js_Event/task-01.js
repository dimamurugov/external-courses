var FirstElem = document.getElementById('ListOne');
var NameElem = FirstElem.querySelector('.NameList');


NameElem.onclick = function() {
   FirstElem.classList.toggle('open');
};
