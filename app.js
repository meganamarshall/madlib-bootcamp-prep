const presentTenseVerb = document.getElementById('present-tense-verb');
const adjectiveOne = document.getElementById('adjective-one');
const nounOne = document.getElementById('noun-one');
const pastTenseVerb = document.getElementById('past-tense-verb');
const adjectiveTwo = document.getElementById('adjective-two');
const pastTenseVerbTwo = document.getElementById('past-tense-two');
const direction = document.getElementById('direction');
const number = document.getElementById('number');

const spanOne = document.getElementById('span-one');
const spanTwo = document.getElementById('span-two');
const spanThree = document.getElementById('span-three');
const spanFour = document.getElementById('span-four');
const spanFive = document.getElementById('span-five');
const spanSix = document.getElementById('span-six');
const spanSeven = document.getElementById('span-seven');
const spanEight = document.getElementById('span-eight');

function makeMadLib() {

  spanOne.textContent = presentTenseVerb.value;
  spanTwo.textContent = adjectiveOne.value;
  spanThree.textContent = nounOne.value;
  spanFour.textContent = pastTenseVerb.value;
  spanFive.textContent = adjectiveTwo.value;
  spanSix.textContent = pastTenseVerbTwo.value;
  spanSeven.textContent = direction.value;
  spanEight.textContent = number.value;
  
}
