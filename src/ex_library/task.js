var request = new XMLHttpRequest();
request.open('GET', 'https://rsu-library-api.herokuapp.com/books', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);
    var myJSON = data;
    console.log(myJSON)
    showBooks(data);
  } else {
    console.log("не загрузилось");
  }
};
request.send();

function showBooks(jsonObj) {
  for (var i=0;i<jsonObj.length; i++) {
    var book = jsonObj[i];
    var myDiv = document.createElement('div');
    var athor = document.createElement('h6');
    var image = document.createElement('img');
    var nameBook = document.createElement('h4');
    var allStar = document.createElement('span');
    allStar.className = "topStar";
    allStar.id = "starid";


    for (var j = 0; j < 5; j++) {
      var star = document.createElement('p');
      star.textContent = '☆';
      allStar.appendChild(star);
    }



    nameBook.textContent = jsonObj[i].title;
    image.src = jsonObj[i].image_url;
    athor.textContent = 'by ' + jsonObj[i].author.firstName + ' ' + jsonObj[i].author.lastName;

    myDiv.appendChild(image);
    myDiv.appendChild(nameBook);
    myDiv.appendChild(athor);
    myDiv.appendChild(allStar);
    content.appendChild(myDiv);
  }
}

var topStar = document.getElementById('starid');
var selectedStar;

 topStar.onmouseover = function(event) {
  var nowTarget = event.target;
  if (nowTarget.tagName != 'P') {
    return;
  }
  console.log(event.target);
  // highlight(event.target);
};
