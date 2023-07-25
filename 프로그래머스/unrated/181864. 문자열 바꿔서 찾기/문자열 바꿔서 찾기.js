function solution(myString, pat) {
    var answer = 0
    let result = myString.split('').map(it => it === 'A' ? 'B' :'A').join('').includes(pat)
    answer= result ? 1 :0
    return answer;
}