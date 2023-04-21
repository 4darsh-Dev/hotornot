// Responsive JS

let mSearchBtn = document.getElementById("m-search-btn");
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
const menuChanger = function (){
    if (menuBtnCond){
        // menuLi[0].innerHTML = "<img id='menu-btn' class='menu-img' src='/static/img/cross.svg' alt='close'>";

        menuLi[0].innerHTML = "<img id='menu-btn' class='menu-img' src='/static/img/cross.svg' alt='cross'>";

        navList.style.display = "block";
        header.style.height = "14rem";
        menuBtnCond = false;
        console.log("click1")
        
    }
    else {

        // menuLi[0].innerHTML = "<img id='menu-btn' class='menu-img' src='/static/img/menu.svg' alt='menu'>";

        menuLi[0].innerHTML = "<img id='menu-btn' class='menu-img' src='/static/img/menu.svg' alt='menu'>";

        navList.style.display = "none";
        menuBtnCond = true;
        header.style.height = "4rem";
        console.log("click2")
        
    }


}

    
menuLi[0].addEventListener("click", menuChanger);
