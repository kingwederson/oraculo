function ln(num){
    return Math.log(num)
}
function e(num){
    return Math.exp(num)
}
function fact(num) {
    if (num <= 1) {
        return 1; // O fatorial de 0 ou 1 é 1
    } else {
        let car = 1;
        for (let i = 1; i <= num; i++) {
            car = car * i;
        }
        return car;
    }
}
function poissonP(lamb,bet){
    return (e(-lamb)*(lamb**bet))/fact(bet)
}

let PTG = []
function criarTPG(){
    for(let f = 1;f<equipe.length;f++){
        PTG[0].push(equipe[f][0])
    }
    for(let g = 1;g<equipe.length;g++){
        PTG.push([equipe[g][0]])
    }
    for(let h = 1;h<equipe.length;h++){
        for(let s=1;s<equipe.length;s++){
            PTG[h].push([,])
        }
    }
}

function golmarcado(media){
    let sorte = Math.random()
    let accu = [,,,,,,,,,,,,,,,,,,,,]
    let maxgol = accu.length-1
    let stop = false
    for(let g=0;stop==false;g++){
        if(g==0){
            accu[g] = poissonP(media,g)
        }else{
            accu[g] = poissonP(media,g)+accu[g-1]
        }
        if(sorte<accu[g] || g==maxgol){
            stop = true
            return g
        }
    }
}