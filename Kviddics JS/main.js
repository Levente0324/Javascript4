var osszes = document.getElementById('osszes')

function szamol() {
    var inputKvaff = document.getElementById('input1').value;
    var inputCikesz = document.getElementById('input2').value;
    osszes.innerHTML = 'Összesen: ' + (inputKvaff * 10 + inputCikesz * 150) + ' pont';

    if(inputCikesz < 0){
        alert('Negativ szam nem megadhato!');
    } else if(inputCikesz >= 2){
        alert('Az aranycikeszt csak egyszer lehet elkapni!')
    } else {
        osszes.innerHTML = 'Összesen: ' + (inputKvaff * 10 + inputCikesz * 150) + ' pont';
    }
}