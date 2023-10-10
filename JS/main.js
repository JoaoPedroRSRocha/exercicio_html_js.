document.getElementById("meuFormulario").addEventListener("submit", function (event) {
    event.preventDefault();

    var campoA = parseFloat(document.getElementById("campoA").value);
    var campoB = parseFloat(document.getElementById("campoB").value);
    const mensagemsucess = 'Formulário válido: B é maior que A!'
    const mensagemfail = 'Formulário inválido: B deve ser maior que A.'


    if (campoB > campoA) {
        document.getElementById("mensagemsucess").innerHTML = mensagemsucess
        document.getElementById("mensagemsucess").style.color = "green";
    } else {
        document.getElementById("mensagemfail").innerHTML = mensagemfail
        document.getElementById("mensagemfail").style.color = "red";
    }
});
