/* 1º
let numero1, numero2;
numero1 = prompt("Digite o primeiro numero.");
numero2 = prompt("Digite o segundo numero.");


if (numero1 > numero2) {
    console.log("O maior numero é " + numero1); 
} else if (numero2 > numero1) {
    console.log("O maior numero é " + numero2); 
} else {
    console.log("Os numeros são iguais."); 
}
*/
/* 2º
let nota = prompt("Digite a nota do aluno:");

if (nota < 6) {
    console.log("Reprovado");
} else if (nota < 8) {
    console.log("Aprovado");
} else {
    console.log("Aprovado com louvor");
}
*/
/*
function calcularMedia(vetor) {
    
    if (vetor.length === 0) {
        return 0; 
    }
    
    
    var soma = 0;
    for (var i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }
    
    
    var media = soma / vetor.length;
    
    return media;
}


var numeros = [10, 20, 30, 40, 100];


console.log("A média dos números é: " + calcularMedia(numeros));
*/
/*
const letra = "b";

if (letra === "a") {
    console.log("A");
} else if (letra === "b") {
    console.log("B");
} else {
    console.log("Outra letra");
}
*/
/*
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function calcularSomaMatriz(matriz) {
    let soma = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
    }

    return soma;
}

console.log("A soma dos elementos da matriz é:", calcularSomaMatriz(matriz));
*/
/*
function calcularFatorial(numero) {
    
    if (numero < 0) {
        return "O fatorial de um número negativo não é definido.";
    }

    if (numero === 0) {
        return 1;
    }

    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    return fatorial;
}

const numero = parseInt(prompt("Digite um número para calcular o fatorial:"));

console.log("O fatorial de", numero, "é:", calcularFatorial(numero));
*/
/*
const escolha = parseInt(prompt("Escolha uma opção:\n1. Opção 1\n2. Opção 2\n3. Opção 3"));

switch (escolha) {
    case 1:
        console.log("Opção 1 escolhida");
        break;
    case 2:
        console.log("Opção 2 escolhida");
        break;
    case 3:
        console.log("Opção 3 escolhida");
        break;
    default:
        console.log("Opção inválida");
}
*/
/*
const vetor = [10, 5, 8, 20, 15];

function encontrarMaiorNumero(vetor) {
  
    if (vetor.length === 0) {
        return "O vetor está vazio.";
    }
   
    let maior = vetor[0];
   
    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i];
        }
    }

    return maior;
}

console.log("O maior número no vetor é:", encontrarMaiorNumero(vetor));
*/
