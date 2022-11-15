function solution(num_list) {
    var answer = [];
    let even = 0
    let odd = 0
    num_list.map((cur)=>{
      if(cur % 2 === 0){
          even++
      }else{
          odd++
      }
    })
    answer.push(even,odd)
    return answer;
}


//다른풀이

function solution(num_list) {
    return [num_list.filter(e => e%2 ===0).length, num_list.filter(e => e%2).length]
}

