var equipe = [
    [`CONAM`,`http://oraculo.wederson.com/fifa/imagem/americas.png`,,0],
    
    [`América`,`http://oraculo.wederson.com/fifa/imagem/america.webp`,
        {a:1.3,d:1.3,rat:1802},56],
    [`Argentina`,`http://oraculo.wederson.com/fifa/imagem/argentina.webp`,
        {a:1.3,d:1.3,rat:2132},57],
    [`Bolivia`,`http://oraculo.wederson.com/fifa/imagem/bolivia.webp`,
        {a:1.3,d:1.3,rat:1665},58],
    [`Brasil`,`http://oraculo.wederson.com/fifa/imagem/brasil.png`,
        {a:1.3,d:1.3,rat:2002},59],
    [`Canadá`,`http://oraculo.wederson.com/fifa/imagem/canada.webp`,
        {a:1.3,d:1.3,rat:1779},60],
    [`Chile`,`http://oraculo.wederson.com/fifa/imagem/chile.webp`,
        {a:1.3,d:1.3,rat:1688},61],
    [`Colômbia`,`http://oraculo.wederson.com/fifa/imagem/colombia.webp`,
        {a:1.3,d:1.3,rat:1952},62],
    [`Costa Rica`,`http://oraculo.wederson.com/fifa/imagem/costarica.webp`,
        {a:1.3,d:1.3,rat:1684},63],
    [`Equador`,`http://oraculo.wederson.com/fifa/imagem/equador.webp`,
        {a:1.3,d:1.3,rat:1906},64],
    [`Guatemala`,`http://oraculo.wederson.com/fifa/imagem/guatemala.webp`,
        {a:1.3,d:1.3,rat:1503},65],
    [`Honduras`,`http://oraculo.wederson.com/fifa/imagem/honduras.webp`,
        {a:1.3,d:1.3,rat:1570},66],
    [`Jamaica`,`http://oraculo.wederson.com/fifa/imagem/jamaica.webp`,
        {a:1.3,d:1.3,rat:1570},67],
    [`México`,`http://oraculo.wederson.com/fifa/imagem/mexico.webp`,
        {a:1.3,d:1.3,rat:1811},68],
    [`Panamá`,`http://oraculo.wederson.com/fifa/imagem/panama.webp`,
        {a:1.3,d:1.3,rat:1751},69],
    [`Paraguai`,`http://oraculo.wederson.com/fifa/imagem/paraguai.webp`,
        {a:1.3,d:1.3,rat:1824},70],
    [`Peru`,`http://oraculo.wederson.com/fifa/imagem/peru.webp`,
        {a:1.3,d:1.3,rat:1744},71],
    [`Uruguai`,`http://oraculo.wederson.com/fifa/imagem/uruguai.webp`,
        {a:1.3,d:1.3,rat:1902},72],
    [`Venezuela`,`http://oraculo.wederson.com/fifa/imagem/venezuela.webp`,
        {a:1.3,d:1.3,rat:1746},73],
    [`Curacao`,`http://oraculo.wederson.com/fifa/imagem/curacao.webp`,
        {a:1.3,d:1.3,rat:1412},74],
    [`El Salvador`,`http://oraculo.wederson.com/fifa/imagem/elsalvador.webp`,
        {a:1.3,d:1.3,rat:1369},75],
]

var tabelaRRinicial = [[equipe[0][0]]]

function criarRR(){
    for(let r = 1;r<equipe.length;r++){
        tabelaRRinicial[0].push(equipe[r][0])
    }
    for(let r = 1;r<equipe.length;r++){
        tabelaRRinicial.push([equipe[r][0]])
    }
    for(let r = 1;r<equipe.length;r++){
        for(let s=1;s<equipe.length;s++){
            tabelaRRinicial[r].push([,])
        }
    }
}
/*
var tabelaRRinicial = [[equipe[0][0]]]
for(let r = 1;r<=1+equipe.length;r++){
    tabelaRRinicial[0].push(equipe[r][0])
}
for(let r = 1;r<=1+equipe.length;r++){
    tabelaRRinicial.push(equipe[r][0])
}
for(let r = 1;r<=1+equipe.length;r++){
    for(let s=1;s<=1+equipe.length;s++){
        tabelaRRinicial[r].push([,])
    }
}
*/