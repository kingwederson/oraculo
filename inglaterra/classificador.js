var tabelaRRinicial = [
    [equipe[0][0],equipe[1][0],equipe[2][0],equipe[3][0],equipe[4][0],equipe[5][0],equipe[6][0],equipe[7][0],equipe[8][0],equipe[9][0],equipe[10][0],equipe[11][0],equipe[12][0],equipe[13][0],equipe[14][0],equipe[15][0],equipe[16][0],equipe[17][0],equipe[18][0],equipe[19][0],equipe[20][0]],
    /*ARS*/[equipe[1][0],[,]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[1,1]/*BHA*/,[,]/*CHE*/,[,]/*CRY*/,[0,0]/*EVE*/,[,]/*FUL*/,[,]/*IPS*/,[4,2]/*LEI*/,[2,2]/*LIV*/,[,]/*MCI*/,[2,0]/*MUD*/,[,]/*NEW*/,[3,0]/*NFO*/,[3,1]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[2,0]/*WOL*/],
    /*AVL*/[equipe[2][0],[0,2]/*ARS*/,[,]/*AVL*/,[1,1]/*BOU*/,[3,1]/*BRE*/,[,]/*BHA*/,[,]/*CHE*/,[2,2]/*CRY*/,[3,2]/*EVE*/,[,]/*FUL*/,[,]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[,]/*MCI*/,[0,0]/*MUD*/,[,]/*NEW*/,[,]/*NFO*/,[1,0]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[3,1]/*WOL*/],
    /*BOU*/[equipe[3][0],[2,0]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[1,2]/*BHA*/,[0,1]/*CHE*/,[,]/*CRY*/,[,]/*EVE*/,[,]/*FUL*/,[,]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[2,1]/*MCI*/,[,]/*MUD*/,[1,1]/*NEW*/,[,]/*NFO*/,[3,1]/*SOU*/,[1,0]/*TOT*/,[1,1]/*WHU*/,[,]/*WOL*/],
    /*BRE*/[equipe[4][0],[,]/*ARS*/,[,]/*AVL*/,[3,2]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[,]/*CHE*/,[2,1]/*CRY*/,[,]/*EVE*/,[,]/*FUL*/,[4,3]/*IPS*/,[4,1]/*LEI*/,[,]/*LIV*/,[,]/*MCI*/,[,]/*MUD*/,[4,2]/*NEW*/,[,]/*NFO*/,[3,1]/*SOU*/,[,]/*TOT*/,[1,1]/*WHU*/,[5,3]/*WOL*/],
    /*BHA*/[equipe[5][0],[,]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[,]/*CHE*/,[1,3]/*CRY*/,[,]/*EVE*/,[,]/*FUL*/,[0,0]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[2,1]/*MCI*/,[2,1]/*MUD*/,[,]/*NEW*/,[2,2]/*NFO*/,[1,1]/*SOU*/,[3,2]/*TOT*/,[,]/*WHU*/,[2,2]/*WOL*/],
    /*CHE*/[equipe[6][0],[1,1]/*ARS*/,[3,0]/*AVL*/,[,]/*BOU*/,[2,1]/*BRE*/,[4,2]/*BHA*/,[,]/*CHE*/,[1,1]/*CRY*/,[,]/*EVE*/,[,]/*FUL*/,[,]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[0,2]/*MCI*/,[,]/*MUD*/,[2,1]/*NEW*/,[1,1]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/],
    /*CRY*/[equipe[7][0],[,]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[,]/*CHE*/,[,]/*CRY*/,[,]/*EVE*/,[0,2]/*FUL*/,[,]/*IPS*/,[2,2]/*LEI*/,[0,1]/*LIV*/,[2,2]/*MCI*/,[0,0]/*MUD*/,[1,1]/*NEW*/,[,]/*NFO*/,[,]/*SOU*/,[1,0]/*TOT*/,[0,2]/*WHU*/,[,]/*WOL*/],
    /*EVE*/[equipe[8][0],[,]/*ARS*/,[,]/*AVL*/,[2,3]/*BOU*/,[0,0]/*BRE*/,[0,3]/*BHA*/,[,]/*CHE*/,[2,1]/*CRY*/,[,]/*EVE*/,[1,1]/*FUL*/,[,]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[,]/*MCI*/,[,]/*MUD*/,[0,0]/*NEW*/,[,]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[4,0]/*WOL*/],
    /*FUL*/[equipe[9][0],[1,1]/*ARS*/,[1,3]/*AVL*/,[,]/*BOU*/,[2,1]/*BRE*/,[3,1]/*BHA*/,[,]/*CHE*/,[,]/*CRY*/,[,]/*EVE*/,[,]/*FUL*/,[,]/*IPS*/,[2,1]/*LEI*/,[,]/*LIV*/,[,]/*MCI*/,[,]/*MUD*/,[3,1]/*NEW*/,[,]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[1,1]/*WHU*/,[1,4]/*WOL*/],
    /*IPS*/[equipe[10][0],[,]/*ARS*/,[2,2]/*AVL*/,[1,2]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[,]/*CHE*/,[0,1]/*CRY*/,[0,2]/*EVE*/,[1,1]/*FUL*/,[,]/*IPS*/,[1,1]/*LEI*/,[0,2]/*LIV*/,[,]/*MCI*/,[1,1]/*MUD*/,[,]/*NEW*/,[,]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/],
    /*LEI*/[equipe[11][0],[,]/*ARS*/,[1,2]/*AVL*/,[1,0]/*BOU*/,[,]/*BRE*/,[2,2]/*BHA*/,[1,2]/*CHE*/,[,]/*CRY*/,[1,1]/*EVE*/,[,]/*FUL*/,[,]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[,]/*MCI*/,[,]/*MUD*/,[,]/*NEW*/,[1,3]/*NFO*/,[,]/*SOU*/,[1,1]/*TOT*/,[3,1]/*WHU*/,[,]/*WOL*/],
    /*LIV*/[equipe[12][0],[,]/*ARS*/,[2,0]/*AVL*/,[3,0]/*BOU*/,[2,0]/*BRE*/,[2,1]/*BHA*/,[2,1]/*CHE*/,[,]/*CRY*/,[,]/*EVE*/,[2,2]/*FUL*/,[,]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[2,0]/*MCI*/,[,]/*MUD*/,[,]/*NEW*/,[0,1]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/],
    /*MCI*/[equipe[13][0],[2,2]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[2,1]/*BRE*/,[,]/*BHA*/,[,]/*CHE*/,[,]/*CRY*/,[,]/*EVE*/,[3,2]/*FUL*/,[4,1]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[,]/*MCI*/,[1,2]/*MUD*/,[,]/*NEW*/,[3,0]/*NFO*/,[1,0]/*SOU*/,[0,4]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/],
    /*MUN*/[equipe[14][0],[,]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[2,1]/*BRE*/,[,]/*BHA*/,[1,1]/*CHE*/,[,]/*CRY*/,[4,0]/*EVE*/,[1,0]/*FUL*/,[,]/*IPS*/,[3,0]/*LEI*/,[0,3]/*LIV*/,[,]/*MCI*/,[,]/*MUD*/,[,]/*NEW*/,[2,3]/*NFO*/,[,]/*SOU*/,[0,3]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/],
    /*NEW*/[equipe[15][0],[1,0]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[0,1]/*BHA*/,[,]/*CHE*/,[,]/*CRY*/,[,]/*EVE*/,[,]/*FUL*/,[,]/*IPS*/,[4,0]/*LEI*/,[3,3]/*LIV*/,[1,1]/*MCI*/,[,]/*MUD*/,[,]/*NEW*/,[,]/*NFO*/,[1,0]/*SOU*/,[2,1]/*TOT*/,[0,2]/*WHU*/,[,]/*WOL*/],
    /*NFO*/[equipe[16][0],[,]/*ARS*/,[2,1]/*AVL*/,[1,1]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[,]/*CHE*/,[1,0]/*CRY*/,[,]/*EVE*/,[0,1]/*FUL*/,[1,0]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[,]/*MCI*/,[,]/*MUD*/,[1,3]/*NEW*/,[,]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[3,0]/*WHU*/,[1,1]/*WOL*/],
    /*SOU*/[equipe[17][0],[,]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[1,5]/*CHE*/,[,]/*CRY*/,[1,0]/*EVE*/,[,]/*FUL*/,[1,1]/*IPS*/,[2,3]/*LEI*/,[2,3]/*LIV*/,[,]/*MCI*/,[0,3]/*MUD*/,[,]/*NEW*/,[0,1]/*NFO*/,[,]/*SOU*/,[0,5]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/],
    /*TOT*/[equipe[18][0],[0,1]/*ARS*/,[4,1]/*AVL*/,[,]/*BOU*/,[3,1]/*BRE*/,[,]/*BHA*/,[3,4]/*CHE*/,[,]/*CRY*/,[4,0]/*EVE*/,[1,1]/*FUL*/,[1,2]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[,]/*MCI*/,[,]/*MUD*/,[,]/*NEW*/,[,]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[4,1]/*WHU*/,[,]/*WOL*/],
    /*WHU*/[equipe[19][0],[2,5]/*ARS*/,[1,2]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[0,3]/*CHE*/,[,]/*CRY*/,[0,0]/*EVE*/,[,]/*FUL*/,[4,1]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[1,3]/*MCI*/,[2,1]/*MUD*/,[,]/*NEW*/,[,]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[2,1]/*WOL*/],
    /*WOL*/[equipe[20][0],[,]/*ARS*/,[,]/*AVL*/,[2,4]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[2,6]/*CHE*/,[2,2]/*CRY*/,[,]/*EVE*/,[,]/*FUL*/,[1,2]/*IPS*/,[,]/*LEI*/,[1,2]/*LIV*/,[1,2]/*MCI*/,[,]/*MUD*/,[1,2]/*NEW*/,[,]/*NFO*/,[2,0]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/]
]

// Adicionar as partidas
//tabelaRR[12][13] = [2,0]

//

var listagem0 = [
    [0/*índice*/,0/*escudo*/,0/*nome*/,1000/*Pts*/,0/*V*/,0/*E*/,0/*D*/,0/*G*/,0/*G+*/,0/*G-*/,0/*J*/,0],
    [1,equipe[1][1],equipe[1][0],0,0,0,0,0,0,0,0,equipe[1][3]],
    [2,equipe[2][1],equipe[2][0],0,0,0,0,0,0,0,0,equipe[2][3]],
    [3,equipe[3][1],equipe[3][0],0,0,0,0,0,0,0,0,equipe[3][3]],
    [4,equipe[4][1],equipe[4][0],0,0,0,0,0,0,0,0,equipe[4][3]],
    [5,equipe[5][1],equipe[5][0],0,0,0,0,0,0,0,0,equipe[5][3]],
    [6,equipe[6][1],equipe[6][0],0,0,0,0,0,0,0,0,equipe[6][3]],
    [7,equipe[7][1],equipe[7][0],0,0,0,0,0,0,0,0,equipe[7][3]],
    [8,equipe[8][1],equipe[8][0],0,0,0,0,0,0,0,0,equipe[8][3]],
    [9,equipe[9][1],equipe[9][0],0,0,0,0,0,0,0,0,equipe[9][3]],
    [10,equipe[10][1],equipe[10][0],0,0,0,0,0,0,0,0,equipe[10][3]],
    [11,equipe[11][1],equipe[11][0],0,0,0,0,0,0,0,0,equipe[11][3]],
    [12,equipe[12][1],equipe[12][0],0,0,0,0,0,0,0,0,equipe[12][3]],
    [13,equipe[13][1],equipe[13][0],0,0,0,0,0,0,0,0,equipe[13][3]],
    [14,equipe[14][1],equipe[14][0],0,0,0,0,0,0,0,0,equipe[14][3]],
    [15,equipe[15][1],equipe[15][0],0,0,0,0,0,0,0,0,equipe[15][3]],
    [16,equipe[16][1],equipe[16][0],0,0,0,0,0,0,0,0,equipe[16][3]],
    [17,equipe[17][1],equipe[17][0],0,0,0,0,0,0,0,0,equipe[17][3]],
    [18,equipe[18][1],equipe[18][0],0,0,0,0,0,0,0,0,equipe[18][3]],
    [19,equipe[19][1],equipe[19][0],0,0,0,0,0,0,0,0,equipe[19][3]],
    [20,equipe[20][1],equipe[20][0],0,0,0,0,0,0,0,0,equipe[20][3]]
]
function lerlistagem(){
    for(let i=1;i<=20;i++){
        for(let j=1;j<=20;j++){
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
    for(let h=1;h<=20;h++){
        listagem[h][0] = h
    }
}
function compara(alfa, omega){
    if(omega[3]==alfa[3]){
        if(omega[7]==alfa[7]){
            return omega[8]-alfa[8]
        }
        return omega[7]-alfa[7]
    }else{
        return omega[3]-alfa[3]
    }
}
function alfabetica(alfa, omega){
    return alfa[11]-omega[11]
}
function inserirdados(){
    for(let k=1;k<=20;k++){
        document.getElementsByClassName('pos')[k].innerText = listagem[k][0]
        document.getElementsByClassName('crest')[k].src = `imagem/${listagem[k][1]}`
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