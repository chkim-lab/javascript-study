/*
-. 배열과 과련된연산을 수행하세요.
1. 요소 "Jazz", Blues"가 잇는 styles 배열을 생성합니다.
2. "Rock-n-Roll"을 배쳘 끝에 추가합니다.
3. 배열의 첫 번째 요소를 꺼내서 출력합니다.
4. "Rap"과 "Reggae"를 배열의 앞에 추가합니다.
- 단계를 하나씩 거칠 때마다 아래와 같이 배열이 변해야 합니다.
Jass, Blues
Jass, Blues,Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll
*/

var musics=['Jazz','Blues'];
console.log(musics);

musics.push('Rock-n-Roll');
console.log(musics);

musics.shift();
console.log(musics);

musics.unshift('Reggae');
musics.unshift('Rap');
console.log(musics);