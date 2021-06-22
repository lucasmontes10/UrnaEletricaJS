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
    titulo.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    rodape.style.display = 'none';
    lateral.style.display = 'none';
    descricao.innerHTML = '';
    numeros.innerHTML = numeroHTML;
}
// PONTO IMPORTANTE DO PROGRAMA PARA VERIFICAR QUAL É O CANDIDATO
function atualizaInterface(){
    let info = etapas[etapaAtual]; //Estranhamente mesmo eu só tendo o elemento presidente, eu preciso colocar a posição da lista
    let candidato = info.candidatos.filter((item) =>{
        if (item.numero == numeroDigitado){
            return true;
        }else{
            return false;
        }
    });
    if(candidato.length > 0){
        candidato = candidato[0];
        titulo.style.display = 'flex';
        descricao.innerHTML = "Nome: " + candidato.nome + "<br> Partido: " + candidato.partido;
        rodape.style.display = 'flex';
        let lateralHtml = '';
        for (let i in candidato.fotos){
            if(candidato.fotos[i].small == false){
                lateralHtml += `<div class="d1-image"><img src="images/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`;
            }else{
                lateralHtml += `<div class="d1-image small"><img src="images/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`;
            }
        }
        lateral.innerHTML = lateralHtml;
        lateral.style.display = 'flex';
    }else{
        titulo.style.display = 'flex';
        rodape.style.display = 'flex';
        descricao.innerHTML = '<div class="aviso-grande pisca">VOTO NULO</div>'
    }
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