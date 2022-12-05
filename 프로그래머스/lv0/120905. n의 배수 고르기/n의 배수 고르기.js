function solution(n, numlist) {
    var answer = [];
    
    for(item of numlist){
        if(item % n === 0){
            answer.push(item)
        }
    }
    return answer;
}