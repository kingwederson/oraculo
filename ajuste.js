function ajuste(range,rodada,passada,atual){
    let media = (passada*(range-rodada)+atual*rodada)/range
    return Number(media.toFixed(2))
}