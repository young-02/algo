function solution(start, end) {
    var answer = [];
    for(let i = end; i <= start; i++ ){
       answer.push(i)     
    }
      answer.reverse()
    return answer;
}


//방법2
function solution(start, end) {
    var answer = [];
    for(let i = start; i >= end; i-- ){
       answer.push(i)     
    }
    return answer;
}

end 보다 같거나 클때 까지 start 를 하나씩 뺀다.

