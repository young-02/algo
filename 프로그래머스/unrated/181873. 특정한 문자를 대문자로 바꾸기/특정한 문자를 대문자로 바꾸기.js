function solution(my_string, alp) {
    var answer = '';
   for(let i = 0; i <= my_string.length-1; i++){
       my_string[i] === alp ?  answer += my_string[i].toUpperCase() :answer +=my_string[i]
   }
    return answer;
}