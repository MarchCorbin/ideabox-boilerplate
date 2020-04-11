var hamButton = document.querySelector(".ham-button");
var mainPage = document.querySelector(".ideas");
var menu = document.querySelector('.menu');
var leftSideText = document.querySelector('.left-side-text');
var leftSideBorder = document.querySelector('.left-side-border');
var hamHide = document.querySelector('.ham-hide');


hamButton.addEventListener("click", toggleButton)

function toggleButton(){
hamButton.classList.toggle('active')
if (hamButton.classList.contains('active')){
  expandLeftSide()
} else {
  retractLeftSide()
  }
}


function expandLeftSide() {
        mainPage.classList.add("purple-3");
        leftSideBorder.classList.add("left-side-border-expand");
        leftSideText.classList.add("left-side-text-expand");
        menu.classList.add("menu-expand");
        menu.classList.remove("menu");
        hamHide.src = "Assets/menu-close.svg";
      }

function retractLeftSide(){
        mainPage.classList.remove("purple-3");
        leftSideBorder.classList.remove("left-side-border-expand");
        leftSideText.classList.remove("left-side-text-expand");
        menu.classList.remove("menu-expand");
        menu.classList.add("menu");
        hamHide.src = "Assets/menu.svg";
    }





// function() {

// }
