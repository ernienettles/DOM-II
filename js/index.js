// Your code goes here

const get = (selector) => {
    return document.querySelector(selector)
  }



const bus = get('.bus')
const textContent = get('.text-content')
const go = get('#cancelButton')
const successMessage = get('.report.success')
const failureMessage = get('.report.failure')
const modal = get('.modal')
const modalOpacity = get('.modal-opacity')

function driveTheBus(event) {
    bus.classList.add('go')
  }
bus.addEventListener('click', driveTheBus)

function resetTheBus(event) {
    bus.classList.remove('go')
  }
bus.addEventListener('dblclick', resetTheBus)

function drivingTheBus(event) {
    alert('You started the bus!')
  }
bus.addEventListener('animationstart', drivingTheBus)

function stopTheBus(event) {
    alert("The bus completed it's trip!")
  }
bus.addEventListener('animationend', stopTheBus)

function againTheBus(event) {
    alert("You copied the text!")
  }
textContent.addEventListener('copy', againTheBus)



