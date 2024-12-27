var equipe = [
    [`brasileirão Série A`,`http://oraculo.wederson.net.br/brasil/imagem/div1.png`,,0],// 0
    [`Athlético`,`http://oraculo.wederson.net.br/brasil/imagem/athletico.png`,{a:40/38,d:46/38},1], // 1
    [`Atlético-GO`,`http://oraculo.wederson.net.br/brasil/imagem/atleticogo.png`,{a:29/38,d:58/38},2],// 2
    [`Atlético`,`http://oraculo.wederson.net.br/brasil/imagem/atletico.png`,{a:47/38,d:54/38},3],// 3
    [`Bahia`,`http://oraculo.wederson.net.br/brasil/imagem/bahia.png`,{a:49/38,d:49/38},4],// 4
    [`Botafogo`,`http://oraculo.wederson.net.br/brasil/imagem/botafogo.png`,{a:59/38,d:29/38},5],// 5
    [`Corinthians`,`http://oraculo.wederson.net.br/brasil/imagem/corinthians.png`,{a:54/38,d:45/38},6],// 6
    [`Criciúma`,`http://oraculo.wederson.net.br/brasil/imagem/criciuma.png`,{a:42/38,d:61/38},7],// 7
    [`Cruzeiro`,`http://oraculo.wederson.net.br/brasil/imagem/cruzeiro.png`,{a:43/38,d:41/38},8],// 8
    [`Cuiabá`,`http://oraculo.wederson.net.br/brasil/imagem/cuiaba.png`,{a:29/38,d:49/38},9],// 9
    [`Flamengo`,`http://oraculo.wederson.net.br/brasil/imagem/flamengo.png`,{a:61/38,d:42/38},10],// 10
    [`Fluminense`,`http://oraculo.wederson.net.br/brasil/imagem/fluminense.png`,{a:33/38,d:39/38},11],// 11
    [`Fortaleza`,`http://oraculo.wederson.net.br/brasil/imagem/fortaleza.png`,{a:53/38,d:39/38},12],// 12
    [`Grêmio`,`http://oraculo.wederson.net.br/brasil/imagem/gremio.png`,{a:44/38,d:50/38},13],// 13
    [`Internacional`,`http://oraculo.wederson.net.br/brasil/imagem/internacional.png`,{a:53/38,d:36/38},14],// 14
    [`Juventude`,`http://oraculo.wederson.net.br/brasil/imagem/juventude.png`,{a:48/38,d:59/38},15],// 15
    [`Palmeiras`,`http://oraculo.wederson.net.br/brasil/imagem/palmeiras.png`,{a:60/38,d:33/38},16],// 16
    [`Red Bull`,`http://oraculo.wederson.net.br/brasil/imagem/redbull.png`,{a:44/38,d:48/38},17],// 17
    [`São Paulo`,`http://oraculo.wederson.net.br/brasil/imagem/saopaulo.png`,{a:53/38,d:43/38},18],// 18
    [`Vasco`,`http://oraculo.wederson.net.br/brasil/imagem/vasco.png`,{a:43/38,d:46/38},19],// 19
    [`Vitória`,`http://oraculo.wederson.net.br/brasil/imagem/vitoria.png`,{a:45/38,d:42/38},20]// 20
]

var tabelaRRinicial = [
    [equipe[0][0],equipe[1][0],equipe[2][0],equipe[3][0],equipe[4][0],equipe[5][0],equipe[6][0],equipe[7][0],equipe[8][0],equipe[9][0],equipe[10][0],equipe[11][0],equipe[12][0],equipe[13][0],equipe[14][0],equipe[15][0],equipe[16][0],equipe[17][0],equipe[18][0],equipe[19][0],equipe[20][0]],
    /*ARS*/[equipe[1][0],[,]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[1,1]/*BHA*/,[,]/*CHE*/,[,]/*CRY*/,[0,0]/*EVE*/,[,]/*FUL*/,[,]/*IPS*/,[4,2]/*LEI*/,[2,2]/*LIV*/,[,]/*MCI*/,[2,0]/*MUD*/,[,]/*NEW*/,[3,0]/*NFO*/,[3,1]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[2,0]/*WOL*/],
    /*AVL*/[equipe[2][0],[0,2]/*ARS*/,[,]/*AVL*/,[1,1]/*BOU*/,[3,1]/*BRE*/,[,]/*BHA*/,[,]/*CHE*/,[2,2]/*CRY*/,[3,2]/*EVE*/,[,]/*FUL*/,[,]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[2,1]/*MCI*/,[0,0]/*MUD*/,[,]/*NEW*/,[,]/*NFO*/,[1,0]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[3,1]/*WOL*/],
    /*BOU*/[equipe[3][0],[2,0]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[1,2]/*BHA*/,[0,1]/*CHE*/,[0,0]/*CRY*/,[,]/*EVE*/,[,]/*FUL*/,[,]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[2,1]/*MCI*/,[,]/*MUD*/,[1,1]/*NEW*/,[,]/*NFO*/,[3,1]/*SOU*/,[1,0]/*TOT*/,[1,1]/*WHU*/,[,]/*WOL*/],
    /*BRE*/[equipe[4][0],[,]/*ARS*/,[,]/*AVL*/,[3,2]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[,]/*CHE*/,[2,1]/*CRY*/,[,]/*EVE*/,[,]/*FUL*/,[4,3]/*IPS*/,[4,1]/*LEI*/,[,]/*LIV*/,[,]/*MCI*/,[,]/*MUD*/,[4,2]/*NEW*/,[0,2]/*NFO*/,[3,1]/*SOU*/,[,]/*TOT*/,[1,1]/*WHU*/,[5,3]/*WOL*/],
    /*BHA*/[equipe[5][0],[,]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[,]/*CHE*/,[1,3]/*CRY*/,[,]/*EVE*/,[,]/*FUL*/,[0,0]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[2,1]/*MCI*/,[2,1]/*MUD*/,[,]/*NEW*/,[2,2]/*NFO*/,[1,1]/*SOU*/,[3,2]/*TOT*/,[,]/*WHU*/,[2,2]/*WOL*/],
    /*CHE*/[equipe[6][0],[1,1]/*ARS*/,[3,0]/*AVL*/,[,]/*BOU*/,[2,1]/*BRE*/,[4,2]/*BHA*/,[,]/*CHE*/,[1,1]/*CRY*/,[,]/*EVE*/,[1,2]/*FUL*/,[,]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[0,2]/*MCI*/,[,]/*MUD*/,[2,1]/*NEW*/,[1,1]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/],
    /*CRY*/[equipe[7][0],[1,5]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[,]/*CHE*/,[,]/*CRY*/,[,]/*EVE*/,[0,2]/*FUL*/,[,]/*IPS*/,[2,2]/*LEI*/,[0,1]/*LIV*/,[2,2]/*MCI*/,[0,0]/*MUD*/,[1,1]/*NEW*/,[,]/*NFO*/,[,]/*SOU*/,[1,0]/*TOT*/,[0,2]/*WHU*/,[,]/*WOL*/],
    /*EVE*/[equipe[8][0],[,]/*ARS*/,[,]/*AVL*/,[2,3]/*BOU*/,[0,0]/*BRE*/,[0,3]/*BHA*/,[0,0]/*CHE*/,[2,1]/*CRY*/,[,]/*EVE*/,[1,1]/*FUL*/,[,]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[,]/*MCI*/,[,]/*MUD*/,[0,0]/*NEW*/,[,]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[4,0]/*WOL*/],
    /*FUL*/[equipe[9][0],[1,1]/*ARS*/,[1,3]/*AVL*/,[,]/*BOU*/,[2,1]/*BRE*/,[3,1]/*BHA*/,[,]/*CHE*/,[,]/*CRY*/,[,]/*EVE*/,[,]/*FUL*/,[,]/*IPS*/,[2,1]/*LEI*/,[,]/*LIV*/,[,]/*MCI*/,[,]/*MUD*/,[3,1]/*NEW*/,[,]/*NFO*/,[0,0]/*SOU*/,[,]/*TOT*/,[1,1]/*WHU*/,[1,4]/*WOL*/],
    /*IPS*/[equipe[10][0],[,]/*ARS*/,[2,2]/*AVL*/,[1,2]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[,]/*CHE*/,[0,1]/*CRY*/,[0,2]/*EVE*/,[1,1]/*FUL*/,[,]/*IPS*/,[1,1]/*LEI*/,[0,2]/*LIV*/,[,]/*MCI*/,[1,1]/*MUD*/,[0,4]/*NEW*/,[,]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/],
    /*LEI*/[equipe[11][0],[,]/*ARS*/,[1,2]/*AVL*/,[1,0]/*BOU*/,[,]/*BRE*/,[2,2]/*BHA*/,[1,2]/*CHE*/,[,]/*CRY*/,[1,1]/*EVE*/,[,]/*FUL*/,[,]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[,]/*MCI*/,[,]/*MUD*/,[,]/*NEW*/,[1,3]/*NFO*/,[,]/*SOU*/,[1,1]/*TOT*/,[3,1]/*WHU*/,[0,3]/*WOL*/],
    /*LIV*/[equipe[12][0],[,]/*ARS*/,[2,0]/*AVL*/,[3,0]/*BOU*/,[2,0]/*BRE*/,[2,1]/*BHA*/,[2,1]/*CHE*/,[,]/*CRY*/,[,]/*EVE*/,[2,2]/*FUL*/,[,]/*IPS*/,[3,1]/*LEI*/,[,]/*LIV*/,[2,0]/*MCI*/,[,]/*MUD*/,[,]/*NEW*/,[0,1]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/],
    /*MCI*/[equipe[13][0],[2,2]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[2,1]/*BRE*/,[,]/*BHA*/,[,]/*CHE*/,[,]/*CRY*/,[1,1]/*EVE*/,[3,2]/*FUL*/,[4,1]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[,]/*MCI*/,[1,2]/*MUD*/,[,]/*NEW*/,[3,0]/*NFO*/,[1,0]/*SOU*/,[0,4]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/],
    /*MUN*/[equipe[14][0],[,]/*ARS*/,[,]/*AVL*/,[0,3]/*BOU*/,[2,1]/*BRE*/,[,]/*BHA*/,[1,1]/*CHE*/,[,]/*CRY*/,[4,0]/*EVE*/,[1,0]/*FUL*/,[,]/*IPS*/,[3,0]/*LEI*/,[0,3]/*LIV*/,[,]/*MCI*/,[,]/*MUD*/,[,]/*NEW*/,[2,3]/*NFO*/,[,]/*SOU*/,[0,3]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/],
    /*NEW*/[equipe[15][0],[1,0]/*ARS*/,[3,0]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[0,1]/*BHA*/,[,]/*CHE*/,[,]/*CRY*/,[,]/*EVE*/,[,]/*FUL*/,[,]/*IPS*/,[4,0]/*LEI*/,[3,3]/*LIV*/,[1,1]/*MCI*/,[,]/*MUD*/,[,]/*NEW*/,[,]/*NFO*/,[1,0]/*SOU*/,[2,1]/*TOT*/,[0,2]/*WHU*/,[,]/*WOL*/],
    /*NFO*/[equipe[16][0],[,]/*ARS*/,[2,1]/*AVL*/,[1,1]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[,]/*CHE*/,[1,0]/*CRY*/,[,]/*EVE*/,[0,1]/*FUL*/,[1,0]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[,]/*MCI*/,[,]/*MUD*/,[1,3]/*NEW*/,[,]/*NFO*/,[,]/*SOU*/,[1,0]/*TOT*/,[3,0]/*WHU*/,[1,1]/*WOL*/],
    /*SOU*/[equipe[17][0],[,]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[1,5]/*CHE*/,[,]/*CRY*/,[1,0]/*EVE*/,[,]/*FUL*/,[1,1]/*IPS*/,[2,3]/*LEI*/,[2,3]/*LIV*/,[,]/*MCI*/,[0,3]/*MUD*/,[,]/*NEW*/,[0,1]/*NFO*/,[,]/*SOU*/,[0,5]/*TOT*/,[0,1]/*WHU*/,[,]/*WOL*/],
    /*TOT*/[equipe[18][0],[0,1]/*ARS*/,[4,1]/*AVL*/,[,]/*BOU*/,[3,1]/*BRE*/,[,]/*BHA*/,[3,4]/*CHE*/,[,]/*CRY*/,[4,0]/*EVE*/,[1,1]/*FUL*/,[1,2]/*IPS*/,[,]/*LEI*/,[3,6]/*LIV*/,[,]/*MCI*/,[,]/*MUD*/,[,]/*NEW*/,[,]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[4,1]/*WHU*/,[,]/*WOL*/],
    /*WHU*/[equipe[19][0],[2,5]/*ARS*/,[1,2]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[1,1]/*BHA*/,[0,3]/*CHE*/,[,]/*CRY*/,[0,0]/*EVE*/,[,]/*FUL*/,[4,1]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[1,3]/*MCI*/,[2,1]/*MUD*/,[,]/*NEW*/,[,]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[2,1]/*WOL*/],
    /*WOL*/[equipe[20][0],[,]/*ARS*/,[,]/*AVL*/,[2,4]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[2,6]/*CHE*/,[2,2]/*CRY*/,[,]/*EVE*/,[,]/*FUL*/,[1,2]/*IPS*/,[,]/*LEI*/,[1,2]/*LIV*/,[1,2]/*MCI*/,[2,0]/*MUD*/,[1,2]/*NEW*/,[,]/*NFO*/,[2,0]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/]
]