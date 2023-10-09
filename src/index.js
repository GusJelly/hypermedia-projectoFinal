let bullet1 = document.getElementById("bullet1");
let bullet2 = document.getElementById("bullet2");
let bullet3 = document.getElementById("bullet3");

let title = document.getElementById("title");
let myWork = document.getElementById("myWork");


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

// titles
elementHover(title, "#");
elementHover(myWork, "##");

// bullets
elementHover(bullet1, "*");
elementHover(bullet2, "*");
elementHover(bullet3, "*");

