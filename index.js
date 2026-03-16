function hitungSasax(value){
    document.getElementById('sasax').value += value;
}

function clearKang(){
    document.getElementById('sasax').value = '';
}

function hitungBos(){
    document.getElementById('sasax').value = eval(document.getElementById('sasax').value);
}