function solution(arr1, arr2) {
    var answer = 0;
    
    if(arr1.length === arr2.length){
        function sum (arr){
            return arr.reduce((acc,cur)=>  {return acc + cur},0) 
        }
        let a = sum(arr1)
        let b = sum(arr2)
    
        if(a>b){
           return answer = 1
        }else if(a === b){ 
            return answer = 0
         }else{
           return  answer =-1
        }
     
    }
    
    return arr1.length > arr2.length ? answer  = 1 : answer  = -1
   
    return answer;
}