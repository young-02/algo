function solution(order) {
    var answer = 0;
    const str = String(order)
    
    for(let item of str){
        if(item === '3' || item === '6' || item === '9'){
           answer++
        }
    }
    return answer
}