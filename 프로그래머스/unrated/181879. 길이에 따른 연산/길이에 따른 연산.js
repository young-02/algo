function solution(num_list) {
    var answer = 0;
    var multiply = 1
    
    for(let i = 0; i < num_list.length; i++){
                 
        if(num_list.length >= 11){
            answer += num_list[i]
        }
        if (num_list.length <= 10) { 
           
          multiply *= num_list[i] 
            answer = multiply
           
        }
    }
    
    return answer;
}