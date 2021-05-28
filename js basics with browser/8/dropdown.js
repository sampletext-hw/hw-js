function addItem() {
    let menu = document.getElementById('menu');
    let newItemText = document.getElementById('newItemText').value;
    let newItemValue = document.getElementById('newItemValue').value;

    let option = document.createElement('option')
    option.value = newItemValue
    option.innerText = newItemText
    menu.appendChild(option)
}
