function surprise(n : number) {
    alert("Hello!" + n);
}

function getName() {
    let name = prompt('Enter your name:')
    return name;
}

function writeName() {
    let name = getName()
    let prg = document.createElement("p");
    let textNode = document.createTextNode("Bonjour " + name)
    prg.appendChild(textNode)
    let elt = document.getElementById("myid")
    elt.appendChild(prg)
}