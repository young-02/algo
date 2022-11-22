function solution(n) {

    return [...(n + '')].map(s => +s).reduce((a, c) => a + c, 0);
}