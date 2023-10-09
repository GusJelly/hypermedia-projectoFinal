// Element hover effect
function elementHover(element, symbol) {
  element.hover(
    function() {
      $(this).text(symbol + ' ' + $(this).text());
    },
    function() {
      if ($(this).text().startsWith(symbol)) {
        $(this).text($(this).text().substring(symbol.length));
      }
    }
  );
}

// Title hover effect
function titleHover(element, symbol) {
  element.hover(
    function() {
      $(this).text(symbol + ' ' + $(this).text() + ' ' + symbol);
    },
    function() {
      $(this).text($(this).text().replace(/=/g, ''));
    }
  );
}

// jQuery objects for elements
let bullet = $('#bullet');
let bio = $('#bio');
let title = $('#title');
let titleWeb = $('#title-web');
let titleCalculator = $('#title-calculator');
let titleDotnet = $('#title-dotnet');
let titleFox = $('#title-fox');

// Title calls
titleHover(title, '=');

// Bullet calls
elementHover(bio, '#');
elementHover(titleWeb, '#');
elementHover(titleCalculator, '##');
elementHover(titleDotnet, '#');
elementHover(titleFox, '##');
elementHover(bullet, '*');

// Change bullet point every couple of seconds:
const bulletPoints = ['Lover of programming.', 'Linux Developer', 'Web Developer'];
let indexBulletPoint = 0;

function updateBulletPoint() {
  if (indexBulletPoint < bulletPoints.length) {
    bullet.text(bulletPoints[indexBulletPoint]);
    indexBulletPoint++;
  } else {
    indexBulletPoint = 0;
  }
}

const bulletPointInterval = setInterval(updateBulletPoint, 3000);
