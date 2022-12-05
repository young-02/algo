function solution(my_string) {
    var answer = '';

  for(n of my_string){
    if(n !== 'a' && n !== 'e' && n !== 'i' && n !== 'o' && n !== 'u'){
        answer += n
    }
  }
    return answer;
}




//다른사람 풀이

function solution (my_string){
    return Array.from(my_string).filter( t => !['a', 'e', 'i', 'o', 'u'].includes(t)).join('')
}

/*
  1. filter 로 조건을 만족하면 새로운 배열로 만든다.
  2. ['a', 'e', 'i', 'o', 'u'] 을 배열로 넣고 'a', 'e', 'i', 'o', 'u' 이 포함 되지 않는것들만 확인하여 includes()로 배열이 특정 요소를 포함하고 있는지 판별
  3. join('')배열 > 문자열로 만든다.
*/
