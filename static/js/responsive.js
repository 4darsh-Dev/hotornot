// Responsive JS

let mSearchBtn = document.getElementById("search-img");
let searchBar = document.getElementById("s-box1");
let searchImg = document.getElementById("search-img");
let menuC = document.getElementsByClassName('menu-c');
let menuBtn = document.getElementById("menu-btn");

let navList = document.getElementById("nav-list")

let header = document.getElementById("m-header");

let menuLi = document.getElementsByClassName("menu-li");




let menuCond = true;
mSearchBtn.addEventListener("click", function(){
    
    if (menuCond){
        searchBar.style.visibility = "visible";
        searchImg.style.display = "none";

        menuCond = false;
   

    }
    else {
        searchBar.style.visibility = "hidden";
        menuCond = true;

    }
    
})

let menuBtnCond = true;
let checkLabel = document.getElementById("check-label");

const menuBtnChanger = function(){

    if (menuBtnCond){
        checkLabel.innerHTML = `<i id="check-i" class='bx bx-x'></i>`;
        menuBtnCond = false;
    }

    else{
        checkLabel.innerHTML = `<i id="check-i" class='bx bx-menu'></i>`;

        menuBtnCond = true;
    }

}

let menuBtnNew = document.getElementById("check");
menuBtnNew.addEventListener("click", menuBtnChanger);