const usandoLodash = require ('lodash');

let numeros = [0, 0, 1, 2, 3, 4, 5, 6, 8, 9, 10]

let ordemCrescente = usandoLodash.orderBy(numeros);
console.log("Array ordenado em ordem crescente:", ordemCrescente);

let semRepetidos = usandoLodash.uniq(numeros);
console.log("Array sem numeros repetidos:", semRepetidos);

let filtroNumerosPares = usandoLodash.filter(numeros, (num) => num % 2 === 0);
console.log("Array apenas de numeros pares:", filtroNumerosPares);

let mapeamento = usandoLodash.map(numeros, (num) => num * 2);
console.log("Array de numeros dobrados:", mapeamento);

let soma = usandoLodash.sum(numeros);
console.log("Array somado:", soma);