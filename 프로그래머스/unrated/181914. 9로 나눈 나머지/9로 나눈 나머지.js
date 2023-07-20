function solution(number) {
    var answer = 0;
    var sum = 0;
    for(let i = 0; i <= number.length-1; i++){
        sum += parseInt(number[i])
        answer = sum % 9
    }
    return answer;
}