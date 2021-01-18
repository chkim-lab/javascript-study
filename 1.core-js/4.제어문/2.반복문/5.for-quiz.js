/*
- Quiz. 아래 요구사항에 맞는 코드를 작성하고
        콜솔에서 실행하여 테스트하세요.
- 요구사항
1. 프로그램 실행 시 2~9단 중 무작위로 구구단이 등장하게 하세요.
2. for문과 while문으로 가각 구현하세요.
힌트) 먼저 2단을 구현해 본 뒤, 성고ㅗㅇ하면 랜덤 구구단으로 바꿔보기
- 출력 예시
4 x 1 = 4
4 x 2 = 4
...
4 x 9 = 4
*/

// 1 ~ 9
// var numDan = Math.floor(Math.random() * 7) + 2;
// for(var num=1; num<10;num++){
//     console.log(`${numDan} x ${num} = ${numDan * num}`);
// }

var table = Math.floor(Math.random() * 8) +2
console.log('=================');
console.log(` 구구단 ${table}`);
console.log('=================');
for(var line = 1 ; line<=9;line++){
    console.log(`${table} x ${line} = ${table * line}`);
}
