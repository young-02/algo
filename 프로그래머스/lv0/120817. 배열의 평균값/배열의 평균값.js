function solution(numbers) {
    var answer = 0;
    numbers.map((val)=> {
        answer +=val/numbers.length
    })
    return answer;
}