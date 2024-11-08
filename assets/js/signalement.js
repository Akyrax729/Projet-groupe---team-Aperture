// SIGNALEMENT

const title = document.getElementById("signalement-title");
 function blinkTitle() {       
                    title.style.visibility = (title.style.visibility === 'hidden') ? 'visible' : 'hidden';
                }
    setInterval(blinkTitle, 500);