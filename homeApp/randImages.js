var elem = ["shorts.jpeg", "dress.jpeg", "cat.png"];


function getImg() {
    var elemSize = elem.length;
    var randIndex = 0;
    if (elemSize == 1) {
        return elem[0];
    }

    randIndex = Math.floor(Math.random() * (elemSize));
    return elem[randIndex]

}

function addmg() {
    var gimg = getImg();
    var img = document.createElement("IMG");
    img.src = "imgs/" + gimg;
    //img.setAttribute("style", "display: block;  border: 1px solid black; margin:15% auto;");
    img.setAttribute("id", "1000")
    document.body.appendChild(img);
    var i = elem.indexOf(gimg);
    elem.splice(i, 1);
}
