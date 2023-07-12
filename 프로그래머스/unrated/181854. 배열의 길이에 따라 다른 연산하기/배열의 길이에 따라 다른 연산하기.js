function solution(arr, n) {
    var answer = [];
    
    arr.forEach((item,idx)=>{
        idx +=1
         if(arr.length % 2 === 0 && idx % 2 === 0 ){
              return answer.push(item + n)
         }
         if(arr.length % 2 === 1 && idx % 2 === 1 ){
              return answer.push(item + n)
         }else{
                answer.push(item)
         }
    })
    return answer;
}