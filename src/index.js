let bullet1 = document.getElementById("bullet1");
let bullet2 = document.getElementById("bullet2");
let bullet3 = document.getElementById("bullet3");

console.log(bullet1.innerText);
console.log(bullet2.innerText);
console.log(bullet3.innerText);

bullet1.addEventListener("mouseenter", function() {
  bullet1.innerText = "* " + bullet1.innerText;
});

bullet1.addEventListener("mouseleave", function() {
  if (bullet1.innerText.startsWith("*")) {
    bullet1.innerText = bullet1.innerText.substring(1);
  }
});

bullet2.addEventListener("mouseenter", function() {
  bullet2.innerText = "* " + bullet2.innerText;
});

bullet2.addEventListener("mouseleave", function() {
  if (bullet2.innerText.startsWith("*")) {
    bullet2.innerText = bullet2.innerText.substring(1);
  }
});

bullet3.addEventListener("mouseenter", function() {
  bullet3.innerText = "* " + bullet1.innerText;
});

bullet3.addEventListener("mouseleave", function() {
  if (bullet3.innerText.startsWith("*")) {
    bullet3.innerText = bullet3.innerText.substring(1);
  }
});

