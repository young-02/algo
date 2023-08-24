function solution(progresses, speeds) {
    var answer = [];
    
    let complete = 100
    let days = []
    
    for(let i = 0; i<=progresses.length-1;i++){
        let day = Math.ceil((complete - progresses[i]) / speeds[i])
       days.push(day)
    }
    
    console.log('남은 일수[]:',days)
    while(days.length > 0){
        let count  = 1
        for(let i = 1; i<= days.length; i++){
            if(days[0] >= days[i]){
                count++
                continue
            }
            answer.push(count)
            days.splice(0,count)
            break
        }
    }

    return answer;
}