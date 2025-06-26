var equipe = [
    [`UEFA`,`http://oraculo.wederson.com/fifa/imagem/europa.png`,,0],
    
    [`Inglaterra`,`http://oraculo.wederson.com/fifa/imagem/inglaterra.png`,
        {a:1.3,d:1.3,rat:1985},1],
    [`Austria`,`http://oraculo.wederson.com/fifa/imagem/austria.webp`,
        {a:1.3,d:1.3,rat:1845},2],
    [`Bélgica`,`http://oraculo.wederson.com/fifa/imagem/belgica.webp`,
        {a:1.3,d:1.3,rat:1847},3],
    [`Croácia`,`http://oraculo.wederson.com/fifa/imagem/croacia.webp`,
        {a:1.3,d:1.3,rat:1927},4],
    [`Dinamarca`,`http://oraculo.wederson.com/fifa/imagem/dinamarca.webp`,
        {a:1.3,d:1.3,rat:1865},5],
    [`Espanha`,`http://oraculo.wederson.com/fifa/imagem/espanha.webp`,
        {a:1.3,d:1.3,rat:2057},6],
    [`França`,`http://oraculo.wederson.com/fifa/imagem/franca.webp`,
        {a:1.3,d:1.3,rat:2056},7],
    [`Grécia`,`http://oraculo.wederson.com/fifa/imagem/grecia.webp`,
        {a:1.3,d:1.3,rat:1839},8],
    [`Alemanha`,`http://oraculo.wederson.com/fifa/imagem/alemanha.webp`,
        {a:1.3,d:1.3,rat:1914},9],
    [`Itália`,`http://oraculo.wederson.com/fifa/imagem/italia.webp`,
        {a:1.3,d:1.3,rat:1881},10],
    [`Neerlândia`,`http://oraculo.wederson.com/fifa/imagem/neerlandia.webp`,
        {a:1.3,d:1.3,rat:1976},11],
    [`Noruega`,`http://oraculo.wederson.com/fifa/imagem/noruega.webp`,
        {a:1.3,d:1.3,rat:1866},12],
    [`Portugal`,`http://oraculo.wederson.com/fifa/imagem/portugal.webp`,
        {a:1.3,d:1.3,rat:2030},13],
    [`Sérvia`,`http://oraculo.wederson.com/fifa/imagem/servia.webp`,
        {a:1.3,d:1.3,rat:1838},14],
    [`Suécia`,`http://oraculo.wederson.com/fifa/imagem/suecia.webp`,
        {a:1.3,d:1.3,rat:1761},15],
    [`Suíça`,`http://oraculo.wederson.com/fifa/imagem/suica.png`,
        {a:1.3,d:1.3,rat:1845},16],
    [`Turquia`,`http://oraculo.wederson.com/fifa/imagem/turquia.webp`,
        {a:1.3,d:1.3,rat:1836},17],
    [`Ucrânia`,`http://oraculo.wederson.com/fifa/imagem/ucrania.webp`,
        {a:1.3,d:1.3,rat:1799},18]
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