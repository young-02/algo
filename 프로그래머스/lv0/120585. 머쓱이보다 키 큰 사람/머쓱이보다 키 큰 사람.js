function solution(array, height) {
    var answer = 0;
    for(let num of array){
        num > height && answer++ 
    }
    return answer;
}