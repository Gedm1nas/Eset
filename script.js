let kiekis = 0;

document.getElementById("mygtukas").onclick = function() {
    kiekis = parseInt(document.getElementById("text").value, 10);
    document.getElementById("ats").textContent = 'Suma ' + kiekis * 11 + '€';
}


var downButton = document.createElement("button");
downButton.innerHTML = "↓";


var body = document.getElementsByTagName("body")[0];
body.appendChild(downButton);


downButton.addEventListener("click", function() {
    kiekis = kiekis - 1;
    document.getElementById("text").value = kiekis;
    document.getElementById("ats").textContent = 'Suma ' + kiekis * 11 + '€';
});


var upButton = document.createElement("button");
upButton.innerHTML = "↑";


body.appendChild(upButton);


upButton.addEventListener("click", function() {
    kiekis = kiekis + 1;
    document.getElementById("text").value = kiekis;
    document.getElementById("ats").textContent = 'Suma ' + kiekis * 11 + '€';
});
