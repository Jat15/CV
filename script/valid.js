/*
  Si il n'y a pas de JS
*/

document.querySelector("#lemenu ul li:first-child").className = "cat_selector"
document.querySelector("#lemenu ul li:first-child ul li:first-child").className = "selector"



// Your CSS as text
var styles = `
  nav ul li ul{
    display: none;
  }
  body{
    overflow: hidden;
  }
  @media (max-width:1280px) {
    nav ul li ul{ 
      display: block;
    }
  }
`

var styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = styles
document.head.appendChild(styleSheet)