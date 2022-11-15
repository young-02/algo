function solution(sides) {
    var answer = 0;
    let max = sides.sort((a,b)=> b-a);
    if(max[0] < max[1] + max[2]){
        return 1
    }
    return 2;
}

// 다른풀이
function solution(sides) {
    var answer = 0;
    const max = Math.max(...sides);
    const sum = sides.reduce((a,b) => a + b, 0) - max;

    answer = max < sum? 1 : 2;

    return answer;
}
