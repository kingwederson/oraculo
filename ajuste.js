function ajuste(range,rodada,passada,atual){
    let termo1 = passada*(range-rodada)
    let termo2 = atual*rodada
    let media = (termo1+termo2)/range
    return Number(media.toFixed(2))
}
function ajuste10(rodada,passada,atual){
    let termo1 = passada*(10-rodada)
    let termo2 = atual*rodada
    let media = (termo1+termo2)/10
    return Number(media.toFixed(2))
}