//1 Время
function durationBetweenDates(timebeg,timeend,value){
    if (value === "seconds"){ 
        return String(Math.abs((Date.parse(timeend) - Date.parse(timebeg))/1000))+" " +  `${value}`
    }
    else if (value === "minutes"){
        return String(Math.abs((Date.parse(timeend) - Date.parse(timebeg))/60000))+" " + `${value}`
    }
    else if (value === "hours") {
        return String (Math.abs((Date.parse(timeend) - Date.parse(timebeg))/3600000)) +" " + `${value}`
    }
    else if (value === "days"){
        return String (Math.abs((Date.parse(timeend) - Date.parse(timebeg))/86400000)) +" " + `${value}`
    }
}
durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days')

//2 Обьект

const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
}

function optimizer(array){
    const res = Object.entries(array).map(([key,value])=> ([key.toLocaleLowerCase(),parseFloat(value).toFixed(2)]));
    return Object.fromEntries(res)
}
console.log(optimizer(priceData))

//3 