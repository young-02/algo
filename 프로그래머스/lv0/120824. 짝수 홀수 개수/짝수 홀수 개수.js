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
    },0)
    answer.push(even,odd)
    return answer;
}