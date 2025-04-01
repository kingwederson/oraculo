function simular(){
    var rtl = [,];
    for(let l=1; l<equipe.length;l++){
        for(let m=1; m<equipe.length;m++){
            rtl = [e((equipe[l][2].rat-equipe[m][2].rat)/400),e((equipe[m][2].rat/equipe[l][2].rat)/400)]
            if(l!=m && (tabelaRR[l][m][0] == null && tabelaRR[l][m][1] == null)){
                casa = rtl[0]*(equipe[l][2].a+equipe[m][2].d)/2
                fora = rtl[1]*(equipe[m][2].a+equipe[l][2].d)/2
                tabelaRR[l][m][0] = golmarcado(casa*1.1)
                tabelaRR[l][m][1] = golmarcado(fora/1.1)
            }
        }
    }
}

function partida(mandante,visitante){
    casa = (equipe[mandante][2].a+equipe[visitante][2].d)/2
    fora = (equipe[visitante][2].a+equipe[mandante][2].d)/2
    return `${equipe[mandante][0]} ${golmarcado(casa*1.1)}-${golmarcado(fora/1.1)} ${equipe[visitante][0]}`
}
