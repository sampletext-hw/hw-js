class Employee {
    constructor(name) {
        this.name = name
        this.id = name.length
    }

    toString(){
        return `Name: ${this.name} - Personal Number: ${this.id}`
    }
}

let data = [
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
let employees = data.map(s => new Employee(s))

employees.forEach(e => console.log(`${e}`))
