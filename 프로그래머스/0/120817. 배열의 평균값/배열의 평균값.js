function solution(numbers) {
    let num =0;
    let answer = 0
   for(let i = 0; i<=numbers.length-1; i++){
       num+=numbers[i]
       answer= num/numbers.length
   }
    return answer
}