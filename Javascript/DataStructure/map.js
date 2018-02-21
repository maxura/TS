var map={};
function storePi (event, phi) {
    map[event] = phi;
}

storePi("pizza", 0.069);
storePi("touch of tree", -0.081);
//console.log("pizza" in map);
//console.log(map["touch of tree"]);
for (var event in map)
    console.log("Кореляция	для	'"	+	event
);