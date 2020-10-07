let surprise = (n : number) => {
    alert("Hello!" + n);
}

let getName = () : string => {
    let name : string = prompt('Enter your name:')
    return name;
}

let writeName = () : void => {
    let name : string = getName()
    let prg = document.createElement("p");
    let textNode = document.createTextNode("Bonjour " + name)
    prg.appendChild(textNode)
    let elt = document.getElementById("myid")
    elt.appendChild(prg)
}