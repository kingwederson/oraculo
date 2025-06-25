var equipe = [
    [`UEFA`,`http://oraculo.wederson.com/fifa/imagem/europa.png`,,0],
    
    [`Alemanha`,`http://oraculo.wederson.com/fifa/imagem/alemanha.webp`,
        {a:1.3,d:1.3,rat:1914},2],
    [`Austria`,`http://oraculo.wederson.com/fifa/imagem/austria.webp`,
        {a:1.3,d:1.3,rat:1845},5],
    [`Bélgica`,`http://oraculo.wederson.com/fifa/imagem/belgica.webp`,
        {a:1.3,d:1.3,rat:1847},8],
    [`Croácia`,`http://oraculo.wederson.com/fifa/imagem/croacia.webp`,
        {a:1.3,d:1.3,rat:1927},13],
    [`Dinamarca`,`http://oraculo.wederson.com/fifa/imagem/dinamarca.webp`,
        {a:1.3,d:1.3,rat:1865},14],
    [`Espanha`,`http://oraculo.wederson.com/fifa/imagem/espanha.webp`,
        {a:1.3,d:1.3,rat:2057},18],
    [`França`,`http://oraculo.wederson.com/fifa/imagem/franca.webp`,
        {a:1.3,d:1.3,rat:2056},22],
    [`Grécia`,`http://oraculo.wederson.com/fifa/imagem/grecia.webp`,
        {a:1.3,d:1.3,rat:1839},26],
    [`Inglaterra`,`http://oraculo.wederson.com/fifa/imagem/inglaterra.png`,
        {a:1.3,d:1.3,rat:1985},28],
    [`Itália`,`http://oraculo.wederson.com/fifa/imagem/italia.webp`,
        {a:1.3,d:1.3,rat:1881},33],
    [`Neerlândia`,`http://oraculo.wederson.com/fifa/imagem/neerlandia.webp`,
        {a:1.3,d:1.3,rat:1976},43],
    [`Noruega`,`http://oraculo.wederson.com/fifa/imagem/noruega.webp`,
        {a:1.3,d:1.3,rat:1866},44],
    [`Portugal`,`http://oraculo.wederson.com/fifa/imagem/portugal.webp`,
        {a:1.3,d:1.3,rat:2030},46],
    [`Sérvia`,`http://oraculo.wederson.com/fifa/imagem/servia.webp`,
        {a:1.3,d:1.3,rat:1838},50],
    [`Suécia`,`http://oraculo.wederson.com/fifa/imagem/suecia.webp`,
        {a:1.3,d:1.3,rat:1761},51],
    [`Suíça`,`http://oraculo.wederson.com/fifa/imagem/suica.png`,
        {a:1.3,d:1.3,rat:1845},52],
    [`Turquia`,`http://oraculo.wederson.com/fifa/imagem/turquia.webp`,
        {a:1.3,d:1.3,rat:1836},54],
    [`Ucrânia`,`http://oraculo.wederson.com/fifa/imagem/ucrania.webp`,
        {a:1.3,d:1.3,rat:1799},55]
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