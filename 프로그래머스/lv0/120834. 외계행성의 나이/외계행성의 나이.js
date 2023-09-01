function solution(age) {
    let char = 'abcdefghij'
    let arr = String(age).split('')
    
    return  arr.map((v,)=> char[v]).join('');
}