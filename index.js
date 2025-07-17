// --- State management ---
// Store the user's selected rating (starts as null)
let selectedRating = null;

// --- DOM element selection ---
// Get the rating card (initial view)
const ratingCard = document.querySelector('.rate-us-card');
// Get the thank you card (hidden initially)
const thankYouCard = document.querySelector('.thanks-card');
// Get all rating buttons (1-5)
const ratingButtons = document.querySelectorAll('.rate');
// Get the submit button
const submitButton = document.querySelector('.submit-button');
// Get the element to display the selected rating in thank you card
const ratingsComment = document.querySelector('.ratings-comment');

// --- Rating selection handler ---
// When a rating button is clicked:
function handleRatingSelection(event) {
  // Get the clicked button and its rating value
  const clickedButton = event.target;
  const rating = parseInt(clickedButton.dataset.rating);

  // Remove 'selected' class from all buttons
  ratingButtons.forEach(btn => btn.classList.remove('selected'));

  // Add 'selected' class to the clicked button
  clickedButton.classList.add('selected');

  // Update the selected rating state
  selectedRating = rating;

  // Enable the submit button visually and functionally
  submitButton.disabled = false;
  submitButton.classList.add('enabled');
}

// --- Submit handler ---
// When the submit button is clicked:
function handleSubmit() {
  // If no rating is selected, alert the user
  if (selectedRating === null) {
    alert('Please select a rating first!');
    return;
  }

  // Update the thank you card with the selected rating
  ratingsComment.textContent = `You selected ${selectedRating} out of 5`;

  // Hide the rating card and show the thank you card
  ratingCard.style.display = 'none';
  thankYouCard.style.display = 'flex';
}

// --- Event listeners ---
// Add click event to each rating button for selection
ratingButtons.forEach(button => {
  button.addEventListener('click', handleRatingSelection);
});

// Add click event to submit button for submission
submitButton.addEventListener('click', handleSubmit);

// --- Optional: Add hover effects for rating buttons ---
ratingButtons.forEach(button => {
  button.addEventListener('mouseenter', function() {
    if (!this.classList.contains('selected')) {
      this.classList.add('hovered');
    }
  });
  button.addEventListener('mouseleave', function() {
    this.classList.remove('hovered');
  });
});

// --- Initial state setup ---
// Show the rating card and hide the thank you card on page load
ratingCard.style.display = 'flex';
thankYouCard.style.display = 'none';
// Disable the submit button until a rating is selected
submitButton.disabled = true;
