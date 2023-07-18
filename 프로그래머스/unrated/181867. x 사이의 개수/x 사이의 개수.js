function solution(myString) {
    var answer = [];
    
    myString.split('x').forEach(it => answer.push(it.length))
    
    
    return answer;
}