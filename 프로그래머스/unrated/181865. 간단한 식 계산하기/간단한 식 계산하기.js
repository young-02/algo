function solution(binomial) {
    var answer = 0;
     let arr =  binomial.split(' ')
     let num1 = Number(arr[0])
     let num2 =  Number(arr[2])
     
     switch (arr[1]){
         case '+' : answer =  num1+ num2
             break;
         case '-' : answer = num1- num2
             break;
         case '*' : answer = num1* num2
             break;
             
     }
    return answer;
}