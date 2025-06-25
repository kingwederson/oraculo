var equipe = [
    [`CAF`,`http://oraculo.wederson.com/fifa/imagem/afr.png`,,0],
    
    [`Senegal`,`http://oraculo.wederson.com/fifa/imagem/senegal.webp`,
        {a:1.3,d:1.3,rat:1785},2],
    [`Angola`,`http://oraculo.wederson.com/fifa/imagem/angola.webp`,
        {a:1.3,d:1.3,rat:1607},6],
    [`Mali`,`http://oraculo.wederson.com/fifa/imagem/mali.webp`,
        {a:1.3,d:1.3,rat:1603},7],
    [`Camarões`,`http://oraculo.wederson.com/fifa/imagem/camaroes.webp`,
        {a:1.3,d:1.3,rat:1596},8],
    [`Costa do Marfim`,`http://oraculo.wederson.com/fifa/imagem/costadomarfim.webp`,
        {a:1.3,d:1.3,rat:1589},9],
    [`Zaire`,`http://oraculo.wederson.com/fifa/imagem/zaire.webp`,
        {a:1.3,d:1.3,rat:1586},10],
    [`Nigéria`,`http://oraculo.wederson.com/fifa/imagem/nigeria.webp`,
        {a:1.3,d:1.3,rat:1579},11],
    [`África do Sul`,`http://oraculo.wederson.com/fifa/imagem/africadosul.webp`,
        {a:1.3,d:1.3,rat:1526},12],
    [`Cabo Verde`,`http://oraculo.wederson.com/fifa/imagem/caboverde.webp`,
        {a:1.3,d:1.3,rat:1520},13],
    [`Burquina Faso`,`http://oraculo.wederson.com/fifa/imagem/burquina.webp`,
        {a:1.3,d:1.3,rat:1504},14],
    [`Guiné Equatorial`,`http://oraculo.wederson.com/fifa/imagem/guineeq.webp`,
        {a:1.3,d:1.3,rat:1482},15],
    [`Gana`,`http://oraculo.wederson.com/fifa/imagem/gana.webp`,
        {a:1.3,d:1.3,rat:1479},16],
    [`Gabão`,`http://oraculo.wederson.com/fifa/imagem/gabao.webp`,
        {a:1.3,d:1.3,rat:1463},17],
    [`Guiné`,`http://oraculo.wederson.com/fifa/imagem/guine.webp`,
        {a:1.3,d:1.3,rat:1463},18],
    [`Moçambique`,`http://oraculo.wederson.com/fifa/imagem/mocambique.webp`,
        {a:1.3,d:1.3,rat:1435},19],
    [`Comoros`,`http://oraculo.wederson.com/fifa/imagem/comoros.webp`,
        {a:1.3,d:1.3,rat:1427},20],
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