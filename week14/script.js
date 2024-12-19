document.addEventListener('DOMContentLoaded', () => {
    const ratingFilter = document.getElementById('rating-filter');
    const reviews = document.querySelectorAll('.review');
  
    ratingFilter.addEventListener('change', () => {
      const selectedRating = ratingFilter.value;
      reviews.forEach(review => {
        const ratingElement = review.querySelector('.review-details p:nth-child(4)');
        const ratingText = ratingElement.textContent.split(':')[1].trim();
        const rating = parseFloat(ratingText);
        if (selectedRating === 'all' || rating >= parseFloat(selectedRating)) {
          review.style.display = 'block';
        } else {
          review.style.display = 'none';
        }
      });
    });
  });