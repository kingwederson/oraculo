function compara(alfa, omega){
    var omegacasa = typeof tabelaRR[omega[27]][alfa[27]][0] === "number" ? tabelaRR[omega[27]][alfa[27]][0] : 0;
    var omegafora = typeof tabelaRR[alfa[27]][omega[27]][1] === "number" ? tabelaRR[alfa[27]][omega[27]][1] : 0;
    var alfacasa = typeof tabelaRR[alfa[27]][omega[27]][0] === "number" ? tabelaRR[alfa[27]][omega[27]][0] : 0;
    var alfafora = typeof tabelaRR[omega[27]][alfa[27]][1] === "number" ? tabelaRR[omega[27]][alfa[27]][1] : 0;
    var confrontodireto = omegacasa + omegafora - alfacasa - alfafora;
    var golqualificado = omegafora - alfafora;
    if(omega[3]==alfa[3]){
        if(omega[4]==alfa[4]){
            if(omega[7]==alfa[7]){
                if(omega[8]==alfa[8]){
                    if(confrontodireto == 0){
                        if(golqualificado == 0){
                            //console.log('Desempate por sorteio:')
                            //console.log(confronto(omega[27],alfa[27]))
                            return Math.random()-0.5
                        }else{
                            //console.log('Desempate no gol qualificado:')
                            //console.log(confronto(omega[27],alfa[27]))
                            return golqualificado
                        }
                    }else{
                        //console.log('Desempate no confronto direto:')
                        //console.log(confronto(omega[27],alfa[27]))
                        return confrontodireto
                    }
                }else{
                    return omega[8]-alfa[8]
                }
            }else{
                return omega[7]-alfa[7]
            }
        }else{
            return omega[4]-alfa[4]
        }
    }else{
        return omega[3]-alfa[3]
    }
}