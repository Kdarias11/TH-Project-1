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

var quotes = [
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
    year:'',

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
//Generates a random number

function getRandomQuote() {
  let randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
  
}







function printQuote() {
  // 1. Create a variable that calls the getRandomQuote() 
  // function
  let currentQuote = getRandomQuote();
  // 2. Create a variable that initiates your HTML string with 
  // the first two <p></p> elements, their classNames, 
  // and the quote and source properties, but leave off 
  // the second closing `</p>` tag for now
  let quoteParagraph = "<p class='quote'>"  + currentQuote.quote + "</p>"
  let sourceParagraph = "<p class='source'>" + currentQuote.source;
  // 3. Use an if statement to check if the citation property 
  // exists, and if it does, concatenate a <span></span> 
  // element, appropriate className, and citation property 
  // to the HTML string
  
  if (currentQuote.citation) {
    sourceParagraph += "<span class='citation'>" + currentQuote.citation + "</span>"
  }


  // 4. Use an if statement to check of the year property exists, 
  // and if it does, concatenate a <span></span> element, 
  // appropriate className, and year property to the HTML 
  //string
if (currentQuote.year)  {
  sourceParagraph += "<span class='year'>" + currentQuote.date + "</span>";

}

  // 5. After the two if statements, concatenate the closing </p> 
  // tag to the HTML string
  sourceParagraph += "</p>"
  // 6. set the innerHTML of the quote-box div to equal the 
  // complete HTML string
  document.getElementById("qoute-box").innerHTML = quoteParagraph + sourceParagraph;
}
printQuote();




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);