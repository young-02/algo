function solution(bridge_length, weight, truck_weights) {
  var timeCount = 0;
  // 다리
  const bridge = Array(bridge_length).fill(0); //bridgh_length 길이만큼 배열 생성한다.

  // 현재 다리의 총 무게
  let currentBridgeWeight = 0;

  // while (건너지 못한 트럭이 없을때까지)
  while (truck_weights.length) {
    timeCount = timeCount + 1; // timeCount++
    // 다리의 제일 앞에 있던 트럭은 빠져나온다.
    bridge.shift();
    // 현재 다리의 총 무게 갱신
    currentBridgeWeight = bridge.reduce((prev, cur) => {
      return prev + cur;
    }, 0);
    // if(갱신된 다리의 무게 + 건너야 할 첫번째 트럭무게 <= weight)
    if (currentBridgeWeight + truck_weights[0] <= weight) {
      //다음 트럭이 다리위로 이동하게 한다.
      bridge.push(truck_weights.shift());
    } else {
      // 아니라면, 다리 위에 있는 트럭들만 한칸 이동
      bridge.push(0);
    }
  }

  return timeCount + bridge_length;
}

const result = solution(2, 10, [7, 4, 5, 6]);
console.log(result);
