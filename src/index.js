let bullet1 = document.getElementById("bullet1");
let bullet2 = document.getElementById("bullet2");
let bullet3 = document.getElementById("bullet3");

let title = document.getElementById("title");

//Function for title hover effect:
title.addEventListener("mouseenter", function() {
  title.innerText += "\n==============";
});
title.addEventListener("mouseleave", function() {
  title.innerText = title.innerText.slice(0, -15);
});
// Functions for hover effect on bullet points:
function hoverBullet(bullet) {
  bullet.addEventListener("mouseenter", function () {
    bullet.innerText = "* " + bullet.innerText;
  });
}

function leaveBullet(bullet) {
  bullet.addEventListener("mouseleave", function() {
    if (bullet.innerText.startsWith("*")) {
      bullet.innerText = bullet.innerText.substring(1);
    }
  });
}

hoverBullet(bullet1);
hoverBullet(bullet2);
hoverBullet(bullet3);

leaveBullet(bullet1);
leaveBullet(bullet2);
leaveBullet(bullet3);

