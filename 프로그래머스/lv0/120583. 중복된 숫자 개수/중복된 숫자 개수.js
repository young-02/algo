function solution(array, n) {
    var answer = 0;
    array.reduce((acc,cur)=>{
       if(cur == n){
           answer++
       } 
    },0)
    return answer;
}