// element hover effect:
function elementHover(element, symbol) {
  $(element).on("mouseenter", function() {
    $(this).text(symbol + " " + $(this).text());
  });

  $(element).on("mouseleave", function() {
    if ($(this).text().startsWith(symbol)) {
      $(this).text($(this).text().substring(symbol.length));
    }
  });
}

function titleHover(element, symbol) {
  $(element).on("mouseenter", function() {
    $(this).text(symbol + " " + $(this).text() + " " + symbol);
  });

  $(element).on("mouseleave", function() {
    $(this).text($(this).text().replaceAll(symbol, ""));
  });
}


let bullet = $("#bullet");
let bio = $("#bio");
let title = $("#title");
let titleWeb = $("#title-web");
let titleCalculator = $("#title-calculator");
let titleDotnet = $("#title-dotnet");
let titleFox = $("#title-fox");

// titles
titleHover(title, "=");
elementHover(bio, "#");
elementHover(titleWeb, "#");
elementHover(titleCalculator, "##");
elementHover(titleDotnet, "#");
elementHover(titleFox, "##");
elementHover($("#title-personal"), "#");
elementHover($("#title-bash"), "##");
elementHover($("#bashCpu"), "###");
elementHover($("#bashDisk"), "###");
elementHover($("#bashProj"), "###");

// bullets
elementHover(bullet, "*");

// Change bullet point every couple of seconds:
const bulletPoints = ["Lover of programming.", "Linux Developer", "Web Developer"];
let indexBulletPoint = 0;

function updateBulletPoint() {
  if (indexBulletPoint < bulletPoints.length) {
    bullet.text(bulletPoints[indexBulletPoint]);
    indexBulletPoint++;
  } else {
    indexBulletPoint = 0;
    bullet.text(bulletPoints[indexBulletPoint]);
  }
}
const bulletPointInterval = setInterval(updateBulletPoint, 3000);
console.log(bulletPointInterval);


// carousel images

// Calculator:
// show image 2 on click
$('#imgCalc1').on("click", function() {
  console.log($(this) + " clicked");

  $(this).addClass("hidden");
  $('#imgCalc2').removeClass("hidden");
});

// show image 1 on click
$('#imgCalc2').on("click", function() {
  console.log(this + " clicked");

  $(this).addClass("hidden");
  $('#imgCalc1').removeClass("hidden");
});

// carousel paragraphs
// show paragraph 2 on click
$('#pCalc1').on('click', function() {
  console.log($(this) + ' clicked');

  $(this).addClass('hidden');
  $('#pCalc2').removeClass('hidden');
});

// show paragraph 1 on click
$('#pCalc2').on('click', function() {
  console.log($(this) + ' clicked');

  $(this).addClass('hidden');
  $('#pCalc1').removeClass('hidden');
});

// Foxy the Fox:
// show image 2 on click
$('#imgFoxy1').on("click", function() {
  console.log($(this) + " clicked");

  $(this).addClass("hidden");
  $('#imgFoxy2').removeClass("hidden");
});

// show image 3 on click
$('#imgFoxy2').on("click", function() {
  console.log(this + " clicked");

  $(this).addClass("hidden");
  $('#imgFoxy3').removeClass("hidden");
});

// show image 1 on click
$('#imgFoxy3').on("click", function() {
  console.log(this + " clicked");

  $(this).addClass("hidden");
  $('#imgFoxy1').removeClass("hidden");
});

// carousel paragraphs
// show paragraph 2 on click
$('#pFoxy1').on('click', function() {
  console.log($(this) + ' clicked');

  $(this).addClass('hidden');
  $('#pFoxy2').removeClass('hidden');
});

// show paragraph 1 on click
$('#pFoxy2').on('click', function() {
  console.log($(this) + ' clicked');

  $(this).addClass('hidden');
  $('#pFoxy1').removeClass('hidden');
});
