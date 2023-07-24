function solution(my_string, index_list) {
    var answer = index_list.map(it => my_string[it]).join('')
    return answer;
}