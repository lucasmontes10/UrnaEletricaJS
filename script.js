let titulo = document.querySelector(".d1-1");
let cargo = document.querySelector(".d1-2 span");
let numeros = document.querySelector(".d1-3");
let rodape = document.querySelector(".d2");
let descricao = document.querySelector(".d1-4");
let lateral = document.querySelector(".d1-right");

let etapaAtual = 0;
let numeroDigitado = ''; // COMPUTAR O VOTO DIGITADO

function iniciarEtapa(){
    let etapa = etapas[etapaAtual];
    let numeroHTML = ' ';
    // VAI ADICIONAR A QUANTIDADE DE QUADRADOS
    for (let i = 0; i < etapa.numeros; i++){
        if (i == 0){
            numeroHTML += '<div class="numero pisca"></div>'
        }else{
            numeroHTML += '<div class="numero"></div>';
        }
    }
    titulo.innerHTML = '';
    cargo.innerHTML = etapa.titulo;
    rodape.style.display = 'none';
    lateral.style.display = 'none';
    descricao.innerHTML = '';
    numeros.innerHTML = numeroHTML;
}
function atualizaInterface(){
    alert("Voto computado!");
    console.log(numeroDigitado);
}

function clicou(n){
    let numeroAtual = document.querySelector(".numero.pisca");
    if (numeroAtual !== null){
        numeroAtual.innerHTML = n;
        numeroDigitado += n;
        numeroAtual.classList.remove('pisca');
        if (numeroAtual.nextElementSibling != null){
            numeroAtual.nextElementSibling.classList.add('pisca');   
        }else{
            atualizaInterface();
        }
    }
}
function branco(){
    alert("Você clicou na tecla branca");
}
function corrige(){
    alert("Ok vamos corrigir");
}
function confirma(){
    alert("Vaiii confirma");
}

iniciarEtapa();