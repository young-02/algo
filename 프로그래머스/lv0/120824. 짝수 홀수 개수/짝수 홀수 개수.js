function solution(num_list) {
    var answer = [];
    var odd = 0;
    var even = 0;
    
    num_list.filter(v => v % 2 === 0 ? even++ : odd++)
    answer.push(even,odd)
    return answer;
}