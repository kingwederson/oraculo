var rodat = 10
var equipe = [
    [`Premier League`,`https://oraculo.wederson.com/inglaterra/imagem/eng1.png`,,0],// 0
    [`Arsenal`,`https://oraculo.wederson.com/inglaterra/imagem/arsenal.png`,
        {a:13/rodat,d:8/rodat,rat:2267},1], // 1
    [`Aston Villa`,`https://oraculo.wederson.com/inglaterra/imagem/astonvilla.png`,
        {a:19/rodat,d:10/rodat,rat:2267},2],// 2
    [`Bournemouth`,`https://oraculo.wederson.com/inglaterra/imagem/bournemouth.png`,
        {a:11/rodat,d:13/rodat,rat:2267},3],// 3
    [`Brentford`,`https://oraculo.wederson.com/inglaterra/imagem/brentford.png`,
        {a:16/rodat,d:11/rodat,rat:2267},4],// 4
    [`Brighton`,`https://oraculo.wederson.com/inglaterra/imagem/brighton.png`,
        {a:17/rodat,d:18/rodat,rat:2267},5],// 5
    [`Chelsea`,`https://oraculo.wederson.com/inglaterra/imagem/chelsea.png`,
        {a:14/rodat,d:7/rodat,rat:2267},6],// 6
    [`Crystal Palace`,`https://oraculo.wederson.com/inglaterra/imagem/crystal.png`,
        {a:15/rodat,d:16/rodat,rat:2267},7],// 7
    [`Everton`,`https://oraculo.wederson.com/inglaterra/imagem/everton.png`,
        {a:10/rodat,d:11/rodat,rat:2267},8],// 8
    [`Fulham`,`https://oraculo.wederson.com/inglaterra/imagem/fulham.png`,
        {a:13/rodat,d:15/rodat,rat:2267},9],// 9
    [`Ipswich`,`https://oraculo.wederson.com/inglaterra/imagem/ipswich.png`,
        {a:11/rodat,d:23/rodat,rat:2267},10],// 10
    [`Leicester`,`https://oraculo.wederson.com/inglaterra/imagem/leicester.png`,
        {a:6/rodat,d:19/rodat,rat:2267},11],// 11
    [`Liverpool`,`https://oraculo.wederson.com/inglaterra/imagem/liverpool.png`,
        {a:19/rodat,d:11/rodat,rat:2267},12],// 12
    [`Man City`,`https://oraculo.wederson.com/inglaterra/imagem/mancity.png`,
        {a:15/rodat,d:6/rodat,rat:2267},13],// 13
    [`Man United`,`https://oraculo.wederson.com/inglaterra/imagem/manunited.png`,
        {a:12/rodat,d:16/rodat,rat:2267},14],// 14
    [`Newcastle`,`https://oraculo.wederson.com/inglaterra/imagem/newcastle.png`,
        {a:22/rodat,d:9/rodat,rat:2267},15],// 15
    [`Nottingham`,`https://oraculo.wederson.com/inglaterra/imagem/nottingham.png`,
        {a:12/rodat,d:11/rodat,rat:2267},16],// 16
    [`Southampton`,`https://oraculo.wederson.com/inglaterra/imagem/southampton.png`,
        {a:6/rodat,d:21/rodat,rat:2267},17],// 17
    [`Tottenham`,`https://oraculo.wederson.com/inglaterra/imagem/tottenham.png`,
        {a:10/rodat,d:21/rodat,rat:2267},18],// 18
    [`West Ham`,`https://oraculo.wederson.com/inglaterra/imagem/westham.png`,
        {a:12/rodat,d:12/rodat,rat:2267},19],// 19
    [`Wolves`,`https://oraculo.wederson.com/inglaterra/imagem/wolves.png`,
        {a:15/rodat,d:10/rodat,rat:2267},20]// 20
]

var tabelaRRinicial = [
    [equipe[0][0],equipe[1][0],equipe[2][0],equipe[3][0],equipe[4][0],equipe[5][0],equipe[6][0],equipe[7][0],equipe[8][0],equipe[9][0],equipe[10][0],equipe[11][0],equipe[12][0],equipe[13][0],equipe[14][0],equipe[15][0],equipe[16][0],equipe[17][0],equipe[18][0],equipe[19][0],equipe[20][0]],
    [equipe[1][0],[,]/*ARS */,[2,2]/*AVL */,[1,2]/*BOU */,[1,1]/*BRE */,[1,1]/*BHA */,[1,0]/*CHE */,[2,2]/*CRY */,[0,0]/*EVE */,[2,1]/*FUL */,[1,0]/*IPS */,[4,2]/*LEI */,[2,2]/*LIV */,[5,1]/*MCI */,[2,0]/*MUN */,[,]/*NEW */,[3,0]/*NFO */,[3,1]/*SOU */,[2,1]/*TOT */,[0,1]/*WHU */,[2,0]/*WOL */],
    [equipe[2][0],[0,2]/*ARS */,[,]/*AVL */,[1,1]/*BOU */,[3,1]/*BRE */,[2,2]/*BHA */,[2,1]/*CHE */,[2,2]/*CRY */,[3,2]/*EVE */,[1,0]/*FUL */,[1,1]/*IPS */,[2,1]/*LEI */,[2,2]/*LIV */,[2,1]/*MCI */,[0,0]/*MUN */,[4,1]/*NEW */,[2,1]/*NFO */,[1,0]/*SOU */,[,]/*TOT */,[1,1]/*WHU */,[3,1]/*WOL */],
    [equipe[3][0],[2,0]/*ARS */,[0,1]/*AVL */,[,]/*BOU */,[1,2]/*BRE */,[1,2]/*BHA */,[0,1]/*CHE */,[0,0]/*CRY */,[1,0]/*EVE */,[1,0]/*FUL */,[1,2]/*IPS */,[,]/*LEI */,[0,2]/*LIV */,[2,1]/*MCI */,[1,1]/*MUN */,[1,1]/*NEW */,[5,0]/*NFO */,[3,1]/*SOU */,[1,0]/*TOT */,[1,1]/*WHU */,[0,1]/*WOL */],
    [equipe[4][0],[1,3]/*ARS */,[0,1]/*AVL */,[3,2]/*BOU */,[,]/*BRE */,[4,2]/*BHA */,[0,0]/*CHE */,[2,1]/*CRY */,[1,1]/*EVE */,[,]/*FUL */,[4,3]/*IPS */,[4,1]/*LEI */,[0,2]/*LIV */,[2,2]/*MCI */,[4,3]/*MUN */,[4,2]/*NEW */,[0,2]/*NFO */,[3,1]/*SOU */,[0,2]/*TOT */,[1,1]/*WHU */,[5,3]/*WOL */],
    [equipe[5][0],[1,1]/*ARS */,[0,3]/*AVL */,[2,1]/*BOU */,[0,0]/*BRE */,[,]/*BHA */,[3,0]/*CHE */,[1,3]/*CRY */,[0,1]/*EVE */,[2,1]/*FUL */,[0,0]/*IPS */,[2,2]/*LEI */,[,]/*LIV */,[2,1]/*MCI */,[2,1]/*MUN */,[1,1]/*NEW */,[2,2]/*NFO */,[1,1]/*SOU */,[3,2]/*TOT */,[3,2]/*WHU */,[2,2]/*WOL */],
    [equipe[6][0],[1,1]/*ARS */,[3,0]/*AVL */,[2,2]/*BOU */,[2,1]/*BRE */,[4,2]/*BHA */,[,]/*CHE */,[1,1]/*CRY */,[1,0]/*EVE */,[1,2]/*FUL */,[2,2]/*IPS */,[1,0]/*LEI */,[3,1]/*LIV */,[0,2]/*MCI */,[,]/*MUN */,[2,1]/*NEW */,[1,1]/*NFO */,[4,0]/*SOU */,[1,0]/*TOT */,[2,1]/*WHU */,[3,1]/*WOL */],
    [equipe[7][0],[1,5]/*ARS */,[4,1]/*AVL */,[0,0]/*BOU */,[1,2]/*BRE */,[2,1]/*BHA */,[1,1]/*CHE */,[,]/*CRY */,[1,2]/*EVE */,[0,2]/*FUL */,[1,0]/*IPS */,[2,2]/*LEI */,[0,1]/*LIV */,[2,2]/*MCI */,[0,0]/*MUN */,[1,1]/*NEW */,[1,1]/*NFO */,[2,1]/*SOU */,[1,0]/*TOT */,[0,2]/*WHU */,[,]/*WOL */],
    [equipe[8][0],[1,1]/*ARS */,[0,1]/*AVL */,[2,3]/*BOU */,[0,0]/*BRE */,[0,3]/*BHA */,[0,0]/*CHE */,[2,1]/*CRY */,[,]/*EVE */,[1,1]/*FUL */,[2,2]/*IPS */,[4,0]/*LEI */,[2,2]/*LIV */,[0,2]/*MCI */,[2,2]/*MUN */,[0,0]/*NEW */,[0,2]/*NFO */,[,]/*SOU */,[3,2]/*TOT */,[1,1]/*WHU */,[4,0]/*WOL */],
    [equipe[9][0],[1,1]/*ARS */,[1,3]/*AVL */,[2,2]/*BOU */,[2,1]/*BRE */,[3,1]/*BHA */,[1,2]/*CHE */,[0,2]/*CRY */,[1,3]/*EVE */,[,]/*FUL */,[2,2]/*IPS */,[2,1]/*LEI */,[3,2]/*LIV */,[,]/*MCI */,[0,1]/*MUN */,[3,1]/*NEW */,[2,1]/*NFO */,[0,0]/*SOU */,[2,0]/*TOT */,[1,1]/*WHU */,[1,4]/*WOL */],
    [equipe[10][0],[0,4]/*ARS */,[2,2]/*AVL */,[1,2]/*BOU */,[0,1]/*BRE */,[0,2]/*BHA */,[2,0]/*CHE */,[0,1]/*CRY */,[0,2]/*EVE */,[1,1]/*FUL */,[,]/*IPS */,[1,1]/*LEI */,[0,2]/*LIV */,[0,6]/*MCI */,[1,1]/*MUN */,[0,4]/*NEW */,[2,4]/*NFO */,[1,2]/*SOU */,[1,4]/*TOT */,[,]/*WHU */,[1,2]/*WOL */],
    [equipe[11][0],[0,2]/*ARS */,[1,2]/*AVL */,[1,0]/*BOU */,[0,4]/*BRE */,[2,2]/*BHA */,[1,2]/*CHE */,[0,2]/*CRY */,[1,1]/*EVE */,[0,2]/*FUL */,[,]/*IPS */,[,]/*LEI */,[0,1]/*LIV */,[0,2]/*MCI */,[0,3]/*MUN */,[0,3]/*NEW */,[1,3]/*NFO */,[2,0]/*SOU */,[1,1]/*TOT */,[3,1]/*WHU */,[0,3]/*WOL */],
    [equipe[12][0],[2,2]/*ARS */,[2,0]/*AVL */,[3,0]/*BOU */,[2,0]/*BRE */,[2,1]/*BHA */,[2,1]/*CHE */,[,]/*CRY */,[1,0]/*EVE */,[2,2]/*FUL */,[4,1]/*IPS */,[3,1]/*LEI */,[,]/*LIV */,[2,0]/*MCI */,[2,2]/*MUN */,[2,0]/*NEW */,[0,1]/*NFO */,[3,1]/*SOU */,[5,1]/*TOT */,[2,1]/*WHU */,[2,1]/*WOL */],
    [equipe[13][0],[2,2]/*ARS */,[2,1]/*AVL */,[,]/*BOU */,[2,1]/*BRE */,[2,2]/*BHA */,[3,1]/*CHE */,[5,2]/*CRY */,[1,1]/*EVE */,[3,2]/*FUL */,[4,1]/*IPS */,[2,0]/*LEI */,[0,2]/*LIV */,[,]/*MCI */,[1,2]/*MUN */,[4,0]/*NEW */,[3,0]/*NFO */,[1,0]/*SOU */,[0,4]/*TOT */,[4,1]/*WHU */,[1,0]/*WOL */],
    [equipe[14][0],[1,1]/*ARS */,[,]/*AVL */,[0,3]/*BOU */,[2,1]/*BRE */,[1,3]/*BHA */,[1,1]/*CHE */,[0,2]/*CRY */,[4,0]/*EVE */,[1,0]/*FUL */,[3,2]/*IPS */,[3,0]/*LEI */,[0,3]/*LIV */,[0,0]/*MCI */,[,]/*MUN */,[0,2]/*NEW */,[2,3]/*NFO */,[3,1]/*SOU */,[0,3]/*TOT */,[0,2]/*WHU */,[0,1]/*WOL */],
    [equipe[15][0],[1,0]/*ARS */,[3,0]/*AVL */,[1,4]/*BOU */,[2,1]/*BRE */,[0,1]/*BHA */,[2,0]/*CHE */,[5,0]/*CRY */,[,]/*EVE */,[1,2]/*FUL */,[3,0]/*IPS */,[4,0]/*LEI */,[3,3]/*LIV */,[1,1]/*MCI */,[4,1]/*MUN */,[,]/*NEW */,[4,3]/*NFO */,[1,0]/*SOU */,[2,1]/*TOT */,[0,2]/*WHU */,[3,0]/*WOL */],
    [equipe[16][0],[0,0]/*ARS */,[2,1]/*AVL */,[1,1]/*BOU */,[0,2]/*BRE */,[7,0]/*BHA */,[,]/*CHE */,[1,0]/*CRY */,[0,1]/*EVE */,[0,1]/*FUL */,[1,0]/*IPS */,[2,2]/*LEI */,[1,1]/*LIV */,[1,0]/*MCI */,[1,0]/*MUN */,[1,3]/*NEW */,[,]/*NFO */,[3,2]/*SOU */,[1,0]/*TOT */,[3,0]/*WHU */,[1,1]/*WOL */],
    [equipe[17][0],[,]/*ARS */,[0,3]/*AVL */,[1,3]/*BOU */,[0,5]/*BRE */,[0,4]/*BHA */,[1,5]/*CHE */,[1,1]/*CRY */,[1,0]/*EVE */,[1,2]/*FUL */,[1,1]/*IPS */,[2,3]/*LEI */,[2,3]/*LIV */,[0,0]/*MCI */,[0,3]/*MUN */,[1,3]/*NEW */,[0,1]/*NFO */,[,]/*SOU */,[0,5]/*TOT */,[0,1]/*WHU */,[1,2]/*WOL */],
    [equipe[18][0],[0,1]/*ARS */,[4,1]/*AVL */,[2,2]/*BOU */,[3,1]/*BRE */,[,]/*BHA */,[3,4]/*CHE */,[0,2]/*CRY */,[4,0]/*EVE */,[1,1]/*FUL */,[1,2]/*IPS */,[1,2]/*LEI */,[3,6]/*LIV */,[0,1]/*MCI */,[1,0]/*MUN */,[1,2]/*NEW */,[1,2]/*NFO */,[3,1]/*SOU */,[,]/*TOT */,[4,1]/*WHU */,[2,2]/*WOL */],
    [equipe[19][0],[2,5]/*ARS */,[1,2]/*AVL */,[2,2]/*BOU */,[0,1]/*BRE */,[1,1]/*BHA */,[0,3]/*CHE */,[0,2]/*CRY */,[0,0]/*EVE */,[3,2]/*FUL */,[4,1]/*IPS */,[2,0]/*LEI */,[0,5]/*LIV */,[1,3]/*MCI */,[2,1]/*MUN */,[0,1]/*NEW */,[,]/*NFO */,[1,1]/*SOU */,[1,1]/*TOT */,[,]/*WHU */,[2,1]/*WOL */],
    [equipe[20][0],[0,1]/*ARS */,[2,0]/*AVL */,[2,4]/*BOU */,[,]/*BRE */,[0,2]/*BHA */,[2,6]/*CHE */,[2,2]/*CRY */,[1,1]/*EVE */,[1,2]/*FUL */,[1,2]/*IPS */,[3,0]/*LEI */,[1,2]/*LIV */,[1,2]/*MCI */,[2,0]/*MUN */,[1,2]/*NEW */,[0,3]/*NFO */,[2,0]/*SOU */,[4,2]/*TOT */,[1,0]/*WHU */,[,]/*WOL */]
]