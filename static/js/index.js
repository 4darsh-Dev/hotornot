

console.log("I am working properly! ");

let elem = document.getElementsByClassName('theme-changer');
let body = document.getElementById('my-body');
let mainContainer = document.getElementById('main-container');
let typSpan = document.getElementById('tw-span');
let typSpanHead = document.getElementById('tw-head-id');
let twbg = document.getElementsByClassName('dynamic-texts li span::after')



let themeCond = true;
const themeChanger = function(){
    console.log(" i am clicked ");
    
  

    if(themeCond){
        // Change into Dark theme

        elem[0].innerHTML = "<img id='theme-img' src='/static/img/sun.png'alt='light-theme'><span id='t-c-para'>Light </span>"

        body.style.backgroundColor = "rgb(68, 64, 64)"
        body.style.color = "white"
        typSpan.style.backgroundColor = "rgb(68, 64, 64)";
        typSpanHead.style.color = "whitesmoke";

        mainContainer.style.backgroundBlendMode = "screen";
        mainContainer.style.background = "linear-gradient(#3c55dd, transparent), linear-gradient(to top left, #d71ccb, transparent), linear-gradient(to top right, #11112a, transparent)";

 

        themeCond = false;

    }

    else if(!themeCond){
        // Change into Light theme

        elem[0].innerHTML = "<img id='theme-img' src='/static/img/moon.png'alt='dark-theme'><span id='t-c-para'>Dark </span>";

        
        console.log(themeCond);

        body.style.backgroundColor = "whitesmoke";
        body.style.color = "black";
        

        mainContainer.style.backgroundColor  = "white";
        

        typSpan.style.backgroundColor = "whitesmoke";

        typSpanHead.style.color = "rgb(68, 64, 64)";
        

      
        themeCond = true;

    }
    
}

let theme = document.getElementsByClassName('theme-changer');

theme[0].addEventListener('click', themeChanger);

mainContainer.addEventListener('mouseover', function(){

    if(!themeCond){
        mainContainer.style.boxShadow = " 8px 8px 15px #19dae3";
    }
    else{
        mainContainer.style.boxShadow  = " 10px 10px 5px #bfbfbf ";
    }

});

mainContainer.addEventListener('mouseout', function(){
    
    if(!themeCond){
        mainContainer.style.boxShadow = " none";
    }
    else{
        mainContainer.style.boxShadow  = " none";
    }

});


// function loadCompetitors() {
//     fetch('/api/get_competitors')
//         .then(response => response.json())
//         .then(data => {
//             const competitor1 = data[Math.floor(Math.random() * data.length)];
//             const competitor2 = data[Math.floor(Math.random() * data.length)];
//             if (competitor1 !== competitor2) {
//                 $('.competitor1').attr('src', competitor1.image);
//                 $('.competitor2').attr('src', competitor2.image);
//             } else {
//                 loadCompetitors();
//             }
//         });
// }

// loadCompetitors();

// $('.winner1').click(function() {
//     // handle winner 1 logic
//     loadCompetitors();
// });

// $('.winner2').click(function() {
//     // handle winner 2 logic
//     loadCompetitors();
// });


function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var images = JSON.parse(this.responseText);
            document.querySelector('img:nth-of-type(1)').src = images[0].url;
            document.querySelector('img:nth-of-type(2)').src = images[1].url;
        }
    };
    xhr.open('POST', '/competition/');
    xhr.setRequestHeader('X-CSRFToken', getCookie('csrftoken'));
    xhr.send(new FormData(this));
}); //


