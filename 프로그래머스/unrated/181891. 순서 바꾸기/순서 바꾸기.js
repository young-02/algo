function solution(num_list, n) {
    var answer = [];
    var arr1 = num_list.splice(n)
    var arr2 = num_list.slice(0,n)
     answer = arr1.concat(arr2)
    return answer;
}