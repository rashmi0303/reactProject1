function customRender(reactElement, container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    
    // container.append(domElement)


    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for ( const prop in reactElement.props) {
        if(prop === reactElement.children) continue;
        domElement.setAttribute(prop, reactElement.props[prop])

        container.append(domElement)
        
    }
}

 const reactElement = {
    type: 'a',
    props: {
        href:"https://google.com",
        target: "_blank"
    },
    children: "Click me to visit google"
 }


const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);