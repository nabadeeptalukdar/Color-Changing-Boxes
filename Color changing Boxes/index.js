let Box = document.getElementsByClassName("box")

function RandomColor() {
    let r = Math.ceil(Math.random()*255);
    let g = Math.ceil(Math.random()*255);
    let b = Math.ceil(Math.random()*255);
    
    return `rgb(${r}, ${g}, ${b})`;
}

function Button(){Array.from(Box).forEach(e => {
    e.style.backgroundColor = RandomColor()
    e.style.color = RandomColor()
})
return Button()}