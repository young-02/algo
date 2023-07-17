function solution(todo_list, finished) {
   
    const findIdx = []
    
   for(let i = 0 ; i<finished.length; i++){
        if(!finished[i]){ 
          findIdx.push(i)
        }
    }
   
    const filterIdx = todo_list.filter((item,idx)=> findIdx.includes(idx))
   
    return filterIdx
}