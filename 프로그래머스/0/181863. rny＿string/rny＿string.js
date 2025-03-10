function solution(rny_string) {
    var answer = '';
    for(let st of rny_string){
        
        //m이면 answer에 rn을 추가하고
        if(st === "m"){
            answer += "rn"
        }else{ // 아니면 answer에 st를 추가한다.
            answer +=st
        }
      
    }
    return answer;
}