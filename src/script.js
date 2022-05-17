const date = document.querySelector('.container p a span')
const year = new Date().getFullYear()
date.innerHTML = `${year}`

function getApiGithub() {
    const cards = document.querySelector(".cards")
    fetch("https://api.github.com/users/eduardomarra/repos")
        .then(async res => {
            const data = await res.json();

            data.map(item => {
                let cardItem = document.createElement('div')
                cardItem.setAttribute('class', 'card-item')

                cardItem.innerHTML = `
                    <div class="imgProject">
                        <img src="./assets/imgProject.jpg" alt="">
                    </div>
                    <h2>${item.name}</h2>
                    <p>${item.description}</p>
                    <div class="btn">
                        <button class="btn-demo">
                            <a href="${item.html_url}">Demo</a>
                        </button>
                        <button class="btn-github">
                            <a href="${item.html_url}">GitHub</a>
                        </button>
                    </div>
                `
                cards.appendChild(cardItem)
            })
        })
}

const cards = document.querySelector('.container.show');
const showProject = document.querySelector('.show-project');
const inner = "Ver menos"
const inner2 = "Ver mais"

showProject.addEventListener("click", openCards)

function openCards() {
    cards.classList.toggle("show");    
    if(showProject.innerHTML === 'Ver mais'){
        showProject.innerHTML = `Ver menos`
    }else{
        showProject.innerHTML = `Ver mais`
    }
}

getApiGithub()
