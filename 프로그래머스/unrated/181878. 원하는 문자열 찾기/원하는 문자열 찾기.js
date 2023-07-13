function solution(myString, pat) {
    
    
    function uppercase(str){
        return str.toUpperCase()
    }
    const uppercaseString= uppercase(myString)
    const uppercasePat = uppercase(pat)
    
    return uppercaseString.includes(uppercasePat) ? 1 : 0
    
}