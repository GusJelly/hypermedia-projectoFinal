// element hover effect:
function elementHover(element, symbol) {
  element.addEventListener("mouseenter", function() {
    element.innerText = symbol + " " + element.innerText;
  });

  element.addEventListener("mouseleave", function() {
    if (element.innerText.startsWith(symbol)) {
      element.innerText = element.innerText.substring(symbol.length);
    }
  });
}

function titleHover(element, symbol) {
  element.addEventListener("mouseenter", function() {
    element.innerText = symbol + " " + element.innerText + " " + symbol;
  });

  element.addEventListener("mouseleave", function() {
    for (let i = 0; i < element.innerText.length; i++) {
      element.innerText = element.innerText.replace("=", "");
    }
  });
}


let bullet = document.getElementById("bullet");
let bio = document.getElementById("bio");
let title = document.getElementById("title");
let titleWeb = document.getElementById("title-web");
let titleCalculator = document.getElementById("title-calculator");
let titleDotnet = document.getElementById("title-dotnet");
let titleFox = document.getElementById("title-fox");

// titles
titleHover(title, "=");
elementHover(bio, "#");
elementHover(titleWeb, "#");
elementHover(titleCalculator, "##");
elementHover(titleDotnet, "#");
elementHover(titleFox, "##");

// bullets
elementHover(bullet, "*");


// Change bullet point every couple of seconds:
const bulletPoints = ["Lover of programming.", "Linux Developer", "Web Developer"]
let indexBulletPoint = 0;

function updateBulletPoint() {
  if (indexBulletPoint < bulletPoints.length) {
    bullet.innerText = bulletPoints[indexBulletPoint];
    indexBulletPoint++;
  } else {
    indexBulletPoint = 0;
  }
}
const bulletPointInterval = setInterval(updateBulletPoint, 3000);
console.log(bulletPointInterval);
