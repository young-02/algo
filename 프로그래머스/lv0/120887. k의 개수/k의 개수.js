function solution(i, j, k) {
    var answer = 0;
    var str = Array(j).fill(1).map((_,indx) => indx+1 ).slice(i-1).join('')
    for(let num of str){
       if(Number(num) === k){
          answer++
       }
    }
    return answer;
}