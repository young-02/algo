function solution(num_list) {
    let even =''
    let odd =''
    num_list.forEach(v => {
        v % 2 === 0 ? even += v : odd +=v
    })
    return Number(even) + Number(odd)
}