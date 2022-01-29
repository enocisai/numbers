function incrementButton(){
    let element = document.getElementById('number');
    let value = element.innerHTML;

    ++value;
    
    document.getElementById('number').innerHTML = value;
}

function decreaseButton(){
    let element = document.getElementById("number");
    let value = element.innerHTML;

    --value;
    document.getElementById("number").innerHTML = value;
}

function pauseButton(){
    clearInterval(numberUp)

}

