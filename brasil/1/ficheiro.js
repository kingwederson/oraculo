var equipe = [
    [`brasileirão Série A`,`https://oraculo.wederson.net.br/brasil/imagem/div1.png`,,0],// 0
    [`Athlético`,`https://oraculo.wederson.net.br/brasil/imagem/athletico.png`,{a:40/38,d:46/38},1], // 1
    [`Atlético-GO`,`https://oraculo.wederson.net.br/brasil/imagem/atleticogo.png`,{a:29/38,d:58/38},2],// 2
    [`Atlético`,`https://oraculo.wederson.net.br/brasil/imagem/atletico.png`,{a:47/38,d:54/38},3],// 3
    [`Bahia`,`https://oraculo.wederson.net.br/brasil/imagem/bahia.png`,{a:49/38,d:49/38},4],// 4
    [`Botafogo`,`https://oraculo.wederson.net.br/brasil/imagem/botafogo.png`,{a:59/38,d:29/38},5],// 5
    [`Corinthians`,`https://oraculo.wederson.net.br/brasil/imagem/corinthians.png`,{a:54/38,d:45/38},6],// 6
    [`Criciúma`,`https://oraculo.wederson.net.br/brasil/imagem/criciuma.png`,{a:42/38,d:61/38},7],// 7
    [`Cruzeiro`,`https://oraculo.wederson.net.br/brasil/imagem/cruzeiro.png`,{a:43/38,d:41/38},8],// 8
    [`Cuiabá`,`https://oraculo.wederson.net.br/brasil/imagem/cuiaba.png`,{a:29/38,d:49/38},9],// 9
    [`Flamengo`,`https://oraculo.wederson.net.br/brasil/imagem/flamengo.png`,{a:61/38,d:42/38},10],// 10
    [`Fluminense`,`https://oraculo.wederson.net.br/brasil/imagem/fluminense.png`,{a:33/38,d:39/38},11],// 11
    [`Fortaleza`,`https://oraculo.wederson.net.br/brasil/imagem/fortaleza.png`,{a:53/38,d:39/38},12],// 12
    [`Grêmio`,`https://oraculo.wederson.net.br/brasil/imagem/gremio.png`,{a:44/38,d:50/38},13],// 13
    [`Internacional`,`https://oraculo.wederson.net.br/brasil/imagem/internacional.png`,{a:53/38,d:36/38},14],// 14
    [`Juventude`,`https://oraculo.wederson.net.br/brasil/imagem/juventude.png`,{a:48/38,d:59/38},15],// 15
    [`Palmeiras`,`https://oraculo.wederson.net.br/brasil/imagem/palmeiras.png`,{a:60/38,d:33/38},16],// 16
    [`Red Bull`,`https://oraculo.wederson.net.br/brasil/imagem/redbull.png`,{a:44/38,d:48/38},17],// 17
    [`São Paulo`,`https://oraculo.wederson.net.br/brasil/imagem/saopaulo.png`,{a:53/38,d:43/38},18],// 18
    [`Vasco`,`https://oraculo.wederson.net.br/brasil/imagem/vasco.png`,{a:43/38,d:46/38},19],// 19
    [`Vitória`,`https://oraculo.wederson.net.br/brasil/imagem/vitoria.png`,{a:45/38,d:52/38},20]// 20
]

var tabelaRRinicial = [
    [equipe[0][0],equipe[1][0],equipe[2][0],equipe[3][0],equipe[4][0],equipe[5][0],equipe[6][0],equipe[7][0],equipe[8][0],equipe[9][0],equipe[10][0],equipe[11][0],equipe[12][0],equipe[13][0],equipe[14][0],equipe[15][0],equipe[16][0],equipe[17][0],equipe[18][0],equipe[19][0],equipe[20][0]],
    /*ARS*/[equipe[1][0],[,]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[,]/*CHE*/,[,]/*CRY*/,[,]/*EVE*/,[,]/*FUL*/,[,]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[,]/*MCI*/,[,]/*MUD*/,[,]/*NEW*/,[,]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/],
    /*AVL*/[equipe[2][0],[,]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[,]/*CHE*/,[,]/*CRY*/,[,]/*EVE*/,[,]/*FUL*/,[,]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[,]/*MCI*/,[,]/*MUD*/,[,]/*NEW*/,[,]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/],
    /*BOU*/[equipe[3][0],[,]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[,]/*CHE*/,[,]/*CRY*/,[,]/*EVE*/,[,]/*FUL*/,[,]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[,]/*MCI*/,[,]/*MUD*/,[,]/*NEW*/,[,]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/],
    /*BRE*/[equipe[4][0],[,]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[,]/*CHE*/,[,]/*CRY*/,[,]/*EVE*/,[,]/*FUL*/,[,]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[,]/*MCI*/,[,]/*MUD*/,[,]/*NEW*/,[,]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/],
    /*BHA*/[equipe[5][0],[,]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[,]/*CHE*/,[,]/*CRY*/,[,]/*EVE*/,[,]/*FUL*/,[,]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[,]/*MCI*/,[,]/*MUD*/,[,]/*NEW*/,[,]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/],
    /*CHE*/[equipe[6][0],[,]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[,]/*CHE*/,[,]/*CRY*/,[,]/*EVE*/,[,]/*FUL*/,[,]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[,]/*MCI*/,[,]/*MUD*/,[,]/*NEW*/,[,]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/],
    /*CRY*/[equipe[7][0],[,]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[,]/*CHE*/,[,]/*CRY*/,[,]/*EVE*/,[,]/*FUL*/,[,]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[,]/*MCI*/,[,]/*MUD*/,[,]/*NEW*/,[,]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/],
    /*EVE*/[equipe[8][0],[,]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[,]/*CHE*/,[,]/*CRY*/,[,]/*EVE*/,[,]/*FUL*/,[,]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[,]/*MCI*/,[,]/*MUD*/,[,]/*NEW*/,[,]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/],
    /*FUL*/[equipe[9][0],[,]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[,]/*CHE*/,[,]/*CRY*/,[,]/*EVE*/,[,]/*FUL*/,[,]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[,]/*MCI*/,[,]/*MUD*/,[,]/*NEW*/,[,]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/],
    /*IPS*/[equipe[10][0],[,]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[,]/*CHE*/,[,]/*CRY*/,[,]/*EVE*/,[,]/*FUL*/,[,]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[,]/*MCI*/,[,]/*MUD*/,[,]/*NEW*/,[,]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/],
    /*LEI*/[equipe[11][0],[,]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[,]/*CHE*/,[,]/*CRY*/,[,]/*EVE*/,[,]/*FUL*/,[,]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[,]/*MCI*/,[,]/*MUD*/,[,]/*NEW*/,[,]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/],
    /*LIV*/[equipe[12][0],[,]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[,]/*CHE*/,[,]/*CRY*/,[,]/*EVE*/,[,]/*FUL*/,[,]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[,]/*MCI*/,[,]/*MUD*/,[,]/*NEW*/,[,]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/],
    /*MCI*/[equipe[13][0],[,]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[,]/*CHE*/,[,]/*CRY*/,[,]/*EVE*/,[,]/*FUL*/,[,]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[,]/*MCI*/,[,]/*MUD*/,[,]/*NEW*/,[,]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/],
    /*MUN*/[equipe[14][0],[,]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[,]/*CHE*/,[,]/*CRY*/,[,]/*EVE*/,[,]/*FUL*/,[,]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[,]/*MCI*/,[,]/*MUD*/,[,]/*NEW*/,[,]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/],
    /*NEW*/[equipe[15][0],[,]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[,]/*CHE*/,[,]/*CRY*/,[,]/*EVE*/,[,]/*FUL*/,[,]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[,]/*MCI*/,[,]/*MUD*/,[,]/*NEW*/,[,]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/],
    /*NFO*/[equipe[16][0],[,]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[,]/*CHE*/,[,]/*CRY*/,[,]/*EVE*/,[,]/*FUL*/,[,]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[,]/*MCI*/,[,]/*MUD*/,[,]/*NEW*/,[,]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/],
    /*SOU*/[equipe[17][0],[,]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[,]/*CHE*/,[,]/*CRY*/,[,]/*EVE*/,[,]/*FUL*/,[,]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[,]/*MCI*/,[,]/*MUD*/,[,]/*NEW*/,[,]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/],
    /*TOT*/[equipe[18][0],[,]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[,]/*CHE*/,[,]/*CRY*/,[,]/*EVE*/,[,]/*FUL*/,[,]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[,]/*MCI*/,[,]/*MUD*/,[,]/*NEW*/,[,]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/],
    /*WHU*/[equipe[19][0],[,]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[,]/*CHE*/,[,]/*CRY*/,[,]/*EVE*/,[,]/*FUL*/,[,]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[,]/*MCI*/,[,]/*MUD*/,[,]/*NEW*/,[,]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/],
    /*WOL*/[equipe[20][0],[,]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[,]/*CHE*/,[,]/*CRY*/,[,]/*EVE*/,[,]/*FUL*/,[,]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[,]/*MCI*/,[,]/*MUD*/,[,]/*NEW*/,[,]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/]
]