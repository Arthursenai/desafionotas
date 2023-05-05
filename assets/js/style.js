let i = 0;

while(i<=10) {
    let nome = prompt("Digite seu nome");
    let q1 = prompt("Digite a resposta da questao 1");
    let q2 = prompt("Digite a resposta da questao 2");
    let q3 = prompt("Digite a resposta da questao 3");
    let q4 = prompt("Digite a resposta da questao 4");
    let q5 = prompt("Digite a resposta da questao 5");
    let q6 = prompt("Digite a resposta da questao 6");
    let q7 = prompt("Digite a resposta da questao 7");
    let q8 = prompt("Digite a resposta da questao 8");
    let q9 = prompt("Digite a resposta da questao 9");
    let q10 = prompt("Digite a resposta da questao 10");
    if (q1 == 'B') {
        i++
    } if (q2 == 'D') {
        i++
    } if (q3 == 'A') {
        i++;
    } if (q4 == 'A') {
        i++;
    } if (q5 == 'E') {
        i++;
    } if (q6 == 'C') {
        i++;
    } if (q7 == 'E') {
        i++;
    } if (q8 == 'A') {
        i++;
    } if (q9 == 'B') {
        i++;
    } if (q10 == 'B') {
        i++;
    }
    if (i == 0) {
        alert(`A nota de ${nome} é ${i}`);
    } else if (i == 1) {
        alert(`A nota de ${nome} é ${i}`);
    } else if (i == 2) {
        alert(`A nota de ${nome} é ${i}`);
    } else if (i == 3) {
        alert(`A nota do ${nome} é ${i}`);
    } else if (i == 4) {
        alert(`A nota do ${nome} é ${i}`);
    } else if (i == 5) {
        alert(`A nota do ${nome} é ${i}`);
    } else if (i == 6) {
        alert(`A nota do ${nome} é ${i}`);
    } else if (i == 7) {
        alert(`A nota do ${nome} é ${i}`);
    } else if (i == 8) {
        alert(`A nota do ${nome} é ${i}`);
    } else if (i == 9) {
        alert(`A nota do ${nome} é ${i}`);
    } else if (i == 10) {
        alert(`A nota do ${nome} é ${i}`);
    } 
    let arr = [nome];
    let arr2 = [i];
    console.log(arr + arr2);
}



