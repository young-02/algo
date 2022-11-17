function solution(my_string, letter) {
    var answer = '';
     [...my_string].map(n => {
        if(!(n == letter)){
            return answer += n
        }
    })
    return answer;
}