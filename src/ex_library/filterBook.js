var filterContainer = document.querySelector('.categories');

filterContainer.addEventListener('click', onClickFilter);

function onClickFilter(event) {
   var target = event.target;
    if (target.tagName !== 'SPAN') return;
    content.innerHTML = '';

    var current_filter = target.getAttribute('data-filter');

   switch (current_filter) {
      case 'all':

            showBooks(data);
         
         break;
      case 'recent':

               var filterRecent = data.filter( dataBook => dataBook.id > data.length - 5);
               showBooks(filterRecent);
         
         break;
      case 'popular':

               var filterPopular = data.filter( dataBook => dataBook.rating === 5 );
               showBooks(filterPopular);   
         
         break;
      case 'free':
   
               var filterFree = data.filter( dataBook => dataBook.coast === 0);
               showBooks(filterFree);
            
         break;
      default:
         break;
      }   
}      
