class Product {
    constructor(title, quantity) {
        this.title = title
        this.quantity = quantity
    }

    toString() {
        return `${this.title} -> ${this.quantity}`
    }
}

let data = [
    [
        'Chips', '5',
        'CocaCola', '9',
        'Bananas', '14',
        'Pasta', '4',
        'Beer', '2'
    ],
    [
        'Flour', '44',
        'Oil', '12',
        'Pasta', '7',
        'Tomatoes', '70',
        'Bananas', '30'
    ]
]

function parseProducts(arr) {
    let products = []

    for (let i = 0; i < arr.length; i += 2) {
        products.push(new Product(arr[i], parseInt(arr[i + 1])))
    }

    return products
}

let [store, income] = data.map(d => parseProducts(d))

income.forEach(i => {
        let index = store.findIndex(s => s.title === i.title);
        if (index === -1) {
            store.push(i)
        } else {
            store[index].quantity += i.quantity
        }
    }
)

store.forEach(s => console.log(`${s}`))
