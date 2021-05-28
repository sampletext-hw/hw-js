function toggle() {
    let button = document.getElementsByClassName('button')[0];

    let extra = document.getElementById('extra');

    if (button.innerText === 'MORE') {
        button.innerText = 'LESS'
        extra.style.display = 'block'
    }
    else{
        button.innerText = 'MORE'
        extra.style.display = 'none'
    }
}
