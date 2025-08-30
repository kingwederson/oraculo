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
            0,                     // V                         [4]
            0,                     // E                         [5]
            0,                     // D                         [6]
            0,                     // G                         [7]
            0,                     // G+                        [8]
            0,                     // G-                        [9]
            0,                     // J                        [10]
            0,                     // pontos mandante          [11]
            0,                     // V mandante               [12]
            0,                     // E mandante               [13]
            0,                     // D mandante               [14]
            0,                     // G mandante               [15]
            0,                     // G+ mandante              [16]
            0,                     // G- mandante              [17]
            0,                     // J visitante              [18]
            0,                     // pontos visitante         [19]
            0,                     // V visitante              [20]
            0,                     // E visitante              [21]
            0,                     // D visitante              [22]
            0,                     // G visitante              [23]
            0,                     // G+ visitante             [24]
            0,                     // G- visitante             [25]
            0,                     // J visitante              [26]
            equipe[i][3]          // índice                   [27]
        ]);
    } else {
        // Para o índice 0 (ou outros vazios), se for necessário
        listagem0.push([0, 0, 0, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 1000, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
}

function lerlistagem(){
    for(let i=1;i<equipe.length;i++){
        for(let j=1;j<equipe.length;j++){
            if(j!=i && tabelaRR[i][j] != NaN){
                if(tabelaRR[i][j][0] != null && tabelaRR[i][j][1] != null){
                    // mandante
                    listagem[i][8] += tabelaRR[i][j][0]
                    listagem[i][9] += tabelaRR[i][j][1]
                    listagem[i][7] += (tabelaRR[i][j][0]-tabelaRR[i][j][1])
                    listagem[i][10]++

                    listagem[i][16] += tabelaRR[i][j][0]
                    listagem[i][17] += tabelaRR[i][j][1]
                    listagem[i][15] = listagem[i][16]-listagem[i][17]
                    listagem[i][18]++
                    // visitante
                    listagem[j][8] += tabelaRR[i][j][1]
                    listagem[j][9] += tabelaRR[i][j][0]
                    listagem[j][7] += (tabelaRR[i][j][1]-tabelaRR[i][j][0])
                    listagem[j][10]++

                    listagem[j][24] += tabelaRR[i][j][1]
                    listagem[j][25] += tabelaRR[i][j][0]
                    listagem[j][23] = listagem[j][24]-listagem[j][25]
                    listagem[j][26]++

                    // ambos
                    if(tabelaRR[i][j][0]>tabelaRR[i][j][1]){ // vitoria para o mandante
                        listagem[i][4]++
                        listagem[j][6]++
                        listagem[i][3]+= 3

                        listagem[i][12]++
                        listagem[j][22]++
                        listagem[i][11]+= 3

                    }else if(tabelaRR[i][j][0]<tabelaRR[i][j][1]){ // vitoria para o visitante
                        listagem[j][4]++
                        listagem[i][6]++
                        listagem[j][3]+= 3

                        listagem[j][20]++
                        listagem[i][14]++
                        listagem[j][19]+= 3
                    }else{ // empate
                        listagem[i][5]++
                        listagem[j][5]++
                        listagem[i][3]++
                        listagem[j][3]++

                        // contabiliza empates em casa e fora

                        listagem[i][13]++
                        listagem[j][21]++
                        // contabiliza pontos em casa e fora
                        listagem[i][11]++
                        listagem[j][19]++
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
        document.getElementsByClassName('golb')[k].innerText = listagem[k][7] > 0 ? '+'+listagem[k][7] : listagem[k][7]
        document.getElementsByClassName('golp')[k].innerText = listagem[k][8]
        document.getElementsByClassName('golc')[k].innerText = listagem[k][9]
        document.getElementsByClassName('jogos')[k].innerText = listagem[k][10]
        document.getElementsByClassName('pts_mandante')[k].innerText = listagem[k][11]
        document.getElementsByClassName('vit_mandante')[k].innerText = listagem[k][12]
        document.getElementsByClassName('emp_mandante')[k].innerText = listagem[k][13]
        document.getElementsByClassName('der_mandante')[k].innerText = listagem[k][14]
        document.getElementsByClassName('golb_mandante')[k].innerText = listagem[k][15] > 0 ? '+'+listagem[k][15] : listagem[k][15]
        document.getElementsByClassName('golp_mandante')[k].innerText = listagem[k][16]
        document.getElementsByClassName('golc_mandante')[k].innerText = listagem[k][17]
        document.getElementsByClassName('jogos_mandante')[k].innerText = listagem[k][18]
        document.getElementsByClassName('pts_visitante')[k].innerText = listagem[k][19]
        document.getElementsByClassName('vit_visitante')[k].innerText = listagem[k][20]
        document.getElementsByClassName('emp_visitante')[k].innerText = listagem[k][21]
        document.getElementsByClassName('der_visitante')[k].innerText = listagem[k][22]
        document.getElementsByClassName('golb_visitante')[k].innerText = listagem[k][23] > 0 ? '+'+listagem[k][23] : listagem[k][23]
        document.getElementsByClassName('golp_visitante')[k].innerText = listagem[k][24]
        document.getElementsByClassName('golc_visitante')[k].innerText = listagem[k][25]
        document.getElementsByClassName('jogos_visitante')[k].innerText = listagem[k][26]
    }
}

function confronto(casa,fora){
    return console.log( `${tabelaRR[casa][0]} ${tabelaRR[casa][fora][0]}-${tabelaRR[casa][fora][1]} ${tabelaRR[fora][0]} | ${tabelaRR[fora][0]} ${tabelaRR[fora][casa][0]}-${tabelaRR[fora][casa][1]} ${tabelaRR[casa][0]}` )
}
function confrontoturno(casa,fora){
    return console.log( `${tabelaRR[casa][0]} ${tabelaRR[casa][fora][0]}-${tabelaRR[casa][fora][1]} ${tabelaRR[fora][0]}` )
}

function competidores(){
    for (let esse = 1; esse != equipe.length; esse++) {
        console.log(`${esse}. ${equipe[esse][0]}`);
    }
}