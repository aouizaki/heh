let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let Day = document.getElementById("day");

let month = document.getElementById("mois");
let year = document.getElementById("anne");
let datejour = document.getElementById("datejour");
let jour = document.getElementById("jour");

let currentDate = new Date();
mois.innerHTML = currentDate.getMonth()+1;

let currentYear = new Date();
anne.innerHTML = currentYear.getFullYear();

let currentDay = new Date();
datejour.innerHTML = currentDay.getDate();

setInterval(()=>{
    let currenttime = new Date();

hrs.innerHTML = (currenttime.getHours()<10?"0":"") + currenttime.getHours();
min.innerHTML = (currenttime.getMinutes()<10?"0":"") + currenttime.getMinutes();
sec.innerHTML = (currenttime.getSeconds()<10?"0":"") + currenttime.getSeconds();
    if(alarmtime == hrs || alarmtime == min ){
        ringtone.play();
        ringtone.loop = true;
    }
    },1000)



    function getDayOfWeek() {
        const daysOfWeek = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
        const currentDate = new Date();
        const dayOfWeekIndex = currentDate.getDay();
        return daysOfWeek[dayOfWeekIndex];
      }
      
      // Appel de la fonction pour obtenir le jour de la semaine actuel
      const dayOfWeek = getDayOfWeek();
      jour.innerHTML = dayOfWeek







                        //couleur de background
    function Run() {
        const container = document.querySelector('.container');
        container.classList.add('click')
        saveColorPreference('click'); //
    }
    function RunGreen() {
        const container = document.querySelector('.container');
        container.classList.remove('click','clickGreen','clickBlack','clickPro');
        container.classList.add('clickGreen');
        saveColorPreference('clickGreen');
    }
    function RunPerpel() {
        const container = document.querySelector('.container');
        container.classList.remove('click','clickGreen','clickBlack','clickPro');
        container.classList.add('clickPerpel');
        saveColorPreference('clickPerpel');
    }
    function RunBlack() {
        const container = document.querySelector('.container');
        container.classList.remove('click','clickGreen','clickPerpel','clickPro');
        container.classList.add('clickBlack');
        saveColorPreference('clickBlack');
    }
    function RunPro() {
        const container = document.querySelector('.container');
        container.classList.remove('click','clickPerpel','clickBlack','clickGreen')
        container.classList.add('clickPro');
        saveColorPreference('clickPro');
    };




const h4 = document.querySelector('h4.H4');
const gray = document.querySelector('button#gray');
gray.onclick = function () {
    h4.classList.remove('H4','perpelcolor','greencolor','blackcolor')
    h4.classList.add('graycolor');
    saveColorPreference('graycolor');
}
const perpel = document.querySelector('button#perpel');
perpel.onclick = function () {
    h4.classList.remove('H4','graycolor','greencolor','blackcolor')
    h4.classList.add('perpelcolor');
    saveColorPreference('perpelcolor');
}
const green = document.querySelector('button#green');
green.onclick = function () {
    h4.classList.remove('H4','graycolor','perpelcolor','blackcolor')
    h4.classList.add('greencolor');
    saveColorPreference('greencolor');
}
const black = document.querySelector('button#black');
black.onclick = function () {
    h4.classList.remove('H4','greencolor','perpelcolor','graycolor')
    h4.classList.add('blackcolor')
    saveColorPreference('blackcolor');
}


function updateBatteryStatus(battery) {
    const batteryInfoElement = document.getElementById('battery-info');

    batteryInfoElement.innerHTML = `
    Batterie: ${battery.level * 100}%<br>
    `;
}

function handleBatteryStatus(battery) {
    updateBatteryStatus(battery);

    battery.addEventListener('chargingchange', () => updateBatteryStatus(battery));
}

function initBatteryStatusDetection() {
    if (navigator.getBattery) {
        navigator.getBattery().then(handleBatteryStatus);
    } else if (navigator.battery) {
        handleBatteryStatus(navigator.battery);
    } else {
        document.getElementById('battery-info').innerHTML = 'Battery status API not supported in this browser.';
    }
}

// Call the initialization function when the app starts or when needed.
initBatteryStatusDetection();


function saveColorPreference(color) {
    localStorage.setItem('backgroundColor', color);
  }
  function applySavedColorPreference() {
    const container = document.querySelector('.container');
    const savedColor = localStorage.getItem('backgroundColor');
  
    if (savedColor) {
      container.classList.remove('click', 'clickGreen', 'clickPerpel', 'clickBlack', 'clickPro');
      container.classList.add(savedColor);
    }
  }
  applySavedColorPreference();



// calculatrice - ---------------------------------------


// Get references to the elements
// Get references to the elements
const inputTeam1 = document.getElementById('inputTeam1');
const inputTeam2 = document.getElementById('inputTeam2');
const resultat1 = document.getElementById('Total1');
const resultat2 = document.getElementById('Total2');

const valider1 = document.getElementById('Valider1');
const valider2 = document.getElementById('Valider2');
const scoretotal = document.getElementById('scoretotal');
const resetButton = document.getElementById('resetButton');
const myAudio = document.getElementById('myAudio');
const myAudio2 = document.getElementById('myAudio2');
const beep = document.getElementById('beep');
const timer = document.getElementById('timer');
let totalTeam1 = 0;
let totalTeam2 = 0;

// Function to calculate and update the results for Team 1
valider1.onclick = function calculateResults() {
    const nameteam1 = document.getElementById('nameTeam1').value; // Read the name from the input field
    const scoreTeam1 = parseInt(inputTeam1.value);
    beep.play();




    if (isNaN(scoreTeam1)) {
        alert("Please enter a valid score for " +  nameteam1);
        inputTeam1.value = ''; // Clear the input field after showing the alert
        return;
    }
    document.getElementById('Total1').style.fontSize = "14px";
    document.getElementById('Total2').style.fontSize = "14px";
    document.getElementById('Total1').style.letterSpacing = "1px";
    document.getElementById('Total2').style.letterSpacing = "1px";
    document.getElementById('scoretotal').style.fontSize = "25px";
    totalTeam1 += scoreTeam1;
    resultat1.innerHTML = `${nameteam1} : ${totalTeam1}`;
    inputTeam1.value = ''; // Clear the input field after calculation
    if (totalTeam1 >= 100) {
        scoretotal.innerText = nameteam1 + " Gagne !!"
        playTextAsAudio(nameteam1 + "gagne le match , Filicitation !!!.");
    };


    playTextAsAudio("il reste" + (100- totalTeam1));
    if (100-totalTeam1 >= 100) {
        playTextAsAudio(isNaN)
    }
};

// Function to calculate and update the results for Team 2
valider2.onclick = function calculateResultsTeam2() {
    const nameteam2 = document.getElementById('nameTeam2').value; // Read the name from the input field
    const scoreTeam2 = parseInt(inputTeam2.value);
    beep.play();


    if (isNaN(scoreTeam2)) {
        alert("Please enter a valid score for " + nameteam2);
        inputTeam2.value = ''; // Clear the input field after showing the alert
        return;
    }
    
    totalTeam2 += scoreTeam2;
    resultat2.innerHTML = `${nameteam2}: ${totalTeam2}`;
    inputTeam2.value = ''; // Clear the input field after calculation

    
    if (totalTeam2 >= 100) {
        scoretotal.innerText =  nameteam2 + " Gagne !!";
        playTextAsAudio(nameteam2 + " Gagne le match , Filicitation !!!.");
    }
    playTextAsAudio("il reste" + (100- totalTeam2) + "");
    if (100-totalTeam2 >= 100) {
        playTextAsAudio(isNaN)
    }
};

// Function to reset the score totals
resetButton.onclick = function resetScores() {
    totalTeam1 = 0;
    totalTeam2 = 0;
    timer.play();
    setTimeout(function() {
        timer.pause();
        timer.currentTime = 0; // Rewind to the beginning
    }, 2000);

    const nameteam1 = document.getElementById('nameTeam1').value; // Read the name from the input field
    const nameteam2 = document.getElementById('nameTeam2').value; // Read the name from the input field

    // Reset the displayed scores
    resultat1.innerHTML = `${nameteam1} : 0`;
    resultat2.innerHTML = `${nameteam2} : 0`;

    // Reset the winning message
    scoretotal.innerText = '';
    myAudio.pause();
    myAudio.currentTime = 0;

    // Disable the reset button for 2 seconds
    resetButton.disabled = true;
    setTimeout(() => {
        resetButton.disabled = false;
    }, 2000);
;
}

function playTextAsAudio(text, audioElement) {
    // Using the Web Speech API to convert text to audio
    const synthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = 'fr-FR';

    synthesis.speak(utterance);
    // Play the associated audio
    audioElement.play();
}


