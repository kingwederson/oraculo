//tabelaRR[12][13] = [,]

var listagem0 = []

// Preenchendo o array com base na lógica
for (let i = 0; i < equipe.length; i++) {
    if (equipe[i].length > 0) { // Ignorar índices vazios
        listagem0.push([
            i,                     // índice
            equipe[i][1],          // escudo
            equipe[i][0],          // nome
            i === 0 ? 10000 : 0,    // 10000 pontos para o índice 0, caso contrário 0
            0,                     // V
            0,                     // E
            0,                     // D
            0,                     // G
            0,                     // G+
            0,                     // G-
            0,                     // J
            equipe[i][3],          // último elemento da equipe
        ]);
    } else {
        // Para o índice 0 (ou outros vazios), se for necessário
        listagem0.push([0, 0, 0, 1000, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
    if(equipe[i][0]=="Sheffield United"){
        listagem0[18][3] = -2
    }
}

function lerlistagem(){
    for(let i=1;i<equipe.length;i++){
        for(let j=1;j<equipe.length;j++){
            if(j!=i){
                if(tabelaRR[i][j][0] != null && tabelaRR[i][j][1] != null){
                    // mandante
                    listagem[i][8] += tabelaRR[i][j][0]
                    listagem[i][9] += tabelaRR[i][j][1]
                    listagem[i][7] += (tabelaRR[i][j][0]-tabelaRR[i][j][1])
                    listagem[i][10]++
                    // visitante
                    listagem[j][8] += tabelaRR[i][j][1]
                    listagem[j][9] += tabelaRR[i][j][0]
                    listagem[j][7] += (tabelaRR[i][j][1]-tabelaRR[i][j][0])
                    listagem[j][10]++

                    // ambos
                    if(tabelaRR[i][j][0]>tabelaRR[i][j][1]){ // vitoria para o mandante
                        listagem[i][4]++
                        listagem[j][6]++
                        listagem[i][3]+= 3
                    }else if(tabelaRR[i][j][0]<tabelaRR[i][j][1]){ // vitoria para o visitante
                        listagem[j][4]++
                        listagem[i][6]++
                        listagem[j][3]+= 3
                    }else{ // empate
                        listagem[i][5]++
                        listagem[j][5]++
                        listagem[i][3]++
                        listagem[j][3]++
                    }
                }
            }
        }
    }
}
function arrumaposicao(){
    for(let h=1;h<equipe.length;h++){
        listagem[h][0] = h
    }
}
function ordenaprob(alfa, omega){
    return omega[2]-alfa[2]
}
function alfabetica(alfa, omega){
    return alfa[11]-omega[11]
}
function inserirdados(){
    for(let k=1;k<equipe.length;k++){
        document.getElementsByClassName('pos')[k].innerText = listagem[k][0]
        document.getElementsByClassName('crest')[k].src = `${listagem[k][1]}`
        document.getElementsByClassName('timenome')[k].innerHTML = listagem[k][2]
        document.getElementsByClassName('pts')[k].innerText = listagem[k][3]
        document.getElementsByClassName('vit')[k].innerText = listagem[k][4]
        document.getElementsByClassName('emp')[k].innerText = listagem[k][5]
        document.getElementsByClassName('der')[k].innerText = listagem[k][6]
        document.getElementsByClassName('golb')[k].innerText = listagem[k][7]
        document.getElementsByClassName('golp')[k].innerText = listagem[k][8]
        document.getElementsByClassName('golc')[k].innerText = listagem[k][9]
        document.getElementsByClassName('jogos')[k].innerText = listagem[k][10]
    }
}

function confronto(casa,fora){
    return console.log( `${tabelaRR[casa][0]} ${tabelaRR[casa][fora][0]}-${tabelaRR[casa][fora][1]} ${tabelaRR[fora][0]} | ${tabelaRR[fora][0]} ${tabelaRR[fora][casa][0]}-${tabelaRR[fora][casa][1]} ${tabelaRR[casa][0]}` )
}

function competidores(){
    for (let esse = 1; esse != equipe.length; esse++) {
        console.log(`${esse}. ${copta[esse][2]}`);
    }
}