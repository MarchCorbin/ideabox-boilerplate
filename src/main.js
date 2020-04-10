var hamButton = document.querySelector(".ham-button");
var mainPage = document.querySelector(".ideas");
var menu = document.querySelector('.menu');
var leftSideText = document.querySelector('.left-side-text');
var leftSideBorder = document.querySelector('.left-side-border');
var hamHide = document.querySelector('.ham-hide');


hamButton.addEventListener("click", expandLeftSide) 
  

function expandLeftSide(event) {

    if (event.target.src !== "Assets/menu-close.svg") {
         
        mainPage.classList.add("purple-3");
        leftSideBorder.classList.add("left-side-border-expand");
        leftSideText.classList.add("left-side-text-expand");
        menu.classList.add("menu-expand");
        menu.classList.remove("menu");
        hamHide.src = "Assets/menu-close.svg";
    }
    // } else if (event.target.src !== "Assets/menu.svg") {

    //     console.log("hello");

    //     mainPage.classList.remove("purple-3");
    //     leftSideBorder.classList.remove("left-side-border-expand");
    //     leftSideText.classList.remove("left-side-text-expand");
    //     menu.classList.remove("menu-expand");
    //     menu.classList.add("menu");
    //     hamHide.src = "Assets/menu.svg";  
    // }
}
    


// function() {

// }    