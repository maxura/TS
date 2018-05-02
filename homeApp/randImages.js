var elem = [];
var gimg;

function getImg() {
    var elemSize = elem.length;
    var randIndex = 0;
    if (elemSize == 0) {
        init();
    }
    else if (elemSize == 1) {
        return elem[0];
    }
    else
        randIndex = Math.floor(Math.random() * (elemSize));
    return elem[randIndex]

}

function remove() {
    var image = document.getElementById("addedImg");
    if (image == null) {
        return;
    }
    else image.remove();
}

function addmg() {
    remove();
    clearHint();
    gimg = getImg();
    var img = document.createElement("IMG");
    img.src = "imgs/" + gimg;
    img.setAttribute("id", "addedImg");
    document.getElementById("innerImage").appendChild(img);
    var i = elem.indexOf(gimg);
    elem.splice(i, 1);
}

function init() {
    return elem = ["маус.png", "лег.png","хед.png","ні.jpeg","хенд.png","арм.jpeg"];
}

function addHint() {
    var hinArea = document.getElementById("textCont");
    hinArea.innerHTML = gimg.split('.')[0];
}

function clearHint() {
    var text = document.getElementById("textCont").firstChild;
    if (text != null)
        text.remove();
}
