function solution(a, b, c) {
    var answer = 0;
    if(a ===b && b ===c && c===a){
        answer = (a+b+c) * (a**2 + b**2 + c**2) * (a**3 + b**3 + c**3)
    }else if(a !==b && b !==c && c !==a){
        answer = a+b+c
    }else {
         answer = (a+b+c) * (a**2 + b**2 + c**2) 
    }
    return answer;
}


// a, b, c 세 숫자를 받아서 점수를 반환하는 함수를 정의합니다.
function solution(a: number, b: number, c: number): number {
    // answer 변수를 초기화합니다. 이 변수에 최종 점수가 저장될 것입니다.
    let answer = 0;

    // duplicates라는 Map을 생성합니다. 이 Map에는 각 숫자가 몇 번 등장하는지 저장됩니다.
    const duplicates = new Map<number, number>();

    // 입력받은 a, b, c를 배열에 담습니다.
    const numbers = [a, b, c];

    // Step 1: 각 숫자가 몇 번 등장하는지 확인합니다.
    for (const num of numbers) {
        duplicates.set(num, (duplicates.get(num) || 0) + 1);
    }

    // Step 2: 미리 총합과 제곱의 합을 계산해 둡니다.
    const sum = a + b + c;
    const sumOfSquares = a ** 2 + b ** 2 + c ** 2;

    // Step 3: 중복된 숫자의 수에 따라 점수를 계산합니다.
    switch (duplicates.size) {
        case 3:  // 모든 숫자가 다를 경우
            answer = sum;
            break;
        case 2:  // 두 숫자가 같고 하나가 다를 경우
            answer = sum * sumOfSquares;
            break;
        case 1:  // 모든 숫자가 같을 경우
            answer = sum * sumOfSquares * (a ** 3 + b ** 3 + c ** 3);
            break;
    }

    // 계산된 점수를 반환합니다.
    return answer;
}
