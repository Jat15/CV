/*
  Capture les geste sur mobile
*/
var touchstartY = 0;
var touchendY = 0;

document.querySelector("section").addEventListener('touchstart', function(event) {
    touchstartY = event.screenY;
}, false);

document.querySelector("section").addEventListener('touchend', function(event) {
    touchendY = event.screenY;
    gesture();
}, false); 

function gesture() {
    let event = Object.create(person);

  if (!touchendY == touchstartY) {
      if (touchendY < touchstartY) {
        event.deltaY = -3;
      }
      else {
        event.deltaY = 3;
      }
    defil(event)
  }
}


/*
  Timer pour évité le déplacement trop rapide.(décrochement des navigateur)
  
  On regarde si on trouve les prochaine element du dom pour catégorie ou le sous-menu

  Le chemin logique est déduit et on l'envoie comme si c'était un clic.
*/

var event_time = new Date().getTime() - 1000;

document.querySelector("section").addEventListener('wheel', defil, {passive: false})
document.querySelector("section").addEventListener('touchmove', defil, {passive: false})

function defil(event) {
  event.preventDefault();

  console.log(event)

  now_time = new Date().getTime();

  if (event_time + 1000 < now_time)
  {
    event_time = new Date().getTime();

    let new_selector = event.deltaY > 0 ? document.querySelector('.selector').nextElementSibling : document.querySelector('.selector').previousElementSibling
    let new_cat_selector = event.deltaY > 0 ? document.querySelector('.cat_selector').nextElementSibling : document.querySelector('.cat_selector').previousElementSibling
    let direction_selector = event.deltaY > 0 ? "first-child" : "last-child" 

    if (!new_selector)
    {
      if (!new_cat_selector)
        new_cat_selector = document.querySelector('nav > ul > li:' + direction_selector)
      
      new_selector = new_cat_selector.querySelector('li:' + direction_selector)
    }
    
    new_selector.querySelector('a').click()
  }
}


/*
  On montre grâce au class css ou on est dans le menu et quelle catégorie
*/

document.querySelectorAll('nav a').forEach(input => input.addEventListener('click', clic_menu))

function clic_menu() {
  let selector_menu;
  let cat_selector_menu;
  document.querySelector('.selector').className = ''
  document.querySelector('.cat_selector').className = ''

  if (this.parentNode.tagName == "H2") {
    selector_menu = this.parentNode.parentNode
    cat_selector_menu = this.parentNode.parentNode.parentNode.parentNode
  }
  else {
    cat_selector_menu = this.parentNode.parentNode
    selector_menu = this.parentNode.parentNode.querySelector('li:first-child')
  }

  cat_selector_menu.className = "cat_selector"
  selector_menu.className = "selector"

  document.querySelector('header > h1').innerText = cat_selector_menu.firstChild.textContent
  document.querySelector('header > h2').innerText = selector_menu.firstChild.textContent




}
