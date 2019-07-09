const presentVerbInput = document.getElementById('present-tense-verb');
const adjOneInput = document.getElementById('adjective-one');
const nounOneInput = document.getElementById('noun-one');
const pastVerbInput = document.getElementById('past-tense-verb');
const adjTwoInput = document.getElementById('adjective-two');
const pastVerbTwoInput = document.getElementById('past-tense-two');
const numberInput = document.getElementById('number');
const adjThreeInput = document.getElementById('adjective-three');

const presentVerbSpan = document.getElementById('present-verb-span');
const adjOneSpan = document.getElementById('adj-one-span');
const nounOneSpan = document.getElementById('noun-one-span');
const pastVerbSpan = document.getElementById('past-verb-span');
const adjTwoSpan = document.getElementById('adj-two-span');
const pastVerbTwoSpan = document.getElementById('past-verb-two-span');
const numberSpan = document.getElementById('number-span');
const adjThreeSpan = document.getElementById('adj-three-span');

function makeMadLib() {

  presentVerbSpan.textContent = presentVerbInput.value;
  adjOneSpan.textContent = adjOneInput.value;
  nounOneSpan.textContent = nounOneInput.value;
  pastVerbSpan.textContent = pastVerbInput.value;
  adjTwoSpan.textContent = adjTwoInput.value;
  pastVerbTwoSpan.textContent = pastVerbTwoInput.value;
  numberSpan.textContent = numberInput.value;
  adjThreeSpan.textContent = adjThreeInput.value;

}
