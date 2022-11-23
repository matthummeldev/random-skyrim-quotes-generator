function generateRandomNumber(num) {
  // Gets # from 0 -> num - 1
  return Math.floor(Math.random() * num);
}

const getQuotes = {
  // theQuotes: ["star", "moon", "sun", "comet"],
  theQuotes: [
    '<blockquote>If it’s the war you’re referring to, I’m on the side of Whiterun. No doubt General Tullius and his friends in the empire will tell you that I owe them my loyalty, and perhaps I do.</blockquote><span> – Jarl Balgruuf the Greater</span>',
    '<blockquote>Hey, you. You’re finally awake. You were trying to cross the border, right? Walked right into that imperial ambush, same as us, and that thief over there.</blockquote><span> – Ralof</span>',
    '<blockquote>I used to be an adventurer like you, then I took an arrow to the knee.</blockquote><span> – Whiterun Guard</span>',
    '<blockquote>Do you get to the cloud district very often? Oh, what am I saying, of course, you don’t.</blockquote><span>– Nazeem</span>',
    '<blockquote>So, you wish to master the arcane arts.</blockquote><span> – Farengar Secret-Fire</span>',
  ],
};

// Store the 'wisdom' in an array
let storeQuotes = [];

// Iterate over the object
for (let prop in getQuotes) {
  let optionIndex = generateRandomNumber(getQuotes[prop].length);

  // use the object's properties to customize the message being added to personalWisdom
  switch (prop) {
    case "theQuotes":
      storeQuotes.push(`"${getQuotes[prop][optionIndex]}"`);
      break;
    default:
      storeQuotes.push("");
  }
}

function formatQuotes(quote) {
  // Add some ASCII here?
  // Add in more symbols to the array? like emojies or what not?
  const formatted = storeQuotes.join("\n");
  // document.body.innerHTML = formatted;
  document.write (
    '<div class="wrapper"><div class="hero"><div class="hero-content">'
  )
  document.write(
    `<h1>Your Skyrim Quote of the Day.</h1>`
  );
  document.write(`${formatted}`);
  
  docoument.write('</div></div>/div>');

  console.log(formatted);
}

formatQuotes(storeQuotes);
