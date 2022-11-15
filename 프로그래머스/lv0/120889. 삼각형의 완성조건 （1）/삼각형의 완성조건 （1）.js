function solution(sides) {
    var answer = 0;
    let max = sides.sort((a,b)=> b-a);
    if(max[0] < max[1] + max[2]){
        return 1
    }
    return 2;
}