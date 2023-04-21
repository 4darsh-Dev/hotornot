// <!-- Developer : ADARSH MAURYA adwebproductions.com-->

console.log("I am working properly! ");
let firstRow = document.getElementById("first-row");
let elem = document.getElementsByClassName("theme-changer");
let body = document.getElementById("my-body");

let mainContainer = document.getElementById("p-container");

let themeCond = true;
const themeChanger = function () {
  console.log(" i am clicked ");

  if (themeCond) {
    // Change into Dark theme
    elem[0].innerHTML =
      "<img id='theme-img' src='/static/img/sun.png'alt='light-theme'><span id='t-c-para'>Light </span>";

    console.log(themeCond);

    body.style.backgroundColor = "rgb(68, 64, 64)";
    mainContainer.style.backgroundBlendMode = "screen";
    firstRow.style.backgroundColor = "rgb(68, 64, 64)";
    mainContainer.style.background =
      "linear-gradient(#3c55dd, transparent), linear-gradient(to top left, #d71ccb, transparent), linear-gradient(to top right, #11112a, transparent)";

    body.style.color = "white";

    themeCond = false;
  } else if (!themeCond) {
    // Change into Light theme

    elem[0].innerHTML =
      "<img id='theme-img' src='/static/img/moon.png'alt='dark-theme'><span id='t-c-para'>Dark </span>";

    body.style.color = "black";

    body.style.backgroundColor = "whitesmoke";
    firstRow.style.backgroundColor = "whitemsoke";
    mainContainer.style.backgroundColor = "white";

    themeCond = true;
  }
};

let theme = document.getElementsByClassName("theme-changer");

theme[0].addEventListener("click", themeChanger);

mainContainer.addEventListener("mouseover", function () {
  if (!themeCond) {
    mainContainer.style.boxShadow = " 8px 8px 15px #19dae3";
  } else {
    mainContainer.style.boxShadow = " 10px 10px 5px #bfbfbf ";
  }
});

mainContainer.addEventListener("mouseout", function () {
  if (!themeCond) {
    mainContainer.style.boxShadow = " none";
  } else {
    mainContainer.style.boxShadow = " none";
  }
});
