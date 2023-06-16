function solution(start, end) {
    var answer = [];
    for(let i = end; i <= start; i++ ){
       answer.push(i)
      
    }
      answer.reverse()
    
    return answer;
}