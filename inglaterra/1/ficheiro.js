var equipe = [
    [`Premier League`,`http://oraculo.wederson.net.br/inglaterra/imagem/eng1.png`,,0],// 0
    [`Arsenal`,`http://oraculo.wederson.net.br/inglaterra/imagem/arsenal.png`,{a:34/17,d:16/17},1], // 1
    [`Aston Villa`,`http://oraculo.wederson.net.br/inglaterra/imagem/astonvilla.png`,{a:26/17,d:26/17},2],// 2
    [`Bournemouth`,`http://oraculo.wederson.net.br/inglaterra/imagem/bournermouth.png`,{a:27/17,d:21/17},3],// 3
    [`Brentford`,`http://oraculo.wederson.net.br/inglaterra/imagem/brentford.png`,{a:32/17,d:32/17},4],// 4
    [`Brighton`,`http://oraculo.wederson.net.br/inglaterra/imagem/brighton.png`,{a:27/17,d:26/17},5],// 5
    [`Chelsea`,`http://oraculo.wederson.net.br/inglaterra/imagem/chelsea.png`,{a:37/17,d:19/17},6],// 6
    [`Crystal Palace`,`http://oraculo.wederson.net.br/inglaterra/imagem/crystal.png`,{a:18/17,d:26/17},7],// 7
    [`Everton`,`http://oraculo.wederson.net.br/inglaterra/imagem/everton.png`,{a:14/16,d:21/16},8],// 8
    [`Fulham`,`http://oraculo.wederson.net.br/inglaterra/imagem/fulham.png`,{a:24/17,d:22/17},9],// 9
    [`Ipswich`,`http://oraculo.wederson.net.br/inglaterra/imagem/ipswich.png`,{a:16/17,d:32/17},10],// 10
    [`Leicester`,`http://oraculo.wederson.net.br/inglaterra/imagem/leicester.png`,{a:21/17,d:37/17},11],// 11
    [`Liverpool`,`http://oraculo.wederson.net.br/inglaterra/imagem/liverpool.png`,{a:37/16,d:16/16},12],// 12
    [`Man City`,`http://oraculo.wederson.net.br/inglaterra/imagem/mancity.png`,{a:29/17,d:25/17},13],// 13
    [`Man United`,`http://oraculo.wederson.net.br/inglaterra/imagem/manunited.png`,{a:21/17,d:22/17},14],// 14
    [`Newcastle`,`http://oraculo.wederson.net.br/inglaterra/imagem/newcastle.png`,{a:27/17,d:21/17},15],// 15
    [`Nottingham`,`http://oraculo.wederson.net.br/inglaterra/imagem/nottingham.png`,{a:23/17,d:19/17},16],// 16
    [`Southampton`,`http://oraculo.wederson.net.br/inglaterra/imagem/southampton.png`,{a:11/17,d:36/17},17],// 17
    [`Tottenham`,`http://oraculo.wederson.net.br/inglaterra/imagem/tottenham.png`,{a:39/17,d:25/17},18],// 18
    [`West Ham`,`http://oraculo.wederson.net.br/inglaterra/imagem/westham.png`,{a:22/17,d:30/17},19],// 19
    [`Wolves`,`http://oraculo.wederson.net.br/inglaterra/imagem/wolves.png`,{a:27/17,d:40/17},20]// 20
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