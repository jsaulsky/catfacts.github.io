// Identify HTML elements
const shuffleButton = document.getElementById('shuffle');
let factText = document.getElementById('factText');


shuffleButton.onclick = function randomFact(){
    let randomItem = myArray[Math.floor(Math.random()*myArray.length)];
    factText.innerHTML = randomItem;
}

const myArray = [
    "A house cat’s genome is 95.6 percent tiger",
    "Cats are believed to be the only mammals who don’t taste sweetness",
    "Cats are supposed to have 18 toes (five toes on each front paw; four toes on each back paw)",
    "Cats can jump up to six times their length.",
    "Cats have nearly twice the amount of neurons in their cerebral cortex as dogs.",
    "Cats use their long tails to balance themselves when they’re jumping or walking along narrow ledges.",
    "Though cats can notice the fast movements of their prey, it often seems to them that slow-moving objects are actually stagnant.",
    "Some cats are ambidextrous, but 40 percent are either left- or right-pawed.",
    "Cats can spend up to a third of their waking hours grooming.",
    "It turns out that Abraham Lincoln was a crazy cat president! He had four cats that lived in the White House with him.",
    "Stubbs, a 17-year-old orange tabby cat, is mayor of the historic district of Talkeetna, Alaska.",
    "A cat’s learning style is about the same as a 2- to 3-year-old child.",
    "A group of kittens is called a “kindle.”",
    "A house cat could beat superstar runner Usain Bolt in the 200 meter dash.",
    "Cats’ claws all curve downward, which means that they can’t climb down trees head-first."
  ];
  
  let randomItem = myArray[Math.floor(Math.random()*myArray.length)];