
let selectedRating = null;
const ratingCard = document.querySelector('.rate-us-card');
const thankYouCard = document.querySelector('.thanks-card');
const ratingButtons = document.querySelectorAll('.rate');
const submitButton = document.querySelector('.submit-button');
const ratingsComment = document.querySelector('.ratings-comment');

function handleRatingSelection(event) {
  const clickedButton = event.target;
  const rating = parseInt(clickedButton.dataset.rating);
  ratingButtons.forEach(btn => btn.classList.remove('selected'));
  clickedButton.classList.add('selected');
  selectedRating = rating;
  submitButton.disabled = false;
  submitButton.classList.add('enabled');
}

function handleSubmit() {
  if (selectedRating === null) {
    alert('Please select a rating first!');
    return;
  }
  ratingsComment.textContent = `You selected ${selectedRating} out of 5`;
  ratingCard.style.display = 'none';
  thankYouCard.style.display = 'flex';
}

ratingButtons.forEach(button => {
  button.addEventListener('click', handleRatingSelection);
});


submitButton.addEventListener('click', handleSubmit);

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

ratingCard.style.display = 'flex';
thankYouCard.style.display = 'none';
submitButton.disabled = true;
