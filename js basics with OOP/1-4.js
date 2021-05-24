class Movie {
    constructor(title) {
        this.title = title
    }
}

let data = [
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]

movies = []
data.forEach(d => {
    if (d.startsWith('addMovie')) {
        // Case 1
        let title = d.substring('addMovie'.length + 1)

        movies.push(new Movie(title))
    } else if (d.includes(' directedBy ')) {
        // Case 2
        let split = d.split(' directedBy ')
        let index = movies.findIndex(m => m.title === split[0])
        if (index !== -1) {
            movies[index].director = split[1]
        }
    } else if (d.includes(' onDate ')) {
        // Case 3
        let split = d.split(' onDate ');
        let index = movies.findIndex(m => m.title === split[0])
        if (index !== -1) {
            movies[index].date = split[1]
        }
    }
})

movies.forEach(m => console.log(JSON.stringify(m)))
