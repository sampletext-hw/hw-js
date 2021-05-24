class City {
    constructor(town, latitude, longitude) {
        this.town = town
        this.latitude = latitude
        this.longitude = longitude
    }
}

let data = [
    'Moscow | 55.7522 | 37.6156',
    'Beijing | 39.913818 | 116.363625'
]

let cities = data
    .map(d => {
        let split = d.split(" | ")
        let title = split[0]
        let lat = parseFloat(split[1]).toFixed(2)
        let lng = parseFloat(split[2]).toFixed(2)
        return {title, lat, lng}
    })
    .map(d => new City(d.title, d.lat, d.lng));

cities.forEach(c => console.log(c))
