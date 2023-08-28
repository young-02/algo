function solution(my_string, s, e) {
    //문자열을 불변이므로 원본 문자열을 수정하는 것은 불가하다
    // 배열로 변경하여 가변한다.
    let arr = my_string.split('')

    // 배열 추출 slice는 end 인덱스를 미포함한다.
    let str = arr.slice(s, e+1).reverse()
   
    arr.splice(s, e - s+1 , ...str)
    return arr.join('');
}