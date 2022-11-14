function solution(array, height) {
    var answer = 0;
    array.map(n => {
        if(n > height){
            return answer++
        }
    })
    return answer;
}


//다른사람 풀이 보충
//1.filter
function solution(array, height) {
    var answer = array.filter(item => item > height).length;
    return answer;
}

//2.forEach
function solution(array, height) {
    var answer = 0;
    array.forEach(v=> {if(v>height) answer++;})
    return answer;
}

