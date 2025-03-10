function solution(myString, pat) {
    var string = '';
    for(let str of myString) {
        
        //A -> B
        if(str === "A"){
            string +="B"
        //B->A
        }else if(str === "B"){
            string +="A"
        }else{
            string += str
        }
    }
    return string.includes(pat) ? 1: 0
}