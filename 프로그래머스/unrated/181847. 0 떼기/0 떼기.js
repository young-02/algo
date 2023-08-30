function solution(n_str) {
    let arr = [];

    for(let char of n_str){
         arr.push(char)
        if(arr[0] === '0'){
            arr.shift()
        }
    }
    
    return arr.join('')
}