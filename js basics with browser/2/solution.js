pascalCase = (str) => {
    return str
        .split(' ')
        .map(word => word.toLowerCase())
        .map(word => word[0].toUpperCase() + word.substring(1))
        .join('')
}

camelCase = (str) => {
    let result = pascalCase(str)

    return result[0].toLowerCase() + result.substring(1)
}

function solve() {
    let text = document.getElementById('text').value;
    let namingConvention = document.getElementById('naming-convention').value;
    let result = document.getElementById('result');

    switch (namingConvention) {
        case 'Pascal Case':
            result.innerText = pascalCase(text)
            break
        case 'Camel Case':
            result.innerText = camelCase(text)
            break
        default:
            result.innerText = 'Error!'
            break
    }
}
