function solution(a, b) {
    var answer = 0;
    let biga = String(a)+String(b)
    let bigb = 2*String(a)*String(b)
   
     console.log(biga,bigb)
    if(bigb>biga){
        return answer = Number(bigb)
    }
    if(biga>bigb || biga===bigb){
        return answer = Number(biga)
    }
    
    return answer;
}