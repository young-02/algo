function solution(n, k) {
    var answer = 0;
    let ten = Math.floor(n / 10)
    if(!ten){
       answer =  n*12000 + k * 2000
    } 
    return answer = (n * 12000) + ((k - ten) * 2000)
       
}


//다른사람 풀이 보충
function solution(n, k) {
    return n*12000 + k*2000 - parseInt(n/10)*2000
}

// 인분*12000 + 음료*2000 - (n나누기10의 정수)*2000
//parseInt() => 정수를 반환한다. ex parseInt(1.234) // 1
