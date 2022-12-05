function solution(my_string) {
    var answer = '';

  for(n of my_string){
    if(n !== 'a' && n !== 'e' && n !== 'i' && n !== 'o' && n !== 'u'){
        answer += n
    }
  }
    return answer;
}