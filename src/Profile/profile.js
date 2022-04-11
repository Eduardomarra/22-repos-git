export default function Profile() {

    const container = document.createElement('div')
    const profile = document.createElement('div')
    container.setAttribute('class', 'container')
    profile.setAttribute('class', 'profile')

    const h2 = document.createElement('h2')
    const h1 = document.createElement('h1')
    const p = document.createElement('p')

    h2.innerHTML = `Comunidade dev`;
    h1.innerHTML = `Projetos da <br> Comunidade Codelândia`;
    p.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec felis ligula, accumsan nec cursus in, eleifend sit amet dui.`;

    profile.appendChild(h2)
    profile.appendChild(h1)
    profile.appendChild(p)
    container.appendChild(profile)

    document.body.appendChild(container)
}