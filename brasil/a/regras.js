function compara(alfa, omega){
    if(omega[3]==alfa[3]){
        if(omega[4]==alfa[4]){
            if(omega[7]==alfa[7]){
                if(omega[8]==alfa[8]){
                    console.log('empatou')
                    return Math.random()-0.5
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