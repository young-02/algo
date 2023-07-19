function solution(str1, str2) {
    var answer = '';
    
    for(let i = 0; i <= str1.length-1; i++){
        answer+= str1[i]+str2[i]
    }
    return answer;
}