// Page Reminder with random sentence (cards.json) showing
const sentenceEl = document.getElementById('sentence');

window.addEventListener('load', showRandomSentence);

function showRandomSentence(e) {
  e.preventDefault();

  const xhr = new XMLHttpRequest();
  
  xhr.open('GET', 'cards.json', true);
  
  xhr.onload = function() {
    if(this.status === 200) {
      const sentences = JSON.parse(this.responseText);
      const num = randomNR(1, sentences.length);
      let sentence = sentences[num].value;
      
      sentenceEl.innerText = sentence;

      if(sentence === "") {
        sentenceEl.innerText = "Error: Empty string! Card Nr.: " + sentences[num];
      }
      if(sentence === null) {
        sentenceEl.innerText = "Error: Variable = null! Card Nr.: " + sentences[num];
      }

    } else {
      sentenceEl.innerText = "Error loading Data from cards.json! Status-code:" + this.status;
    }
  }

  xhr.send();
}

// Get a random Nr. between 1 and cards.length
function randomNR(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ----------------------
// Blinking icons
const icons = document.querySelectorAll('.fas');

setInterval(function() {
  icons.forEach((icon) => {
    icon.classList.toggle('v-hidden');
  });
}, 1000);

