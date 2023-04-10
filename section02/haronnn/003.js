// 가위 바위 보
// A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다. 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.
// 예를 들어 N=5이면
// 회수 1 2 3 4 5
// A의 정보 2 3 3 1 3
// B의 정보 1 1 2 2 3
// 승자 A B A B D
// 두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 게임 횟수인 자연수 N(1<=N<=100)이 주어집니다.
// 두 번째 줄에는 A가 낸 가위, 바위, 보 정보가 N개 주어집니다.
// 세 번째 줄에는 B가 낸 가위, 바위, 보 정보가 N개 주어집니다.
// ▣ 출력설명
// 각 줄에 각 회의 승자를 출력합니다. 비겼을 경우는 D를 출력합니다.
// ▣ 입력예제 1
// 5
// 2 3 3 1 3
// 1 1 2 2 3
// ▣ 출력예제 1
// A
// B
// A
// B
// D
function solution(count, a, b) {
  let answer = [];

  // count의 횟수만큼 반복문 돌리기
  // 배열의 요소끼리 비교하기
  for (let i = 0; i < count; i++) {
    if (a[i] === 1 && b[i] === 3) {
      answer.push("A");
    } else if (a[i] === 2 && b[i] === 1) {
      answer.push("A");
    } else if (a[i] === 3 && b[i] === 2) {
      answer.push("A");
    } else if (a[i] === b[i]) {
      answer.push("D");
    } else {
      answer.push("B");
    }
  }
  return answer;
}

const count = 5;
const a = [2, 3, 3, 1, 3];
const b = [1, 1, 2, 2, 3];
console.log(solution(count, a, b));
