let button = document.querySelector(`.themebtn`)
console.log(button)
 let body = document.querySelector(`body`)
let sunIcon = document.querySelector(`.themebtn .sun`)
var head = document.querySelector(`.wrapper h2`)

function skyModeToggler(){
    body.classList.toggle(`sky`)

    if (body.classList.contains(`sky`) == true){
        sunIcon.style.marginTop = `-50px`
        head.innerHTML = `Sky Mode`
    }  else{
        sunIcon.style.marginTop = `0px`
        head.innerHTML = `Sun Mode`
    }
}



button.addEventListener('click', skyModeToggler)