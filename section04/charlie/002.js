/*

N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하는 프로그램을 작성하세요. 
예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출력한다.
단 910를 뒤집으면 19로 숫자화 해야 한다. 첫 자리부터의 연속된 0은 무시한다.

// 입력 설명
첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.
각 자연수의 크기는 100,000를 넘지 않는다.

// 출력 설명
첫 줄에 뒤집은 소수를 출력합니다. 출력순서는 입력된 순서대로 출력합니다.

*/

function isPrime(num) { // 소수 판단
	if (num == 1)
		return false;

	for (let i = 2; i <= Math.sqrt(num); i++) {  // 제곱근까지 나눠지는 수 판단 (등호 안 넣고 < 하면 안됩니다.)
		if (num % i == 0)
			return false;
	}
	return true;
}

function solution(N, numbers) {
	const answer = [];

	for (const x of numbers) {
		let reverse = parseInt((x + '').split('').reverse().join(''));  // 숫자를 뒤집는데, 001은 1로 바꿔준다.
		if (isPrime(reverse))
			answer.push(reverse);
	}

	return answer;
}

const A = 9
const testA = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(A, testA)); // [23, 2, 73, 2, 3]

const B = 7
const testB = [100, 200, 300, 400, 500, 600, 700];
console.log(solution(B, testB)); // [2, 3, 5, 7]

const C = 7
const testC = [23, 27, 13, 71, 711, 111];
console.log(solution(C, testC)); // [31, 17]
