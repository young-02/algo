function solution(my_string, n) {
    var answer = '';
   answer = my_string.split('').reverse().slice(0,n).reverse().join('')
    return answer;
}