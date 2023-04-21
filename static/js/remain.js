

console.log("I am working properly! ");

let elem = document.getElementsByClassName('theme-changer');
let body = document.getElementById('my-body');



let themeCond = true;
const themeChanger = function(){
    console.log(" i am clicked ");
    
  

    if(themeCond){
        // Change into Dark theme
        elem[0].innerHTML = "<img id='theme-img' src='/static/img/sun.png'alt='light-theme'><span id='t-c-para'>Light </span>";

        
        console.log(themeCond);

        body.style.backgroundColor = "rgb(68, 64, 64)"
        
       
        body.style.color = "white";
   
        themeCond = false;

    }

    else if(!themeCond){
        // Change into Light theme
        

        elem[0].innerHTML = "<img id='theme-img' src='/static/img/moon.png'alt='dark-theme'><span id='t-c-para'>Dark </span>"

        
        body.style.color = "black"
        
        body.style.backgroundColor = "whitesmoke";

        

        themeCond = true;

    }
    
}

let theme = document.getElementsByClassName('theme-changer');

theme[0].addEventListener('click', themeChanger);

