function Confirmar()
{
    texto = nome.value          // Pega o que foi digitado
    teste.innerHTML = texto    // Insere no ID do span oq foi digitado
}

function MostrarJanela()
{
    janelinha.style.display = "block"
}

function FecharJanela()
{
    janelinha.style.display = "none"
}

soma = 0
function Somar()
{
    soma = soma + 1
    Resultado.value = soma
}

function Imprimir()
{
    window.print();
}