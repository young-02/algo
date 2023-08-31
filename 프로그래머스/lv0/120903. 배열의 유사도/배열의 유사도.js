function solution(s1, s2) {
    return s2.filter(v=> s1.includes(v)).length
}