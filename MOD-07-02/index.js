document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    var valorA = parseFloat(document.getElementById("valorA").value);
    var valorB = parseFloat(document.getElementById("valorB").value);

    if (valorB > valorA) {
        document.getElementById("verdadeiro").style.display = "block";
        document.getElementById("falso").style.display = "none";
    } else {
        document.getElementById("verdadeiro").style.display = "none";
        document.getElementById("falso").style.display = "block";
    }
})
