function solution(my_string) {
    
    let a = my_string.split(' ')
    
    return a.filter(v => v !== "")
}