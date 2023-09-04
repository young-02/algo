function solution(array, n) {
 return array.reduce((a,c)=> Math.abs(a-n) < Math.abs(c-n) ? a : Math.abs(a-n) === Math.abs(c-n) ? Math.min(a, c) : c);
}