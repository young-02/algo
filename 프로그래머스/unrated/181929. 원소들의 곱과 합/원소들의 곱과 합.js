function solution(num_list) {
    
    let mult =1;
    let squar = 0;
    num_list.forEach(v => {
        mult *= v
        squar +=v
    })
    return  mult > squar**2 ? 0 : 1 
 
}