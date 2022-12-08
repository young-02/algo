function solution(hp) {
    var answer = 0;
    let result = hp % 5 
    let result2  = result % 3;
    answer =Math.floor( hp/5 ) + Math.floor(result/3)+result2
    return answer;
}