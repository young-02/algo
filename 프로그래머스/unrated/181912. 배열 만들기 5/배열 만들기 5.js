function solution(intStrs, k, s, l) {
    var answer = [];
    intStrs.map((it)=>{
        let num = parseInt(it.substr(s,l))
        if(num > k){
            answer.push(num)
        }
    })
    
    return answer;
}