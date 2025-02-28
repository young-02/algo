function solution(my_string, overwrite_string, s) {
    var answer =''
    let front = my_string.slice(0,s)
    let back = my_string.slice(s+overwrite_string.length)
    answer = front +overwrite_string +back
    console.log(answer)
    return answer;
}