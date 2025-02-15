var equipe = [
    [`Premier League`,`https://oraculo.wederson.net.br/inglaterra/imagem/eng1.png`,,0],// 0
    [`Arsenal`,`https://oraculo.wederson.net.br/inglaterra/imagem/arsenal.png`,
        {a:21/10,d:8/10},1], // 1
    [`Aston Villa`,`https://oraculo.wederson.net.br/inglaterra/imagem/astonvilla.png`,
        {a:12/10,d:14/10},2],// 2
    [`Bournemouth`,`https://oraculo.wederson.net.br/inglaterra/imagem/bournemouth.png`,
        {a:20/10,d:9/10},3],// 3
    [`Brentford`,`https://oraculo.wederson.net.br/inglaterra/imagem/brentford.png`,
        {a:15/10,d:16/10},4],// 4
    [`Brighton`,`https://oraculo.wederson.net.br/inglaterra/imagem/brighton.png`,
        {a:13/10,d:16/10},5],// 5
    [`Chelsea`,`https://oraculo.wederson.net.br/inglaterra/imagem/chelsea.png`,
        {a:12/10,d:16/10},6],// 6
    [`Crystal Palace`,`https://oraculo.wederson.net.br/inglaterra/imagem/crystal.png`,
        {a:16/10,d:12/10},7],// 7
    [`Everton`,`https://oraculo.wederson.net.br/inglaterra/imagem/everton.png`,
        {a:11/10,d:9/10},8],// 8
    [`Fulham`,`https://oraculo.wederson.net.br/inglaterra/imagem/fulham.png`,
        {a:15/10,d:13/10},9],// 9
    [`Ipswich`,`https://oraculo.wederson.net.br/inglaterra/imagem/ipswich.png`,
        {a:9/10,d:24/10},10],// 10
    [`Leicester`,`https://oraculo.wederson.net.br/inglaterra/imagem/leicester.png`,
        {a:6/10,d:25/10},11],// 11
    [`Liverpool`,`https://oraculo.wederson.net.br/inglaterra/imagem/liverpool.png`,
        {a:29/10,d:12/10},12],// 12
    [`Man City`,`https://oraculo.wederson.net.br/inglaterra/imagem/mancity.png`,
        {a:23/10,d:16/10},13],// 13
    [`Man United`,`https://oraculo.wederson.net.br/inglaterra/imagem/manunited.png`,
        {a:11/10,d:19/10},14],// 14
    [`Newcastle`,`https://oraculo.wederson.net.br/inglaterra/imagem/newcastle.png`,
        {a:25/10,d:12/10},15],// 15
    [`Nottingham`,`https://oraculo.wederson.net.br/inglaterra/imagem/nottingham.png`,
        {a:24/10,d:11/10},16],// 16
    [`Southampton`,`https://oraculo.wederson.net.br/inglaterra/imagem/southampton.png`,
        {a:7/10,d:24/10},17],// 17
    [`Tottenham`,`https://oraculo.wederson.net.br/inglaterra/imagem/tottenham.png`,
        {a:20/10,d:22/10},18],// 18
    [`West Ham`,`https://oraculo.wederson.net.br/inglaterra/imagem/westham.png`,
        {a:11/10,d:19/10},19],// 19
    [`Wolves`,`https://oraculo.wederson.net.br/inglaterra/imagem/wolves.png`,
        {a:12/10,d:16/10},20]// 20
]

var tabelaRRinicial = [
    [equipe[0][0],equipe[1][0],equipe[2][0],equipe[3][0],equipe[4][0],equipe[5][0],equipe[6][0],equipe[7][0],equipe[8][0],equipe[9][0],equipe[10][0],equipe[11][0],equipe[12][0],equipe[13][0],equipe[14][0],equipe[15][0],equipe[16][0],equipe[17][0],equipe[18][0],equipe[19][0],equipe[20][0]],
    /*ARS*/[equipe[1][0],[,]/*ARS*/,[2,2]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[1,1]/*BHA*/,[,]/*CHE*/,[,]/*CRY*/,[0,0]/*EVE*/,[,]/*FUL*/,[1,0]/*IPS*/,[4,2]/*LEI*/,[2,2]/*LIV*/,[5,1]/*MCI*/,[2,0]/*MUN*/,[,]/*NEW*/,[3,0]/*NFO*/,[3,1]/*SOU*/,[2,1]/*TOT*/,[,]/*WHU*/,[2,0]/*WOL*/],
    /*AVL*/[equipe[2][0],[0,2]/*ARS*/,[,]/*AVL*/,[1,1]/*BOU*/,[3,1]/*BRE*/,[2,2]/*BHA*/,[,]/*CHE*/,[2,2]/*CRY*/,[3,2]/*EVE*/,[,]/*FUL*/,[,]/*IPS*/,[2,1]/*LEI*/,[,]/*LIV*/,[2,1]/*MCI*/,[0,0]/*MUN*/,[,]/*NEW*/,[,]/*NFO*/,[1,0]/*SOU*/,[,]/*TOT*/,[1,1]/*WHU*/,[3,1]/*WOL*/],
    /*BOU*/[equipe[3][0],[2,0]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[1,2]/*BHA*/,[0,1]/*CHE*/,[0,0]/*CRY*/,[1,0]/*EVE*/,[,]/*FUL*/,[,]/*IPS*/,[,]/*LEI*/,[0,2]/*LIV*/,[2,1]/*MCI*/,[,]/*MUN*/,[1,1]/*NEW*/,[5,0]/*NFO*/,[3,1]/*SOU*/,[1,0]/*TOT*/,[1,1]/*WHU*/,[,]/*WOL*/],
    /*BRE*/[equipe[4][0],[1,3]/*ARS*/,[,]/*AVL*/,[3,2]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[,]/*CHE*/,[2,1]/*CRY*/,[,]/*EVE*/,[,]/*FUL*/,[4,3]/*IPS*/,[4,1]/*LEI*/,[0,2]/*LIV*/,[2,2]/*MCI*/,[,]/*MUN*/,[4,2]/*NEW*/,[0,2]/*NFO*/,[3,1]/*SOU*/,[0,2]/*TOT*/,[1,1]/*WHU*/,[5,3]/*WOL*/],
    /*BHA*/[equipe[5][0],[1,1]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[0,0]/*BRE*/,[,]/*BHA*/,[3,0]/*CHE*/,[1,3]/*CRY*/,[0,1]/*EVE*/,[,]/*FUL*/,[0,0]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[2,1]/*MCI*/,[2,1]/*MUN*/,[,]/*NEW*/,[2,2]/*NFO*/,[1,1]/*SOU*/,[3,2]/*TOT*/,[,]/*WHU*/,[2,2]/*WOL*/],
    /*CHE*/[equipe[6][0],[1,1]/*ARS*/,[3,0]/*AVL*/,[2,2]/*BOU*/,[2,1]/*BRE*/,[4,2]/*BHA*/,[,]/*CHE*/,[1,1]/*CRY*/,[,]/*EVE*/,[1,2]/*FUL*/,[,]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[0,2]/*MCI*/,[,]/*MUN*/,[2,1]/*NEW*/,[1,1]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[2,1]/*WHU*/,[3,1]/*WOL*/],
    /*CRY*/[equipe[7][0],[1,5]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[1,2]/*BRE*/,[,]/*BHA*/,[1,1]/*CHE*/,[,]/*CRY*/,[,]/*EVE*/,[0,2]/*FUL*/,[,]/*IPS*/,[2,2]/*LEI*/,[0,1]/*LIV*/,[2,2]/*MCI*/,[0,0]/*MUN*/,[1,1]/*NEW*/,[,]/*NFO*/,[2,1]/*SOU*/,[1,0]/*TOT*/,[0,2]/*WHU*/,[,]/*WOL*/],
    /*EVE*/[equipe[8][0],[,]/*ARS*/,[0,1]/*AVL*/,[2,3]/*BOU*/,[0,0]/*BRE*/,[0,3]/*BHA*/,[0,0]/*CHE*/,[2,1]/*CRY*/,[,]/*EVE*/,[1,1]/*FUL*/,[,]/*IPS*/,[4,0]/*LEI*/,[2,2]/*LIV*/,[,]/*MCI*/,[,]/*MUN*/,[0,0]/*NEW*/,[0,2]/*NFO*/,[,]/*SOU*/,[3,2]/*TOT*/,[,]/*WHU*/,[4,0]/*WOL*/],
    /*FUL*/[equipe[9][0],[1,1]/*ARS*/,[1,3]/*AVL*/,[2,2]/*BOU*/,[2,1]/*BRE*/,[3,1]/*BHA*/,[,]/*CHE*/,[,]/*CRY*/,[,]/*EVE*/,[,]/*FUL*/,[2,2]/*IPS*/,[2,1]/*LEI*/,[,]/*LIV*/,[,]/*MCI*/,[0,1]/*MUN*/,[3,1]/*NEW*/,[,]/*NFO*/,[0,0]/*SOU*/,[,]/*TOT*/,[1,1]/*WHU*/,[1,4]/*WOL*/],
    /*IPS*/[equipe[10][0],[,]/*ARS*/,[2,2]/*AVL*/,[1,2]/*BOU*/,[,]/*BRE*/,[0,2]/*BHA*/,[2,0]/*CHE*/,[0,1]/*CRY*/,[0,2]/*EVE*/,[1,1]/*FUL*/,[,]/*IPS*/,[1,1]/*LEI*/,[0,2]/*LIV*/,[0,6]/*MCI*/,[1,1]/*MUN*/,[0,4]/*NEW*/,[,]/*NFO*/,[1,2]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/],
    /*LEI*/[equipe[11][0],[,]/*ARS*/,[1,2]/*AVL*/,[1,0]/*BOU*/,[,]/*BRE*/,[2,2]/*BHA*/,[1,2]/*CHE*/,[0,2]/*CRY*/,[1,1]/*EVE*/,[0,2]/*FUL*/,[,]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[0,2]/*MCI*/,[,]/*MUN*/,[,]/*NEW*/,[1,3]/*NFO*/,[,]/*SOU*/,[1,1]/*TOT*/,[3,1]/*WHU*/,[0,3]/*WOL*/],
    /*LIV*/[equipe[12][0],[,]/*ARS*/,[2,0]/*AVL*/,[3,0]/*BOU*/,[2,0]/*BRE*/,[2,1]/*BHA*/,[2,1]/*CHE*/,[,]/*CRY*/,[,]/*EVE*/,[2,2]/*FUL*/,[4,1]/*IPS*/,[3,1]/*LEI*/,[,]/*LIV*/,[2,0]/*MCI*/,[2,2]/*MUN*/,[,]/*NEW*/,[0,1]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/],
    /*MCI*/[equipe[13][0],[2,2]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[2,1]/*BRE*/,[,]/*BHA*/,[3,1]/*CHE*/,[,]/*CRY*/,[1,1]/*EVE*/,[3,2]/*FUL*/,[4,1]/*IPS*/,[,]/*LEI*/,[,]/*LIV*/,[,]/*MCI*/,[1,2]/*MUN*/,[,]/*NEW*/,[3,0]/*NFO*/,[1,0]/*SOU*/,[0,4]/*TOT*/,[4,1]/*WHU*/,[,]/*WOL*/],
    /*MUN*/[equipe[14][0],[,]/*ARS*/,[,]/*AVL*/,[0,3]/*BOU*/,[2,1]/*BRE*/,[1,3]/*BHA*/,[1,1]/*CHE*/,[0,2]/*CRY*/,[4,0]/*EVE*/,[1,0]/*FUL*/,[,]/*IPS*/,[3,0]/*LEI*/,[0,3]/*LIV*/,[,]/*MCI*/,[,]/*MUN*/,[0,2]/*NEW*/,[2,3]/*NFO*/,[3,1]/*SOU*/,[0,3]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/],
    /*NEW*/[equipe[15][0],[1,0]/*ARS*/,[3,0]/*AVL*/,[1,4]/*BOU*/,[,]/*BRE*/,[0,1]/*BHA*/,[,]/*CHE*/,[,]/*CRY*/,[,]/*EVE*/,[1,2]/*FUL*/,[,]/*IPS*/,[4,0]/*LEI*/,[3,3]/*LIV*/,[1,1]/*MCI*/,[,]/*MUN*/,[,]/*NEW*/,[,]/*NFO*/,[1,0]/*SOU*/,[2,1]/*TOT*/,[0,2]/*WHU*/,[3,0]/*WOL*/],
    /*NFO*/[equipe[16][0],[,]/*ARS*/,[2,1]/*AVL*/,[1,1]/*BOU*/,[,]/*BRE*/,[7,0]/*BHA*/,[,]/*CHE*/,[1,0]/*CRY*/,[,]/*EVE*/,[0,1]/*FUL*/,[1,0]/*IPS*/,[,]/*LEI*/,[1,1]/*LIV*/,[,]/*MCI*/,[,]/*MUN*/,[1,3]/*NEW*/,[,]/*NFO*/,[3,2]/*SOU*/,[1,0]/*TOT*/,[3,0]/*WHU*/,[1,1]/*WOL*/],
    /*SOU*/[equipe[17][0],[,]/*ARS*/,[,]/*AVL*/,[,]/*BOU*/,[0,5]/*BRE*/,[,]/*BHA*/,[1,5]/*CHE*/,[,]/*CRY*/,[1,0]/*EVE*/,[,]/*FUL*/,[1,1]/*IPS*/,[2,3]/*LEI*/,[2,3]/*LIV*/,[,]/*MCI*/,[0,3]/*MUN*/,[1,3]/*NEW*/,[0,1]/*NFO*/,[,]/*SOU*/,[0,5]/*TOT*/,[0,1]/*WHU*/,[,]/*WOL*/],
    /*TOT*/[equipe[18][0],[0,1]/*ARS*/,[4,1]/*AVL*/,[,]/*BOU*/,[3,1]/*BRE*/,[,]/*BHA*/,[3,4]/*CHE*/,[,]/*CRY*/,[4,0]/*EVE*/,[1,1]/*FUL*/,[1,2]/*IPS*/,[1,2]/*LEI*/,[3,6]/*LIV*/,[,]/*MCI*/,[,]/*MUN*/,[1,2]/*NEW*/,[,]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[4,1]/*WHU*/,[2,2]/*WOL*/],
    /*WHU*/[equipe[19][0],[2,5]/*ARS*/,[1,2]/*AVL*/,[,]/*BOU*/,[,]/*BRE*/,[1,1]/*BHA*/,[0,3]/*CHE*/,[0,2]/*CRY*/,[0,0]/*EVE*/,[3,2]/*FUL*/,[4,1]/*IPS*/,[,]/*LEI*/,[0,5]/*LIV*/,[1,3]/*MCI*/,[2,1]/*MUN*/,[,]/*NEW*/,[,]/*NFO*/,[,]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[2,1]/*WOL*/],
    /*WOL*/[equipe[20][0],[0,1]/*ARS*/,[2,0]/*AVL*/,[2,4]/*BOU*/,[,]/*BRE*/,[,]/*BHA*/,[2,6]/*CHE*/,[2,2]/*CRY*/,[,]/*EVE*/,[,]/*FUL*/,[1,2]/*IPS*/,[,]/*LEI*/,[1,2]/*LIV*/,[1,2]/*MCI*/,[2,0]/*MUN*/,[1,2]/*NEW*/,[0,3]/*NFO*/,[2,0]/*SOU*/,[,]/*TOT*/,[,]/*WHU*/,[,]/*WOL*/]
]