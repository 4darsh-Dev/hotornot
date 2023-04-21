// Responsive JS

let mSearchBtn = document.getElementById("m-search-btn");
let searchBar = document.getElementById("s-box1");
let searchImg = document.getElementById("search-img");
let menuC = document.getElementsByClassName('menu-c');
let menuBtn = document.getElementById("menu-btn");

let navList = document.getElementById("nav-list")

let header = document.getElementById("m-header");


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
menuBtn.addEventListener("click", ()=>{

    if (menuBtnCond){
        navList.style.display = "block";
        header.style.height = "14rem";
        menuBtnCond = false;
        
    }
    else {
        navList.style.display = "none";
        menuBtnCond = true;
        header.style.height = "4rem";
        
    }

})
