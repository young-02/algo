function solution(n) {
    var answer = 0;
    for(let i = 1; i <= n; i++){
        if(n % 2 === 0 && i % 2 === 0){
             answer +=i**2
        }else if (n % 2 === 1 && i % 2 === 1){
            answer += i
        }
    }
    return answer;
}