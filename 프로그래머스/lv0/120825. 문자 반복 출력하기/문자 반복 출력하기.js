function solution(my_string, n) {
    let arr = [...my_string]
    return   arr.map(str => str.repeat(n)).join('')
}