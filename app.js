const quoteBtn = document.getElementById('quote-btn')
const quoteContainer = document.getElementById('quote')

quoteBtn.addEventListener('click', () => {
  fetch("https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=famous&count=10", {
  	"method": "GET",
  	"headers": {
  		"x-rapidapi-host": "andruxnet-random-famous-quotes.p.rapidapi.com",
  		"x-rapidapi-key": "6e4a5d2c5emsh95545ce37351636p172b39jsn99f7a93c0f78"
  	}
  })
  .then(response => {
  	console.log(response);
  })
  .catch(err => {
  	console.log(err);
  });
})
