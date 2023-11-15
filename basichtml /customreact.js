const mainContainer = document.querySelector("#root");

function createNewElement(elementDemo, mainContainer) {
    const newElement = document.createElement(elementDemo.type)
    newElement.innerHTML = elementDemo.text
    for (const attribute in elementDemo.attribute) {
       newElement.setAttribute(attribute, elementDemo.attribute[attribute])
    }
    mainContainer.appendChild(newElement)
    
}

const elementDemo = {
    type : "a",
    attribute : {
        href: "https://bard.google.com",
        target: "_blank"
    },
    text: `My Name Is Anchor Tag`
}
createNewElement(elementDemo, mainContainer)

