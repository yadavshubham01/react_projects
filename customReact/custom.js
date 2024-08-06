import { Children } from "react"
function customRender(reactElement,container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('EventTarget',reactElement.props.EventTarget)

    container.appendChild(domElement)
}
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        EventTarget: '_black'
    },
    Children: 'click me to visit google'
}

const mainContainer =document.querySelector('#root')

customRender(reactElement,mainContainer)