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