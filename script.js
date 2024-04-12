let mybutton = document.getElementById("gototop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20|| document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




// JavaScript code to filter cards based on category

// Get all cards
const cards = document.querySelectorAll('.card');

// Function to show or hide cards based on category
function filterCards(category) {
    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block'; // Show the card
        } else {
            card.style.display = 'none'; // Hide the card
        }
    });
}

// Get all filter items
const filterItems = document.querySelectorAll('.filter-item');

// Add click event listener to each filter item
filterItems.forEach(item => {
    item.addEventListener('click', () => {
        const category = item.getAttribute('data-filter');
        filterCards(category); // Call the filterCards function with the selected category
    });
});


// Function to filter cards based on search input
function search() {
  var input, filter, cards, card, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  cards = document.getElementsByClassName("card");
  
  for (i = 0; i < cards.length; i++) {
      card = cards[i];
      txtValue = card.textContent || card.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          card.style.display = "";
      } else {
          card.style.display = "none";
      }
  }
}

