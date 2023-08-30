function solution(arr) {
    var answer = 1;
    
    for(let i = 0; i<= arr.length-1; i++){
        
        for(let j = 0; j < arr[i].length-1; j++){
            if(arr[i][j] !== arr[j][i]){
                 answer = 0
                return answer
            }
        }
    }
    return answer;
}