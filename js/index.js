// Your code goes here

const get = (selector) => {
    return document.querySelector(selector)
  }



const bus = get('.bus')
const textContent = get('.text-content')
const nav = get('.main-navigation')
const content = get('.content-section')
const logo = get('.container .logo-heading') 

function driveTheBus(event) {
    if(event.key === "Escape"){
        bus.classList.add('go')
    }
  }
document.addEventListener('keydown', driveTheBus)

function resetTheBus(event) {
    bus.classList.remove('go')
  }
document.addEventListener('keyup', resetTheBus)

function drivingTheBus(event) {
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  nav.style.backgroundColor = '#' + randomColor;
  }
bus.addEventListener('animationstart', drivingTheBus)

function stopTheBus(event) {
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.color = '#' + randomColor;
  }
bus.addEventListener('animationend', stopTheBus)

function againTheBus(event) {
    alert("You copied the text!")
  }
textContent.addEventListener('copy', againTheBus)

function randomBG(event) {
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = '#' + randomColor;
}
document.addEventListener('wheel', randomBG)

function resetBG(event) {
  document.body.style.backgroundColor = 'white';
}
document.addEventListener('scroll', resetBG)

function makePBig(event) {
  textContent.classList.add('big');
}
document.addEventListener('dblclick', makePBig)

function makePSmall(event) {
  textContent.classList.remove('big');
}
document.addEventListener('auxclick', makePSmall)

function logoBG(event) {
  logo.style.backgroundColor = 'red';
  event.preventDefault();
}
logo.addEventListener('auxclick', logoBG)

function navBG(event) {
  nav.style.backgroundColor = 'blue';
  event.preventDefault();
}
nav.addEventListener('click', navBG)


function nope(event) {
  alert("Nope. Leave.");
}
window.addEventListener('load', nope)



