function surprise(n) {
    alert("Hello!" + n);
}

function getName() {
    var name = prompt('Enter your name:')
    return name;
}

function writeName() {
    var name = getName()
    document.write("<h1 id='myid'> Bonjour " + name + "</h1>")
    var elt = document.getElementById("myid")
    elt.style.position = "absolute"
}