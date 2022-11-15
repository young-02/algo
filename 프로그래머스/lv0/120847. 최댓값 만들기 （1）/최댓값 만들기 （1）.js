function solution(numbers) {
    var answer = 0;
    var multi = numbers.sort((a,b)=> b-a)
    return multi[0] * multi[1];
}