// ##################################################################
// ##################################################################

const quotes = [
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { quote: "Get busy living or get busy dying.", author: "Stephen King" },
    { quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { quote: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
    { quote: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
    { quote: "May you live all the days of your life.", author: "Jonathan Swift" },
    { quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { quote: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" }
];

// ##################################################################
// ##################################################################

const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");
const todayQuote=quotes[arraylength(quotes)]


console.log(todayQuote)

quote.innerText=todayQuote.quote
author.innerText=todayQuote.author

// ##################################################################
// ##################################################################

function arraylength(str){
return Math.floor(Math.random()*str.length)
}
    