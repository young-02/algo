function solution(strArr) {
    var answer = strArr.filter(el => !el.includes('ad'))
    return answer;
}