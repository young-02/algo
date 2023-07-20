function solution(myString) {
    var answer = myString.split('x').sort().filter(el => el !== '')
    return answer;
}