function solution(arr, k) {
    var answer = [];
    
   for(let i = 0; i < arr.length; i++){
       if(k % 2 ===0){
           answer.push(arr[i] + k)
       }
       else{ answer.push(arr[i] *k)}
   }
    return answer;
}

// 답변2
function solution(arr,k){
    arr.map(v => k %2 ? v * k : v + k)
}

map()메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.


//답변3
function solution(arr, k){
    let answer = []
    
    for(num of arr ){
        if(k %2 === 0){
            answer.push(num + k)
        }else{
            answer.push(num* k)
        }
    }   
    return answer
}

for...of 반복하고 각 개별 속성값에 대해 실행되는 문이 있는 사용자 정의 반복후 후크를 호출하는 루프를 생성합니
const array1 = ['a','b','c']
for(const element of array1){
    console.log(element)
  // a,b,c
}
