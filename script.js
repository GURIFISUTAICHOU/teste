const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const nomecapitulo = document.getElementById('capitulo');
const nomeautor = document.getElementById('nome-autor')
const audioCapitulo = document.getElementById('audio-capitulo');

const numeroMusica = 4;
let taTocando = 0;
let capituloAtual = 1;

function tocarfaixa() {
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
}



function pausarfaixa() {
    audioCapitulo.pause();
    botaoPlayPause.classList.add('bi-play-circle-fill');
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
}


function tocarOUpausar() {
    if ( taTocando === 0) {
        tocarfaixa();
        taTocando = 1;
    } else {
        pausarfaixa();
        taTocando = 0;
    }
}

function trocarnomeFaixa() {
    if (capituloAtual === 1) {
        nomecapitulo.innerText = 'Melhor eu ir/Ligando os Fatos/Sonho de Amor/Deixa eu te querer';
        nomeautor.innerText = 'Menos é Mais';
    } else if (capituloAtual === 2) {
        nomecapitulo.innerText = 'Fatalmente/ Separação/ Temporal';
        nomeautor.innerText = 'Menos é Mais';
    } else if (capituloAtual === 3) {
        nomecapitulo.innerText = ' Sinto sua Falta, É Natural, Pra Você Acreditar e Pirata e Tesouro';
        nomeautor.innerText = 'Ferrugem';
    } else if (capituloAtual === 4) {
        nomecapitulo.innerText = 'Até Que Durou / Tu Mandas no Meu Coração / Adorei / Supera'
        nomeautor.innerText = 'Menos é Mais';
    }
    
}
  


function proximafaixa () {
    if (capituloAtual === numeroMusica) {
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual + 1
    }
     audioCapitulo.src = "./music/" + capituloAtual + '.mp3'; 
     tocarfaixa();
     taTocando = 1;
     trocarnomeFaixa();
    
}

function voltarFaixa () {
    if (capituloAtual === 1) {
        capituloAtual = numeroMusica;
    } else {
        capituloAtual = capituloAtual - 1
    }
     audioCapitulo.src = "./music/" + capituloAtual + '.mp3'; 
     tocarfaixa();
     taTocando = 1;
     trocarnomeFaixa();
     
}

botaoPlayPause.addEventListener('click', tocarOUpausar);
botaoAvancar.addEventListener('click', proximafaixa);
botaoVoltar.addEventListener('click', voltarFaixa);
