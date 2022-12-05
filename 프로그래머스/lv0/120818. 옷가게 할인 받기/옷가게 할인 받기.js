function solution(price) {
    if(price >= 500000){
        return Math.floor(price * 0.8)
    }else if(price >= 300000){
        return Math.floor(price * 0.9)
    }else if(price >= 100000){
        return Math.floor(price * 0.95)
    }
    return price
}


/*문제 풀이 실수 

1. 소수점 이하는 버리는 것을 안함 (문제를 잘 읽지 않음.)
2. 0원일때 원가를 return 해야함.

*/


//소수점 이하 버리기는 함수
Math.floor(123.12) //123 
