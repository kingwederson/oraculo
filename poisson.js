function ln(num){
    return Math.log(num)
}
function e(num){
    return Math.exp(num)
}

let fact = [1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368000,20922789888000,355687428096000,6402373705728000,121645100408832000,2432902008176640000]

function aleatorio(origem) {
    if(origem==true){
        let array = new Uint32Array(1);
        crypto.getRandomValues(array);
        return array[0] / 4294967296;
    }else{
        return Math.random()
    }
}

function poissonP(lamb,bet){
    return (e(-lamb)*(lamb**bet))/fact[bet]
}

let PTG = []
function criarPTG(){
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
    let sorte = aleatorio(false)
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