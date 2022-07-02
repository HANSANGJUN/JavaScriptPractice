const quotes = [
  {
  quote: "No pain, no gain",
  author: "whoever",
  },
  {
  quote: "No sweat, no sweet",
  author: "whoever",
  },
  {
  quote: "Life is unfair, get used to it",
  author: "whoever",
  },
  {
  quote: "If you can’t make it good, at least make it look good",
  author: "whoever",
  },
  {
  quote: "If you ate coffee, start work",
  author: "whoever",
  },
  {
  quote:
  "Thoughts are the shadows of our feelings - always darker, emptier, and simpler",
  author: "whoever",
  },
  {
  quote:
  "To live is to suffer, to survive is to find some meaning in the suffering",
  author: "whoever",
  },
  {
  quote: "There are no facts, only interpretations",
  author: "whoever",
  },
  {
  quote: "We forge the chains we wear in life",
  author: "whoever",
  },
  {
  quote: "Man exists only as far as he knows it",
  author: "whoever",
  },
  ];

  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");


const quoteRandom = quotes[Math.floor(Math.random() * quotes.length)];


 quote.innerText = quoteRandom.quote
 author.innerText = quoteRandom.author
