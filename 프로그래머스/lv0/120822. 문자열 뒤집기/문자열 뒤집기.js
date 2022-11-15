function solution(my_string) {
    let arr = my_string.split('')
    return arr.reverse().join('');
}


//메소드 정리
split('') - 문자열 -> 배열로 변환 ('')기준으로 변환된다. ex) 'abc' -> ['a','b','c']
join('') - 배열 -> 문자열로변환 ex)['a','b','c'] ->  'abc'
reverse() - 배열을 뒤집어준다.  ex) ['a','b','c'] -> ['c','b','a']



//다른 풀이 
function solution(my_string) {
    var answer = [...my_string].reverse().join("");
    return answer;
}

//풀이 
스프레드 연산자 [...]를 통해 문자열 -> 배열로 변환 ex) let str ='abc' -> [...str] -> ['a','b','c'
                                                                   
                                                                   ]
