function solution(num_list, n) {
    var answer = [];
    num_list.reduce((acc,cur,index) => {

        if(index % n === 0){
            answer.push(cur)
        }
    },0)
    return answer;
}