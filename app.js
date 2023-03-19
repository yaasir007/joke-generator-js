const jokes = [
  "To whoever stole my copy of Microsoft Office, I will find you. You have my Word!",
  "How do celebrities stay cool? They have many fans.",
  "What did the fisherman say to the magician? Pick a cod, any cod.",
  "Did you know that milk is the fastest liquid on earth? It's pasteurized before you can even see it.",
  "What does a baby computer call his father? Data.",
  "Why can't a leopard hide? Because he's always spotted.",
  "How many tickles does it take to make an octopus laugh? 10 tickles.",
  "What do you call an illegally parked frog? Toad.",
  "Why are spiders so smart? They can find everything on the web.",
  "It's inappropriate to make a dad joke if you're not a dad. It's a faux pa.",
  "Did you hear about the circus fire? It was in tents.",
  "Can February March? No, but April May!",
  "How do lawyers say goodbye? We'll be suing ya!",
  "Wanna hear a joke about paper? Never mind—it's tearable.",
  "What's the best way to watch a fly fishing tournament? Live stream.",
  "I could tell a joke about pizza, but it's a little cheesy.",
  "Every time I take my dog to the park, the ducks try to bite him. That's what I get for buying a pure bread dog.",
  "Why is Peter Pan always flying? Because he Neverlands.",
  "Which state has the most streets? Rhode Island.",
  "What do you call 26 letters that went for a swim? Alphawetical.",
  "What’s the name of a very polite, European body of water? Merci.",
  "Why was the color green notoriously single? It was always so jaded.",
  "I used to hate facial hair, but then it grew on me.",
  "I want to make a brief joke, but it’s a little cheesy.",
  "Why did the coach go to the bank? To get his quarterback.",
  "What did the flowers do when the bride walked down the aisle? They rose.",
  "It takes guts to be an organ donor.",
  "What does Rockin Robin do when she's bored? Tweet.",
  "I lost my job at the bank on my first day. A woman asked me to check her balance, so I pushed her over.",
  "How do you row a canoe filled with puppies? Bring out the doggy paddle.",
  "Singing in the shower is fun until you get soap in your mouth. Then it becomes a soap opera.",
  "Why were the utensils stuck together? They were spooning.",
];

const jokeContent = document.querySelector(".joke-content");
const nextBtn = document.querySelector(".joke-btn");

let start = true;
let counter = 0;

if (start) {
  jokeContent.innerText = jokes[counter];
}

nextBtn.addEventListener('click', () => {
  counter++;
  if (counter === jokes.length) {
    counter = 0;
    jokeContent.innerText = jokes[counter];
  } else {
    jokeContent.innerText = jokes[counter];
  }
})
