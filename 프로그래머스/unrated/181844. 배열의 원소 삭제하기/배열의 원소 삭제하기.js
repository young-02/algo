function solution(arr, delete_list) {
   return arr.filter(it => !delete_list.includes(it))
}