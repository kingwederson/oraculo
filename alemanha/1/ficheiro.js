var equipe = [
    [`1. Bundesliga`,`https://oraculo.wederson.net.br/alemanha/imagem/ale1.png`,,0],
    
    [`Augsburg`,`https://oraculo.wederson.net.br/alemanha/imagem/augsburg.png`,
        {a:20/10,d:9/10},1],
    [`Union Berlin`,`https://oraculo.wederson.net.br/alemanha/imagem/berlin.png`,
        {a:9/10,d:17/10},2],
    [`Bochum`,`https://oraculo.wederson.net.br/alemanha/imagem/bochum.png`,
        {a:14/10,d:13/10},3],
    [`Werder Bremen`,`https://oraculo.wederson.net.br/alemanha/imagem/werder.png`,
        {a:22/10,d:6/10},4],
    [`Dortmund`,`https://oraculo.wederson.net.br/alemanha/imagem/dortmund.png`,
        {a:8/10,d:27/10},5],
    [`Eintracht`,`https://oraculo.wederson.net.br/alemanha/imagem/eintracht.png`,
        {a:11/10,d:10/10},6],
    [`Freiburg`,`https://oraculo.wederson.net.br/alemanha/imagem/freiburg.png`,
        {a:6/10,d:15/10},7],
    [`Heidenheim`,`https://oraculo.wederson.net.br/alemanha/imagem/heidenheim.png`,
        {a:19/10,d:6/10},8],
    [`Hoffenheim`,`https://oraculo.wederson.net.br/alemanha/imagem/hoffenheim.png`,
        {a:17/10,d:9/10},9],
    [`Holstein Kiel`,`https://oraculo.wederson.net.br/alemanha/imagem/holsteinkiel.png`,
        {a:17/10,d:11/10},10],
    [`RB Leipzig`,`https://oraculo.wederson.net.br/alemanha/imagem/leipzig.png`,
        {a:13/10,d:10/10},11],
    [`Leverkusen`,`https://oraculo.wederson.net.br/alemanha/imagem/leverkusen.png`,
        {a:17/10,d:13/10},12],
    [`Mainz 05`,`https://oraculo.wederson.net.br/alemanha/imagem/mainz.png`,
        {a:10/10,d:17/10},13],
    [`Mönchengladbach`,`https://oraculo.wederson.net.br/alemanha/imagem/monchengladbach.png`,
        {a:10/10,d:17/10},14],
    [`Bayern`,`https://oraculo.wederson.net.br/alemanha/imagem/bayern.png`,
        {a:11/10,d:14/10},15],
    [`St. Pauli`,`https://oraculo.wederson.net.br/alemanha/imagem/stpauli.png`,
        {a:7/10,d:22/10},16],
    [`Stuttgart`,`https://oraculo.wederson.net.br/alemanha/imagem/stuttgart.png`,
        {a:18/10,d:10/10},17],
    [`Wolfsburg`,`https://oraculo.wederson.net.br/alemanha/imagem/wolfsburg.png`,
        {a:12/10,d:12/10},18]
]

var tabelaRRinicial = [
    [equipe[0][0],equipe[1][0],equipe[2][0],equipe[3][0],equipe[4][0],equipe[5][0],equipe[6][0],equipe[7][0],equipe[8][0],equipe[9][0],equipe[10][0],equipe[11][0],equipe[12][0],equipe[13][0],equipe[14][0],equipe[15][0],equipe[16][0],equipe[17][0],equipe[18][0]],
    [equipe[1][0],[,]/*AUG */,[0,2]/*LEV */,[,]/*MUN */,[1,0]/*BOC */,[2,1]/*DOR */,[2,1]/*MÖN */,[,]/*FRA */,[,]/*FRE */,[2,1]/*HEI */,[0,0]/*HOF */,[,]/*KIE */,[2,3]/*MAI */,[,]/*LEI */,[3,1]/*STP */,[0,1]/*STU */,[,]/*UNB */,[2,2]/*BRE */,[,]/*WOL */],
    [equipe[2][0],[,]/*AUG */,[,]/*LEV */,[,]/*MUN */,[,]/*BOC */,[,]/*DOR */,[3,1]/*MÖN */,[2,1]/*FRA */,[5,1]/*FRE */,[5,2]/*HEI */,[3,1]/*HOF */,[2,2]/*KIE */,[1,0]/*MAI */,[2,3]/*LEI */,[2,1]/*STP */,[0,0]/*STU */,[,]/*UNB */,[,]/*BRE */,[4,3]/*WOL */],
    [equipe[3][0],[3,0]/*AUG */,[1,1]/*LEV */,[,]/*MUN */,[,]/*BOC */,[,]/*DOR */,[,]/*MÖN */,[,]/*FRA */,[2,0]/*FRE */,[4,2]/*HEI */,[5,0]/*HOF */,[4,3]/*KIE */,[,]/*MAI */,[5,1]/*LEI */,[,]/*STP */,[4,0]/*STU */,[3,0]/*UNB */,[3,0]/*BRE */,[3,2]/*WOL */],
    [equipe[4][0],[,]/*AUG */,[1,1]/*LEV */,[0,5]/*MUN */,[,]/*BOC */,[,]/*DOR */,[0,2]/*MÖN */,[,]/*FRA */,[0,1]/*FRE */,[2,0]/*HEI */,[,]/*HOF */,[2,2]/*KIE */,[,]/*MAI */,[3,3]/*LEI */,[1,0]/*STP */,[,]/*STU */,[,]/*UNB */,[0,1]/*BRE */,[1,3]/*WOL */],
    [equipe[5][0],[,]/*AUG */,[2,3]/*LEV */,[1,1]/*MUN */,[4,2]/*BOC */,[,]/*DOR */,[,]/*MÖN */,[2,0]/*FRA */,[4,0]/*FRE */,[4,2]/*HEI */,[1,1]/*HOF */,[,]/*KIE */,[,]/*MAI */,[2,1]/*LEI */,[2,1]/*STP */,[1,2]/*STU */,[,]/*UNB */,[2,2]/*BRE */,[,]/*WOL */],
    [equipe[6][0],[,]/*AUG */,[2,3]/*LEV */,[0,1]/*MUN */,[3,0]/*BOC */,[1,1]/*DOR */,[,]/*MÖN */,[1,1]/*FRA */,[,]/*FRE */,[3,2]/*HEI */,[,]/*HOF */,[4,1]/*KIE */,[,]/*MAI */,[,]/*LEI */,[2,0]/*STP */,[1,3]/*STU */,[1,0]/*UNB */,[4,1]/*BRE */,[,]/*WOL */],
    [equipe[7][0],[2,2]/*AUG */,[,]/*LEV */,[3,3]/*MUN */,[7,2]/*BOC */,[2,0]/*DOR */,[2,0]/*MÖN */,[,]/*FRA */,[4,1]/*FRE */,[,]/*HEI */,[3,1]/*HOF */,[,]/*KIE */,[1,3]/*MAI */,[,]/*LEI */,[,]/*STP */,[,]/*STU */,[,]/*UNB */,[1,0]/*BRE */,[1,1]/*WOL */],
    [equipe[8][0],[3,1]/*AUG */,[,]/*LEV */,[1,2]/*MUN */,[2,1]/*BOC */,[,]/*DOR */,[3,1]/*MÖN */,[,]/*FRA */,[,]/*FRE */,[1,0]/*HEI */,[,]/*HOF */,[3,2]/*KIE */,[0,0]/*MAI */,[,]/*LEI */,[0,3]/*STP */,[3,1]/*STU */,[,]/*UNB */,[,]/*BRE */,[3,2]/*WOL */],
    [equipe[9][0],[4,0]/*AUG */,[,]/*LEV */,[,]/*MUN */,[,]/*BOC */,[1,2]/*DOR */,[,]/*MÖN */,[0,4]/*FRA */,[0,3]/*FRE */,[,]/*HEI */,[0,0]/*HOF */,[,]/*KIE */,[,]/*MAI */,[0,1]/*LEI */,[0,2]/*STP */,[1,3]/*STU */,[2,0]/*UNB */,[,]/*BRE */,[1,3]/*WOL */],
    [equipe[10][0],[,]/*AUG */,[1,4]/*LEV */,[,]/*MUN */,[3,1]/*BOC */,[,]/*DOR */,[1,2]/*MÖN */,[2,2]/*FRA */,[1,1]/*FRE */,[,]/*HEI */,[,]/*HOF */,[3,2]/*KIE */,[,]/*MAI */,[4,3]/*LEI */,[0,2]/*STP */,[,]/*STU */,[0,4]/*UNB */,[3,4]/*BRE */,[0,1]/*WOL */],
    [equipe[11][0],[5,1]/*AUG */,[,]/*LEV */,[1,6]/*MUN */,[2,2]/*BOC */,[4,2]/*DOR */,[,]/*MÖN */,[2,4]/*FRA */,[,]/*FRE */,[1,0]/*HEI */,[1,3]/*HOF */,[,]/*KIE */,[0,3]/*MAI */,[0,2]/*LEI */,[,]/*STP */,[,]/*STU */,[0,2]/*UNB */,[,]/*BRE */,[0,2]/*WOL */],
    [equipe[12][0],[0,0]/*AUG */,[,]/*LEV */,[2,1]/*MUN */,[2,0]/*BOC */,[3,1]/*DOR */,[1,1]/*MÖN */,[,]/*FRA */,[,]/*FRE */,[0,2]/*HEI */,[2,0]/*HOF */,[,]/*KIE */,[,]/*MAI */,[0,2]/*LEI */,[,]/*STP */,[2,0]/*STU */,[1,1]/*UNB */,[1,2]/*BRE */,[,]/*WOL */],
    [equipe[13][0],[4,0]/*AUG */,[2,2]/*LEV */,[,]/*MUN */,[1,0]/*BOC */,[,]/*DOR */,[0,0]/*MÖN */,[2,1]/*FRA */,[3,1]/*FRE */,[,]/*HEI */,[,]/*HOF */,[,]/*KIE */,[,]/*MAI */,[,]/*LEI */,[2,0]/*STP */,[,]/*STU */,[0,0]/*UNB */,[4,2]/*BRE */,[1,5]/*WOL */],
    [equipe[14][0],[1,1]/*AUG */,[,]/*LEV */,[0,1]/*MUN */,[,]/*BOC */,[,]/*DOR */,[,]/*MÖN */,[0,1]/*FRA */,[,]/*FRE */,[0,2]/*HEI */,[,]/*HOF */,[3,1]/*KIE */,[0,3]/*MAI */,[0,0]/*LEI */,[,]/*STP */,[,]/*STU */,[3,0]/*UNB */,[0,2]/*BRE */,[0,0]/*WOL */],
    [equipe[15][0],[,]/*AUG */,[,]/*LEV */,[,]/*MUN */,[2,0]/*BOC */,[5,1]/*DOR */,[1,2]/*MÖN */,[2,3]/*FRA */,[4,0]/*FRE */,[,]/*HEI */,[1,1]/*HOF */,[2,1]/*KIE */,[3,3]/*MAI */,[2,1]/*LEI */,[0,1]/*STP */,[,]/*STU */,[3,2]/*UNB */,[,]/*BRE */,[,]/*WOL */],
    [equipe[16][0],[0,2]/*AUG */,[1,2]/*LEV */,[,]/*MUN */,[0,2]/*BOC */,[2,1]/*DOR */,[,]/*MÖN */,[1,1]/*FRA */,[0,0]/*FRE */,[,]/*HEI */,[2,1]/*HOF */,[,]/*KIE */,[2,1]/*MAI */,[0,0]/*LEI */,[1,0]/*STP */,[,]/*STU */,[,]/*UNB */,[,]/*BRE */,[,]/*WOL */],
    [equipe[17][0],[0,2]/*AUG */,[2,2]/*LEV */,[0,5]/*MUN */,[,]/*BOC */,[0,0]/*DOR */,[,]/*MÖN */,[,]/*FRA */,[0,1]/*FRE */,[3,3]/*HEI */,[,]/*HOF */,[2,1]/*KIE */,[1,0]/*MAI */,[,]/*LEI */,[,]/*STP */,[2,2]/*STU */,[4,1]/*UNB */,[,]/*BRE */,[,]/*WOL */],
    [equipe[18][0],[1,1]/*AUG */,[0,0]/*LEV */,[2,3]/*MUN */,[,]/*BOC */,[1,3]/*DOR */,[5,1]/*MÖN */,[1,2]/*FRA */,[,]/*FRE */,[,]/*HEI */,[,]/*HOF */,[2,2]/*KIE */,[4,3]/*MAI */,[,]/*LEI */,[,]/*STP */,[2,2]/*STU */,[1,0]/*UNB */,[2,4]/*BRE */,[,]/*WOL */]
]