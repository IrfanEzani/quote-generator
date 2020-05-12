const quoteBtn = document.getElementById('quote-btn')
const quoteContainer = document.getElementById('quote')

quoteBtn.addEventListener('click', () => {
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        getQuote(data)
    })

})

function getQuote(quote) {
  quoteContainer.innerHTML = `
  <div class="main">
    <h3>${quote.content}</h3>
    <p>${quote.author}</p>
  </div>
    <div class="main-img">
      <img src="main.png" alt="dream" height="250">
    </div>
  `;
}
