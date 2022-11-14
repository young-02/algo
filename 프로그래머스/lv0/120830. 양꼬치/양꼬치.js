function solution(n, k) {
    var answer = 0;
    let ten = Math.floor(n / 10)

    if(!ten){
       answer =  n*12000 + k * 2000
    } 
    return answer = (n * 12000) + ((k - ten) * 2000)
       
}