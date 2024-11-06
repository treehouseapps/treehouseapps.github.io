const books = document.getElementById('books')
const input = document.getElementById('input')
const icon = document.getElementById('icon')
const sort = document.getElementById('sort')
let maindata
let sorting = false
fetch('books.json')
    .then(res => res.json())
    .then(data => {
        maindata = data
        display()
    })
icon.onclick = () => {
    let word = input.value.toLowerCase().trim()
    const result = maindata.find(item => item.title.toLowerCase().trim().includes(word))
    if (result) {
        books.innerHTML = ""
        let div = document.createElement("div")
        div.className = "book-card"
        div.innerHTML = `
            <div class="book-divide">
                <div class="book-img">
                    <img src="OIP.jpg" alt="">
                </div>
                <div class="book-detail">
                    <p class="author"><i>Author</i> : ${result.author}</p>
                    <p class="genre"><i>Genre</i> : ${result.genre}</p>
                    <p class="rating"><i>Rating</i> : ${result.rating}</p>
                </div>
            </div>
            <p class="title">${result.title}</p>
        `
        books.appendChild(div)
    }
    else {
        books.innerHTML = ""
        books.className = "books-empty"
        let div = document.createElement("div")
        div.innerHTML = `<h4><i>No Search Found !!!</i></h4>`
        books.appendChild(div)
    }
}

const display = () => {
    books.innerHTML = ""
    maindata.forEach(data => {
        let div = document.createElement("div")
        div.className = "book-card"
        div.innerHTML = `
            <div class="book-divide">
                <div class="book-img">
                    <img src="OIP.jpg" alt="">
                </div>
                <div class="book-detail">
                    <p class="author"><i>Author</i> : ${data.author}</p>
                    <p class="genre"><i>Genre</i> : ${data.genre}</p>
                    <p class="rating"><i>Rating</i> : ${data.rating}</p>
                </div>
            </div>
            <p class="title">${data.title}</p>
        `
        books.appendChild(div)
    })
}
sort.onclick = () => {
    sorting = !sorting
    sorting ? sort.innerText = "Assending" : sort.innerText = "Decending"
    if (sort.innerText == "Assending") {
        assending()
    }
    else {
        decending()
    }
}
const assending = () => {
    maindata.sort((a, b) =>
        a.title.localeCompare(b.title))
    display()
}
const decending = () => {
    maindata.sort((a, b) =>
        b.title.localeCompare(a.title))
    display()
}