// Page Reminder with random sentence (cards.json) showing

window.addEventListener('load', showRandomSentence);

function showRandomSentence(e) {
  e.preventDefault();

  const xhr = new XMLHttpRequest();
  
  xhr.open('GET', 'cards.json', true);
  
  xhr.onload = function() {
    if(this.status === 200) {
      const sentences = JSON.parse(this.responseText);
      const num = randomNR(1, sentences.length);
      const sentence = sentences[num].value;
      
      document.getElementById('sentence').innerText = sentence;
    } else {
      console.log(`Something went wrong while loading Data from cards.json! Status-code: ${this.status}`);
    }
  }

  xhr.send();
}

// Get a random Nr. between 1 and cards.length
function randomNR(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}