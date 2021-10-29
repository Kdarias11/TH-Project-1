/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {  
    quote:'Live as if you were to die tomorrow. Learn as if you were to live forever',
    source:'-Mahatma Gandi',
    citation:'',
    year:''

  },
  {
    quote:'That which does no kill us makes us stronger.',
    source:'-Friedrich Nietzche',
    citation:'Twightlight of the Idols',
    year:'1888'
  },  
  {
    quote:'Do what you can, with what you have, where you are.',
    source:'-Theodore Roosevelt',
    citation:'Speach at Havard',
    year:'1905'

  },
  {
    quote:'If opportunity does not knock, build a door. ',
    source:'-Milton Berle',
    citation:'One Door Closes, Another Door Opens',
    year:'1995'

  },
  {
    quote:'Strive not to be success, but rather to be of value',
    source:'-Albert Einstein',
    citation:'LIFE Magazine',
    year:'1955'

  },
  {
    quote:'Do not let what you cannot do interfere with what you can do.',
    source:'-John Wooden',
    citation:'',
    citation:'',

  },
  {
    quote:'I havent failed. I have just found 10,000 ways that it wont work.',
    source:'-Thomas Edison',
    citation:'His Life and Iventions',
    year:'1910'

  },
  {
    quote:'Believe and act as if it were impossible to fail.',
    source:'-Charles Kettering',
    citation:'',
    year:''

  },
  {
    quote:'Whoever is happy will make others happy too.',
    source:'Anne Frank',
    citation:'The Diary of a Young Girl',
    year:'1947'

  },
  {
    quote:'Change your thoughts and you will cahnge the world',
    source:'Norman Vincent',
    citation:'The Power of Positive Thinking',
    year:'1952'

  }
  
]

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length))
  return quotes[quoteNumber];
  
}

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);