var equipe = [
    [`CAF`,`http://oraculo.wederson.com/fifa/imagem/afr.png`,,0],

    [`Marrocos`,`http://oraculo.wederson.com/fifa/imagem/marrocos.webp`,
        {a:1.3,d:1.3,rat:1813},167],    
    [`Senegal`,`http://oraculo.wederson.com/fifa/imagem/senegal.webp`,
        {a:1.3,d:1.3,rat:1785},168],
    [`Argélia`,`http://oraculo.wederson.com/fifa/imagem/argelia.webp`,
        {a:1.3,d:1.3,rat:1707},169],
    [`Egito`,`http://oraculo.wederson.com/fifa/imagem/egito.webp`,
        {a:1.3,d:1.3,rat:1768},170],
    [`Tunísia`,`http://oraculo.wederson.com/fifa/imagem/tunisia.webp`,
        {a:1.3,d:1.3,rat:1615},171],
    [`Angola`,`http://oraculo.wederson.com/fifa/imagem/angola.webp`,
        {a:1.3,d:1.3,rat:1607},172],
    [`Mali`,`http://oraculo.wederson.com/fifa/imagem/mali.webp`,
        {a:1.3,d:1.3,rat:1603},173],
    [`Camarões`,`http://oraculo.wederson.com/fifa/imagem/camaroes.webp`,
        {a:1.3,d:1.3,rat:1596},174],
    [`Costa do Marfim`,`http://oraculo.wederson.com/fifa/imagem/costadomarfim.webp`,
        {a:1.3,d:1.3,rat:1589},175],
    [`Zaire`,`http://oraculo.wederson.com/fifa/imagem/zaire.webp`,
        {a:1.3,d:1.3,rat:1586},176],
    [`Nigéria`,`http://oraculo.wederson.com/fifa/imagem/nigeria.webp`,
        {a:1.3,d:1.3,rat:1579},177],
    [`África do Sul`,`http://oraculo.wederson.com/fifa/imagem/africadosul.webp`,
        {a:1.3,d:1.3,rat:1526},178],
    [`Cabo Verde`,`http://oraculo.wederson.com/fifa/imagem/caboverde.webp`,
        {a:1.3,d:1.3,rat:1520},179],
    [`Burquina Faso`,`http://oraculo.wederson.com/fifa/imagem/burquina.webp`,
        {a:1.3,d:1.3,rat:1504},180],
    [`Guiné Equatorial`,`http://oraculo.wederson.com/fifa/imagem/guineeq.webp`,
        {a:1.3,d:1.3,rat:1482},181],
    [`Gana`,`http://oraculo.wederson.com/fifa/imagem/gana.webp`,
        {a:1.3,d:1.3,rat:1479},182],
    [`Moçambique`,`http://oraculo.wederson.com/fifa/imagem/mocambique.webp`,
        {a:1.3,d:1.3,rat:1435},183],
    [`Comoros`,`http://oraculo.wederson.com/fifa/imagem/comoros.webp`,
        {a:1.3,d:1.3,rat:1427},184],
    [`Sudão`,`http://oraculo.wederson.com/fifa/imagem/sudao.webp`,
        {a:1.3,d:1.3,rat:1396},185],
    [`Líbia`,`http://oraculo.wederson.com/fifa/imagem/libia.webp`,
        {a:1.3,d:1.3,rat:1387},186],
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