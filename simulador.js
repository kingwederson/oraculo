var ncomp = equipe.length-1
var fatorcasa = 1.05

function simular(){
    var rtl = [,];
    for(let l=1; l<ncomp+1;l++){
        for(let m=1; m<ncomp+1;m++){
            rtl = [e((equipe[l][2].rat-equipe[m][2].rat)/400),e((equipe[m][2].rat/equipe[l][2].rat)/400)]
            if(l!=m && (tabelaRR[l][m][0] == null && tabelaRR[l][m][1] == null && tabelaRR[l][m] != 'nn')){
                casa = rtl[0]*(equipe[l][2].a+equipe[m][2].d)/2
                fora = rtl[1]*(equipe[m][2].a+equipe[l][2].d)/2
                tabelaRR[l][m][0] = golmarcado(casa*fatorcasa)
                tabelaRR[l][m][1] = golmarcado(fora/fatorcasa)
            }
        }
    }
}

function partida(mandante,visitante){
            rtl = [e((equipe[mandante][2].rat-equipe[visitante][2].rat)/400),e((equipe[visitante][2].rat/equipe[mandante][2].rat)/400)]
            casa = rtl[0]*(equipe[mandante][2].a+equipe[visitante][2].d)/2
            fora = rtl[1]*(equipe[visitante][2].a+equipe[mandante][2].d)/2
    return `${equipe[mandante][0]} ${golmarcado(casa*fatorcasa)}-${golmarcado(fora/fatorcasa)} ${equipe[visitante][0]}`
}

var jpr //Jogos por rodada
var jogosnarodadaNeutro = []
if(ncomp%2 == 1){
    jpr = parseInt(ncomp/2+0.5);
}else{
    jpr = ncomp/2;
}
console.log(jogosnarodadaNeutro)
var fatia = ncomp-1

console.log(competidores())
function rodada(numr){
    console.log(`rodada ${numr}`)
    let esquerda
    let direita
    document.querySelector("#ligacalendario").innerHTML = ``;
    document.querySelector("#numr").innerHTML = `${numr}`;
    for(let i = 0; i<jpr;i++){
    const calendario = document.querySelector("#ligacalendario");
    const linhadecalendario = document.createElement("tr");
        jogosnarodadaNeutro.push(['mandante','placar','visitante'])
        if(i==0){
            esquerda = ((i+numr)%fatia) == 0 ? fatia : ((i+numr)%fatia)
            direita = ncomp
        }else{
            esquerda = ((i+numr)%fatia) == 0 ? fatia : ((i+numr)%fatia)
            direita = ((fatia-i+numr)%fatia) == 0 ? fatia : ((fatia-i+numr)%fatia)
        }
        if(numr%2 == 1){
            jogosnarodadaNeutro[i][0] = equipe[esquerda][0];
            jogosnarodadaNeutro[i][1] = `${tabelaRR[esquerda][direita][0]}-${tabelaRR[esquerda][direita][1]}`;
            jogosnarodadaNeutro[i][2] = equipe[direita][0];
            console.log(`tabelaRR[${esquerda}][${direita}] = [${tabelaRR[esquerda][direita][0]},${tabelaRR[esquerda][direita][1]}]`);
            linhadecalendario.innerHTML =  `
                <td class="escudo"><img class="crest" src="${equipe[esquerda][1]}"></td>
                <td class="timenomedir">${equipe[esquerda][0]}</td>
                <td class="placar">${tabelaRR[esquerda][direita][0] == null ? 'v' : tabelaRR[esquerda][direita][0]}${tabelaRR[esquerda][direita][1] == undefined ? 's' : '-'+tabelaRR[esquerda][direita][1]}</td>
                <td class="timenome">${equipe[direita][0]}</td>
                <td class="escudo"><img class="crest" src="${equipe[direita][1]}"></td>
            `
            calendario.appendChild(linhadecalendario);
        }else{
            jogosnarodadaNeutro[i][0] = equipe[direita][0];
            jogosnarodadaNeutro[i][1] = `${tabelaRR[direita][esquerda][0]}-${tabelaRR[direita][esquerda][1]}`;
            jogosnarodadaNeutro[i][2] = equipe[esquerda][0];
            console.log(`tabelaRR[${esquerda}][${direita}] = [${tabelaRR[direita][esquerda][0]},${tabelaRR[direita][esquerda][1]}]`);
            linhadecalendario.innerHTML =  `
                <td class="escudo"><img class="crest" src="${equipe[direita][1]}"></td>
                <td class="timenomedir">${equipe[direita][0]}</td>
                <td class="placar">${tabelaRR[direita][esquerda][0] == null?'v':tabelaRR[direita][esquerda][0]}${tabelaRR[direita][esquerda][1] == undefined ? 's' :'-'+tabelaRR[direita][esquerda][1]}</td>
                <td class="timenome">${equipe[esquerda][0]}</td>
                <td class="escudo"><img class="crest" src="${equipe[esquerda][1]}"></td>
            `
            calendario.appendChild(linhadecalendario);
        }
    }
}