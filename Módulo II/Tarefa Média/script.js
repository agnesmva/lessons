function mediaTemperatura(){
    let tp1 = parseFloat (document.getElementById('primeiraT').value); //parseFloat converte para número com ponto 
    let tp2 = parseFloat (document.getElementById('segundaT').value);
    let tp3 = parseFloat (document.getElementById('terceiraT').value);
    let tp4 = parseFloat (document.getElementById('quartaT').value);
    let tp5 = parseFloat (document.getElementById('quintaT').value);
   
    let media = (tp1 + tp2 + tp3 + tp4 + tp5) / 5;

    let novoTexto = document.getElementById('texto');
    novoTexto.textContent = 'A média da temperatura da sua região é ' + media;

    

}