function solution(strArr) {
    var answer = [];
    answer = strArr.map((str,idx) => {
        return idx % 2 === 0 ?   str.toLowerCase() : str.toUpperCase() 
    })
    return answer;
}