var request = new XMLHttpRequest();
request.open('GET', 'https://rsu-library-api.herokuapp.com/books', true);
var data = [];
request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    data = JSON.parse(request.responseText);
    var myJSON = data;
    console.log(myJSON);
    showBooks(data);
  } else {
    console.log("не загрузилось");
  }
};
request.send();
var flag = true;

function showBooks(jsonObj) {
  for (var i=0; i < jsonObj.length; i++) {
    var book = jsonObj[i];
    var myDiv = document.createElement('div');
    var athor = document.createElement('h6');
    var image = document.createElement('img');
    var nameBook = document.createElement('h4');
    var allStar = document.createElement('span');
    allStar.className = "topStar";
    myDiv.setAttribute('data_rating', book.rating );
    for (var j = 0; j < 5; j++) {
      var star = document.createElement('p');
      allStar.appendChild(star);
      if (5 - j === book.rating) {
        star.classList.add("rated");
      };
    };
    
    nameBook.textContent = jsonObj[i].title;
    image.src = jsonObj[i].image_url;
    athor.textContent = 'by ' + jsonObj[i].author.firstName + ' ' + jsonObj[i].author.lastName;

    myDiv.appendChild(image);
    myDiv.appendChild(nameBook);
    myDiv.appendChild(athor);
    myDiv.appendChild(allStar);
    content.appendChild(myDiv);

    allStar.addEventListener('click', onClickRating);

    var filterBooks = document.getElementById('filterBooks');
    filterBooks.addEventListener('click', onClickFilter);
  }   
}