var firstElem = document.getElementById('listOne');
var nameElem = firstElem.querySelector('.nameList');

nameElem.onclick = function() {
   firstElem.classList.toggle('open');
};
