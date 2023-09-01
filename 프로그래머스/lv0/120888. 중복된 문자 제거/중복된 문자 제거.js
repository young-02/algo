function solution(my_string) {
    let a = new Set(my_string)
    return [...a].join('')
}