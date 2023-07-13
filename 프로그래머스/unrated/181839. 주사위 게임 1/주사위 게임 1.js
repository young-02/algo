function solution(a, b) {
    var answer = 0;
    if(a % 2 ===1 && b %2 ===1){
        
        return answer  = (a**2) + (b **2)
    }
    if(a% 2 === 0 && b%2 ===0){
       return answer =Math.abs(a-b)
    }
    if(a% 2 === 1 || b%2 ===1){
       return answer = 2*(a+b)
    }
    return answer;
}