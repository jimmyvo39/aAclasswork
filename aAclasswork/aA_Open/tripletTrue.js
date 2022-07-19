function tripletTrue(str) {
    let chars = str.split("")
    
    for (i = 0; i < str.length; i++) {
        if (chars[i] === chars[i - 1] && chars[i] === chars[i + 1]) {
            return true
        }
    }
    return false
}