// Get references to various HTML elements using their IDs 
const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote-text')
const authorText = document.getElementById('author')
const whatsappBtn = document.getElementById('whatsapp-btn')
const twitterBtn = document.getElementById('twitter-btn')
const mailBtn = document.getElementById('gmail-btn')
const newQuoteBtn = document.getElementById('new-quote-btn')

let apiQuotes = [];

// Function to Show new Quote
function newQuotes() {
    // Pick a random quote from apiQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

    // check if 'author' filed is 'null' and replace it with 'anonymous'
    if (!quote.author) {
        authorText.textContent = 'anonymous';
    } else {
        authorText.textContent = quote.author;
    }

    // check Quote length to determine styling
    if (quote.text.length > 50) {
        quoteText.classList.add('long-quote-style');
    } else {
        quoteText.classList.remove('long-quote-style');
    }
    // Set Quote, Hide Loader
    quoteText.textContent = quote.text;
}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl,'_blank');
}

// Whatsapp Quote
function whatsAppQuote() {
    const whatsappUrl = `https://wa.me/?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(whatsappUrl, '_blank');
}

// Share on Facebook
function shareOnMail() {
    const subject = encodeURIComponent('Quote to Share');
    const body = encodeURIComponent(`${quoteText.textContent} - ${authorText.textContent}`);
    const emailUrl = `mailto:?subject=${subject}&body=${body}`;
    window.location.href = emailUrl;
}

// Event Listeners
newQuoteBtn.addEventListener('click',newQuotes);
twitterBtn.addEventListener('click',tweetQuote);
whatsappBtn.addEventListener('click',whatsAppQuote);
mailBtn.addEventListener('click',shareOnMail);

// on Load
newQuotes();


// In Case Getting Quotes from API using Fetch Request

// async function getQuotes() {
//     const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';

//     try{
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuotes();
//     }catch(error){
//             // catch error here
//     }
// }
//getQuotes();

