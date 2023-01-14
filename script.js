
function saludo(name){
    console.log(`Hola ${name}`);
}

function saludar(){
    var inputName = document.getElementById('input-name').value;
    saludo(inputName);
}