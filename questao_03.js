// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
  const json = require('./dadosFaturamento.json')

  const faturamentoMensal = json.faturamento
  let menorValor = faturamentoMensal[0].valor
  let maiorValor = faturamentoMensal[0].valor
  let diasfaturamentoMaiorQueMedia = 0
  let total = 0
  let diasSemFaturamento = 0

  for (const index of faturamentoMensal) {
    if (index.valor === 0) {
      diasSemFaturamento += 1
    }
    total += index.valor
}
let media = total / (faturamentoMensal.length - diasSemFaturamento)


    for (const index of faturamentoMensal) {
      if (index.valor < menorValor) {
        menorValor = index.valor
      }
      if(index.valor > maiorValor) {
        maiorValor = index.valor
        
      }if (index.valor > media) {
        
        diasfaturamentoMaiorQueMedia += 1
      }
  }
  
    console.log(`O maior faturamento foi ${maiorValor}`);
    console.log(`O menor faturamento foi ${menorValor}`);
    console.log(`${diasfaturamentoMaiorQueMedia} foi o numero de dias que o faturamento foi maior que a média}`);
    
    
  