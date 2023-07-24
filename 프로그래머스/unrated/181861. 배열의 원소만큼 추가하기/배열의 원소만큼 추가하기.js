function solution(arr) {
    var answer = [];
     arr.map(it => {
       answer.push(...Array(it).fill(it))
       
     })
    return answer;
}