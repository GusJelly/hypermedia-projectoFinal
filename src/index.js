let bullet = document.getElementById("bullet");

let title = document.getElementById("title");
let bio = document.getElementById("bio");

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

// titles
titleHover(title, "=");
elementHover(bio, "#");

// bullets
elementHover(bullet, "*");
// elementHover(bullet2, "*");
// elementHover(bullet3, "*");


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

