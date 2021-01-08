/*
- Quiz.
아래 요구사항에 맞는 코드를 작성하고
브라우저에서 실행하여 테스트하세요.

-요구사항
1. 프로그램 실행 시 0~100사이의 무작위 두 수의 합을 
   물어보는 문제가 지속적으로 출제되게 하세요.
2. 올바른 답을 입력할 시 "정답입니다."를
   틀린답은 입력할 시 "오답입니다"를 출력하세요.
3. 사용자가 0을 입력하면 문제 출제를 중단하고
   누적된 정답 횟수와 오답횟수를 출력하세요.
*/
var num1;
var num2;
var answer;
var countOK = 0;
var countNG = 0;
while (true) {
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);

    answer = +prompt(`${num1} + ${num2} =`)
    if (answer === 0) {
        break;
    } else if (answer === num1 + num2) {
        countOK++;
    } else {
        countNG++;
    }
}
alert(`정답개수:${countOK} 오답개수:${countNG}`);