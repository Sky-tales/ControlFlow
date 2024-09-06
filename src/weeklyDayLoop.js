function getDayIfElse(day){
    if (day ===1){
        return "Lundi"
    }
    if (day ===2){
        return "Mardi"
    }
    if (day ===3){
        return "Mercredi"
    }
    if (day ===4){
        return "Jeudi"
    }
    if (day ===5){
        return "Vendredi"
    }
    if (day ===6){
        return "Samedi"
    }
    if (day ===7){
        return "Dimanche"
    }
    else{
        return "ce n'est pas un jour valide"
    }
}
    for (let day = 1; day < 8; day++) {
        console.log(getDayIfElse(day));
}
    //finis