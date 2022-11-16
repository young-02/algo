function solution(my_string, n) {
    let arr = [...my_string]
    return   arr.map(str => str.repeat(n)).join('')
}

//repeat 함수
string.repeat(count)

let num  = '123'
console.log(num.repeat(2))// '123123'

let arr = ['a','b','c']
arr.map(str => str.repeat(n))
console.log(arr.repeat(2))//["aa","bb","cc"]
