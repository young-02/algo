function solution(array, n) {
    var answer = 0;
    array.reduce((acc,cur)=>{
       if(cur == n){
           answer++
       } 
    },0)
    return answer;
}

//다른 풀이 보충
//1.filter
function solution(array, n) {
    var answer = 0;
    let Array = array.filter((item) => item === n).length
    return answer;
}
//2.reduce
function solution(array, n) {
    var answer = array.reduce((acc , num) => {
        if(n === num) acc++
        return acc
    } ,0)
    return answer;
}

