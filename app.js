function incrementButton() {

    let element = document.getElementById('number');
    let value = element.innerHTML;


    ++value;
    document.getElementById("number").innerHTML = value;
    console.log("value coming from incrementButton() = ", value)
    colorChanger(value)


}

function decreaseButton() {
    let element = document.getElementById("number");
    let value = element.innerHTML;

    --value;
    document.getElementById("number").innerHTML = value;
}

function pauseButton() {
    clearInterval(numberUp)

}

//Keyboard control
document.addEventListener("keydown", (e) => {


    const moveForwardKeys = ["ArrowUp", "ArrowRight"]
    const moveBackwards = ["ArrowLeft", "ArrowDown"]
    if (moveForwardKeys.includes(e.key)) {
        e.preventDefault()
        incrementButton()
    }
    if (moveBackwards.includes(e.key)) {
        e.preventDefault()
        decreaseButton()
    }

})


//Background Color Change


function colorChanger(positionOfColorToUse) {
    let colors = ["green", "red", "yellow", "purple", "pink", "blue","brown", "gray", "orange", ];
    const nextPosition = (positionOfColorToUse - 1) % colors.length
    document.body.style.backgroundColor = colors[nextPosition];

}





