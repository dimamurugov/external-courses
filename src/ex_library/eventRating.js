function onClickRating(event) {
    var target = event.target;

     if (target.tagName !== 'P') return;
    
     if (target.className !== 'rated') { 
      upPaintOver(target); 
      return; 
      } 
      
      if (target.className === 'rated') { 
      paintOver(target) 
      } 
      
} 
function upPaintOver(target) { 
        target.parentNode.childNodes.forEach(elem => {
              elem.classList.remove('rated');
        });  
        target.classList.add('rated');
} 
function paintOver(target) { 
        target.classList.remove('rated'); 
}