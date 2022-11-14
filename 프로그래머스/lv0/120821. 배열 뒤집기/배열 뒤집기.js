function solution(num_list) {

    return num_list.reverse();
}

//다른 풀이 보충
function solution(num_list) {
    var answer = [];
    // 앞에서부터  원소 다시 추가
    num_list.forEach(i => answer.unshift(i))
    return answer
}

function solution(num_list) {
    var answer = [];
    // 원소의맨 마지막 인덱스 부터 ~ i가 0 같거나 클때 까지 뺀다음 맨뒤부터 새로운 배열에 넣는다.
    for(let i = num_list.length - 1; i >= 0; i--) {
        answer.push(num_list[i]);
    }
    return answer;
}

