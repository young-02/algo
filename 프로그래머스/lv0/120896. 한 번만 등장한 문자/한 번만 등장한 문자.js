function solution(s) {
    var answer = []
    let arr = s.split('')
 
    for(let value of arr){
       
        if(s.indexOf(value) === s.lastIndexOf(value)){
            answer.push(value)
        }
    }
 
    return  answer.sort().join('')
}