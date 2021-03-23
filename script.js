var quotes = ["Don't be so gloomy. After all it's not that awful."];
quotes[1] =
  "All strangers to the place and none of them could speak the same language. Except a sort of smattering of German.";
quotes[2] =
  "Free of income tax, old man. Free of income tax - the only way you can save money nowaday";
quotes[3] =
  "Nobody thinks in terms of human beings. Governments don't. Why should we?";
quotes[4] =
  "Oh, Holly, you and I aren't heroes. The world doesn't make any heroes outside of your stories.";
quotes[5] =
  "Italy for 30 years under the Borgias they had warfare, terror, murder, and bloodshed, but they produced Michelangelo, Leonardo da Vinci, and the Renaissance.";
quotes[6] =
  "In Switzerland they had brotherly love - they had 500 years of democracy and peace, and what did that produce? The cuckoo clock.";
quotes[7] =
  "Vienna doesn't really look any worse than a lot of other European cities. Bombed about a bit.";
quotes[8] =
  "I'll meet you any place, any time, and when we do meet old man, it's you I want to see, not the police.";
quotes[9] = "HUNTED...By a thousand men! Haunted...By a lovely girl!";
quotes[10] = "Best friend I ever had. Sounds like a cheap novelette!";

function newQuote() {
  var myQuote = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteSection").innerHTML = quotes[myQuote];
}
