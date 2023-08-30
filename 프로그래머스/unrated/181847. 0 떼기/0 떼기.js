function solution(n_str) {
    let arr = [];

    // n_str 을 돌면서 
    for(let char of n_str){
        // 배열에 하나씩 저장
         arr.push(char)
        // 만약 배열의 첫번째 가 '0' 이면
        if(arr[0] === '0'){
            // 앞에서 삭제 
            arr.shift()
        }
    }
    // 배열을 다시 문자열로 변환
    return arr.join('')
}

//다른사람 문제 풀이

//1.
//str을 숫자로 변환하여 앞에 붙은 '0'을 제거한다.
// String 으로 숫자->문자열 변환
const solution = () => String(Number(str))


//2. for문
// 1. 문자열을 탐색
// 2. '0' 인지 아닌지 확인
// 3. 첫번째 '0'이 아닌 문자를 만나면 그 위치부터 문자열의 끝까지 잘라낸다.

const solution = () => {
    // 문자열 순회
    for(let i = 0; i < str.length; i++){
        //문자열이 '0' 아니면
        if(str[i] !== '0'){
            // 그 위치부터 문자열의 끝까지 잘라서 반환
            return str.slice(i)
        }
    }
    return str
}

//------ slice (배열,문자열 특정 부분 추출) : 원본배열이나 문자열은 변경되지 않는다.
//ex 
const str = 'hello'
const slicedStr = str.slice(1,4)
// 'ell'

//3. 정규식 표현
// replace 를 활용해 '0'을 빈문자열로 교체
const solution = () => {
    return str.replace(/^0+/,'')
}

//4. while
//1. 변수 초기화 : 카운터 변수를 사용해 0의 개수를 세어둔다.
//2. 문자열 탐색 : while 루프를 사용하여 문자열의 가장 앞부분에 있는 0을 세어둔다.
//3. 문자열 자르기 : 카운터 변수에 저장된 값을 사용해서 0을 제외한 나머지 부분을 잘라낸다.

const solution = ()=>{
    let counter = 0;
    // 가장 앞에 있는 0 을 찾기 위한 while
    while(str[counter] === '0'){
        //0을 찾을 때마다 카운터를 1씩 증가
        counter++
    }
    // 카운터값부터 문자열 끝까지의 부분을 반환한다.
    return str.substring(counter)
}

// subString 문자열의 특정 부분을 추출하여 새로운 문자열을 반환
//Ex
const str = 'hello world'
const newStr = str.substring(0,5)
// 'hello'
