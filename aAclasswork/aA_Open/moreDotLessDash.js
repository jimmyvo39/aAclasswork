function moreDotLessDash(str) {
    let chars = str.split("")
    let dot = 0
    let dash = 0
    
    for (let i = 0; i < str.length; i++) {
        let char =chars[i]
        
        if (char === ".") {
            dot++
        }
        if (char === "-") {
            dash++
        }
    }
    
    return(dot > dash)
}