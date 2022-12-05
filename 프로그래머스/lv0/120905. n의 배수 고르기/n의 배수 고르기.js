function solution(n, numlist) {
    var answer = [];
    
    for(item of numlist){
        if(item % n === 0){
            answer.push(item)
        }
    }
    return answer;
}



//다른사람 풀이

function solution(n, numlist){
    return numlist.fileter(x => x % n === 0)
}

