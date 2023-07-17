function solution(todo_list, finished) {
   
    const findIdx = []
    
   for(let i = 0 ; i< finished.length; i++){
        if(!finished[i]){ 
          findIdx.push(todo_list[i])
        }
    }
   
   
    return findIdx
}