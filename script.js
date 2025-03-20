// Function to fetch a random quote
function fetchQuote() {
    // Fetch a random quote from the API
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        // Get the quote and author from the response
        const quoteText = data.content;
        const author = data.author;
  
        // Display the quote and author on the page
        document.getElementById('quote').textContent = `"${quoteText}" - ${author}`;
      })
      .catch(error => {
        // If there’s an error, show a default message
        document.getElementById('quote').textContent = 'Sorry, could not fetch a quote.';
        console.error('Error fetching quote:', error);
      });
  }
  