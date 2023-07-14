function solution(myString) {
    var answer = '';
    for(const item of myString){
        if( item < 'l'){
             answer += item.replaceAll(item ,'l')
        } else{
            answer +=item
        }
    }
    return answer;
}