function solution(array, height) {
    var answer = 0;
    array.map(n => {
        if(n > height){
            return answer++
        }
    })
    return answer;
}