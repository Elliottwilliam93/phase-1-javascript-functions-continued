function saturdayFun(activity) {
    if(activity === undefined) {
        activity = "roller-skate"
    }
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity) {
    if(activity === undefined) {
        activity = "go to the office"
    }
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(activity) {
    if(activity === "||") {
        activity = "||a dedicated programmer||"
    } else if(activity === "*") {
        activity = "*a hard worker*"
    }
    return `You are ${activity}!`
}

function wrapAdjective(special) {
    return function result(adjective) {
        let sentence = `You are ${special}${adjective}${special}!`
        return sentence;
    }
}