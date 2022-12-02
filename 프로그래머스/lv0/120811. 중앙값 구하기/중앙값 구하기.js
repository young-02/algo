function solution(array) {
    let num = array.sort((a,b)=> {return b - a})
    return num[Math.floor(array.length / 2)]
    
    
    //sort 하여서 순서를 오름차순으로 정하고
    // 베열의 길이를 반으로 나눠서 오름차순으로 만들어둔 배열의 인덱스 값으로 리턴한다.
}
