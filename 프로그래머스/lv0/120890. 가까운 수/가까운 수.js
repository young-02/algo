function solution(array, n) {
//1. array의 각 원소와 n과의 절대 거리를 계산하고, 원소와 쌍으로 새 배열에 저장한다.
	const distance = array.map(el => {
		return {distance : Math.abs(n-el), value:el}
	})

	//2. 거리를 기준으로 오름차순 정렬한다. 거리가 같아면 값으로 오름차순을 정렬한다.
	distance.sort((a,b) => {
		if(a.distance === b.distance){
			return a.value - b.value
		}
		return a.distance - b.distance
	})

	// 3. 정렬된 배열의 첫 번째 원소의 value가 n과 가장 가까운 원소이다.
	return distance[0].value
}