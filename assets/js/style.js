let continuar = true;
let gaba = ['B,D,A,A,E,C,E,A,B,B'];
let notas = [];
let alunos = 0;


while (continuar) {
    let respostasl = [];
    let i = 0;
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
    if (i >= 0 && i <= 10) {
        alert(`A nota de ${nome} é ${i}`);
    }

    for (let cont = 0; cont < gaba.length; cont++) {
        let rs = prompt("quer continuar?");
        respostasl.push(rs.toUpperCase());
        if (respostasl[cont] === gaba[cont]) {
            i++;
        }
    }

    alert(`Nota do aluno ${i}`);

    notas.push(i);

    let racontinuar = prompt("Deseja adicionar um aluno?");
    if (racontinuar.toUpperCase() != 'S') {
        continuar = true;
    }
    alunos++;
}

console.log(alunos);
console.log(notas);


