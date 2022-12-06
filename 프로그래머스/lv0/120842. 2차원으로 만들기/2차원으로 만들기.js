function solution(num_list, n) {
     const newArray = [];
      for (let i = 0; i < num_list.length; i += n) {
        newArray.push(num_list.slice(i, i + n)); 
      }
 
    return newArray;
}


//slice 어떤 배열의 begin~end 까지(end미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환
