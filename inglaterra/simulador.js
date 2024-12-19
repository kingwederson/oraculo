function simular(){
    for(let l=1; l<=20;l++){
        for(let m=1; m<=20;m++){
            if(l!=m && (tabelaRR[l][m][0] == null && tabelaRR[l][m][1] == null)){
                casa = (equipe[l][2].a+equipe[m][2].d)/2
                fora = (equipe[m][2].a+equipe[l][2].d)/2
                tabelaRR[l][m][0] = golmarcado(casa+0.25)
                tabelaRR[l][m][1] = golmarcado(fora-0.25)
            }
        }
    }
}