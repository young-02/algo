function solution(array) {
    let num = array.sort((a,b)=> {return b - a})
    console.log(num)
    
    return num[Math.floor(array.length / 2)]
}