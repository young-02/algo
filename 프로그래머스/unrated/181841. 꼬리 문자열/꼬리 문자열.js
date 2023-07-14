function solution(str_list, ex) {
    var answer = '';
    
    for(let i = 0; i <= str_list.length-1; i++){
      if(!str_list[i].includes(ex)){
          answer += str_list[i]
      }
    }
    return answer;
}