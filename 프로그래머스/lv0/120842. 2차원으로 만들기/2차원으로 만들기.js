function solution(num_list, n) {
     const newArray = [];
      for (let i = 0; i < num_list.length; i += n) {
        newArray.push(num_list.slice(i, i + n)); 
      }
 
    return newArray;
}