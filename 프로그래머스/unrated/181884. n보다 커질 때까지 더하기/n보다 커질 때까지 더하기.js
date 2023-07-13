function solution(numbers, n) {
    var answer = 0;
    
    numbers.reduce((acc,cur)=>{
       if(acc  > n ) {
           return answer = acc 
       } else{
           return answer = acc + cur
       }
       return  acc + cur
    },0)
    
    
    return answer;
}