function solution(num_list) {
    var answer = [];
    if(num_list[num_list.length-1] > num_list[num_list.length-2] ){
         return answer = [...num_list, num_list[num_list.length-1] - num_list[num_list.length-2]]
    }  return answer =[...num_list, num_list[num_list.length-1]*2]
}