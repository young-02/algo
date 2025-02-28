const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let answer = '';
    for(let i = 0; i <str.length; i++){
        //대문자 확인후 대문자 변경
        if(str[i] === str[i].toUpperCase()){
            answer +=str[i].toLowerCase()
        }else{ //소문자 확인후 소문자 변경
            answer +=str[i].toUpperCase()
        } 
    }
    console.log(answer)
});