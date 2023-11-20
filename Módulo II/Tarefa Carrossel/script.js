function MudarImagens() {
    let radio1 = document.getElementById('radio1');
    let radio2 = document.getElementById('radio2');
    let radio3 = document.getElementById('radio3');
    let radio4 = document.getElementById('radio4');
    let radio5 = document.getElementById('radio5');
    let radio6 = document.getElementById('radio6');
    let img1 = document.getElementById('img1');
    let img2 = document.getElementById('img2');
    let img3 = document.getElementById('img3');
    let img4 = document.getElementById('img4');
    let img5 = document.getElementById('img5');
    let img6 = document.getElementById('img6');
   

    function alternarImagem(imagem) {
        img1.style.display = 'none'; //style mexe no estilo fazendo com que a imagem não apareça, só ao ser clicada
        img2.style.display = 'none';
        img3.style.display = 'none';
        img4.style.display = 'none';
        img5.style.display = 'none';
        img6.style.display = 'none';

        imagem.style.display = 'block';
    }

    radio1.onclick = function () {
        alternarImagem(img1);
    };
    
    radio2.onclick = function () {
        alternarImagem(img2);
    };

    radio3.onclick = function () {
        alternarImagem(img3);
    };

    radio4.onclick = function () {
        alternarImagem(img4);
    };

    radio5.onclick = function () {
        alternarImagem(img5);
    };
    radio6.onclick = function () {
        alternarImagem(img6);
    };
}

MudarImagens()