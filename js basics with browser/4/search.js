function search() {
    let towns = document.getElementById('towns').children

    let searchText = document.getElementById('searchText').value.toLowerCase()

    let result = document.getElementById('result');

    let count = 0
    for (let i = 0; i < towns.length; i++) {
        if (towns[i].innerText.toLowerCase().includes(searchText)) {
            towns[i].style.fontWeight = 'bold'
            towns[i].style.textDecoration = 'underline'
            count++
        } else {
            towns[i].style.fontWeight = ''
            towns[i].style.textDecoration = ''
        }
    }
    result.innerText = `${count} matches found`
}
