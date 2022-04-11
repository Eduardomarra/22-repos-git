export default function Header() {
    
    function header() {

        const container = document.createElement('div');
        const header = document.createElement('header');
        container.setAttribute('class', 'container')
        header.setAttribute('class', 'header')
        container.appendChild(header)

        document.body.appendChild(container)
        
        function logo() {
            const logo = document.createElement('h1')
            logo.innerHTML = `Eduardo Marra`
            header.appendChild(logo)
        }

        function nav() {
            const nav = document.createElement('div')
            nav.setAttribute('class', 'btn')

            const buttonGit = document.createElement('button')
            const linkGit = document.createElement('a')
            linkGit.innerHTML = `Meu GitHub`
            buttonGit.setAttribute('class', 'btn-git')
            linkGit.setAttribute('href', 'https://www.github.com/Eduardomarra')
            linkGit.setAttribute('target', '_blank')
            buttonGit.appendChild(linkGit)

            const buttonComunity = document.createElement('button')
            const linkComunity = document.createElement('a')
            linkComunity.innerHTML = `Entrar na comunidade`
            buttonComunity.setAttribute('class', 'btn-comunity')
            linkComunity.setAttribute('href', 'https://www.github.com/Eduardomarra')
            linkComunity.setAttribute('target', '_blank')
            buttonComunity.appendChild(linkComunity)

            
            nav.appendChild(buttonGit)
            nav.appendChild(buttonComunity)
            header.appendChild(nav)

        }
        logo();
        nav();
    }   
    header()
}