function compara(alfa, omega){
    if(omega[3]==alfa[3]){
        if(omega[4]==alfa[4]){
            if(omega[7]==alfa[7]){
                if(omega[8]==alfa[8]){
                    if(omega[24]==alfa[24]){
                        if(omega[25]==alfa[25]){
                            console.log(`${omega[3]} | ${omega[4]} ${omega[5]} ${omega[6]} | ${omega[7]} ${omega[8]} ${omega[9]} || ${omega[11]} ${omega[12]} ${omega[13]} | ${omega[14]} ${omega[15]} ${omega[16]} || ${omega[19]} ${omega[20]} ${omega[21]} | ${omega[22]} ${omega[23]} ${omega[24]} \n${alfa[3]} | ${alfa[4]} ${alfa[5]} ${alfa[6]} | ${alfa[7]} ${alfa[8]} ${alfa[9]} || ${alfa[11]} ${alfa[12]} ${alfa[13]} | ${alfa[14]} ${alfa[15]} ${alfa[16]} || ${alfa[19]} ${alfa[20]} ${alfa[21]} | ${alfa[22]} ${alfa[23]} ${alfa[24]}`)
                            return Math.random()-0.5
                        }
                        return alfa[25]-omega[25]
                    }
                    return omega[24]-alfa[24]
                }
                return omega[8]-alfa[8]
            }
            return omega[7]-alfa[7]
        }else{
            return omega[4]-alfa[4]
        }
    }else{
        return omega[3]-alfa[3]
    }
}