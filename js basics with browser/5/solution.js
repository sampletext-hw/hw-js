function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        let tbody = document.getElementsByTagName('tbody')[0];
        let result = document.getElementById('result')
        let search = document.getElementById('searchField').value.toLowerCase()

        let count = 0
        trfor: for (let i = 0; i < tbody.children.length; i++) {
            let tr = tbody.children[i]

            for (let j = 0; j < tr.children.length; j++) {
                let td = tr.children[j]
                if (td.innerText.toLowerCase().includes(search) || search === '') {
                    tr.classList.add('select')
                    count++
                    continue trfor
                } else {
                    tr.classList.remove('select')
                }
            }
        }
        result.innerText = `${count} matches found`
    }
}
