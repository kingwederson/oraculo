var equipe = [
    [`AFC`,`http://oraculo.wederson.com/fifa/imagem/asia.png`,,0],
    
    [`Macau`,`http://oraculo.wederson.com/fifa/imagem/macau.webp`,
        {a:1.3,d:1.3,rat:594},147],
    [`Nova Zelândia`,`http://oraculo.wederson.com/fifa/imagem/zelandia.webp`,
        {a:1.3,d:1.3,rat:432},148],
    [`Brunei`,`http://oraculo.wederson.com/fifa/imagem/brunei.png`,
        {a:1.3,d:1.3,rat:668},149],
    [`Butão`,`http://oraculo.wederson.com/fifa/imagem/butao.webp`,
        {a:1.3,d:1.3,rat:619},150],
    [`Nova Caledônia`,`http://oraculo.wederson.com/fifa/imagem/caledonia.webp`,
        {a:1.3,d:1.3,rat:5},151],
    [`Fiji`,`http://oraculo.wederson.com/fifa/imagem/fiji.png`,
        {a:1.3,d:1.3,rat:5},152],
    [`Taiti`,`http://oraculo.wederson.com/fifa/imagem/taiti.webp`,
        {a:1.3,d:1.3,rat:5},153],
    [`Il. Salomão`,`http://oraculo.wederson.com/fifa/imagem/salomao.webp`,
        {a:1.3,d:1.3,rat:5},154],
    [`Papua N.G.`,`http://oraculo.wederson.com/fifa/imagem/papua.png`,
        {a:1.3,d:1.3,rat:5},155],
    [`Vanuatu`,`http://oraculo.wederson.com/fifa/imagem/vanuatu.webp`,
        {a:1.3,d:1.3,rat:5},156],
    [`Tuvalu`,`http://oraculo.wederson.com/fifa/imagem/tuvalu.webp`,
        {a:1.3,d:1.3,rat:5},157],
    [`Samoa`,`http://oraculo.wederson.com/fifa/imagem/samoa.webp`,
        {a:1.3,d:1.3,rat:5},158],
    [`Il. Cook`,`http://oraculo.wederson.com/fifa/imagem/cook.webp`,
        {a:1.3,d:1.3,rat:5},159],
    [`Kiribati`,`http://oraculo.wederson.com/fifa/imagem/kiribati.webp`,
        {a:1.3,d:1.3,rat:5},160],
    [`Tonga`,`http://oraculo.wederson.com/fifa/imagem/tonga.webp`,
        {a:1.3,d:1.3,rat:5},161],
    [`Samoa Oc.`,`http://oraculo.wederson.com/fifa/imagem/samoaoc.webp`,
        {a:1.3,d:1.3,rat:5},162],
    [`Timor-Leste`,`http://oraculo.wederson.com/fifa/imagem/timor.webp`,
        {a:1.3,d:1.3,rat:688},163],
    [`Timbete`,`http://oraculo.wederson.com/fifa/imagem/tibete.jpeg`,
        {a:1.3,d:1.3,rat:630},164],
    [`Curdistão`,`http://oraculo.wederson.com/fifa/imagem/curdistao.jpeg`,
        {a:1.3,d:1.3,rat:1425},165],
    [`Marianas do Norte`,`http://oraculo.wederson.com/fifa/imagem/mariana_norte.jpeg`,
        {a:1.3,d:1.3,rat:239},166],
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