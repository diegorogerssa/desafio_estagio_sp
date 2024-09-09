// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

const fibonacci = (n) => {
  let anterior = 0
  let atual = 1
  let proximo = anterior + atual
  const sequencia_fibonacci = [anterior, atual]

  do{
    anterior = atual
    atual = proximo
    proximo = anterior + atual
    sequencia_fibonacci.push(proximo)
    
    if (proximo >= n) {
        if (sequencia_fibonacci.includes(n)) {
          return console.log(`O número ${n} faz parte da sequência de fibonacci`);
          
        }else {
          return console.log(`O número ${n} não parte da sequência de fibonacci`);
        }
        
    }
} while  (proximo <= n) 
  console.log(anterior, atual, proximo);
} 

fibonacci(0)
fibonacci(-1)
fibonacci(5)
fibonacci(13)
fibonacci(34)
fibonacci(4)
fibonacci(10)
fibonacci(20)