var Menu = document.getElementById('MyMenu');
var titleMenu = Menu.querySelector('.NameMenu');

titleMenu.onclick = function() {
   Menu.classList.toggle('open');
};

titleMenu.onmouseover = function() {
   Menu.classList.toggle('open2');
};

titleMenu.onmouseout = function() {
   Menu.classList.remove('open2');
};
var table = document.getElementById('MenuList');

var selectedli;

table.onmouseover = function(event) {
  var nowTarget = event.target;
  if (nowTarget.tagName != 'LI') {
    return;
  }
  console.log(event.target);
  highlight(event.target);
};

function highlight(node) {
  if (selectedli) {
    selectedli.classList.remove('highlight');
  }
  selectedli = node;
  selectedli.classList.add('highlight');
}
