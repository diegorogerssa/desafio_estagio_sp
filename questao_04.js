// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  

const  percentual = () => {
  const SP = 67836.43
  const RJ = 36678.66
  const MG =  29229.88
  const ES =  27165.48
  const Outros =  19849.53

  const total = SP + RJ + MG + ES + Outros
  console.log(total);

  let spPercentual = (SP / total)  * 100
  let rJPercentual = (RJ / total) * 100
  let mGPercentual = (MG / total)  * 100
  let eSPercentual = (ES / total) * 100
  let outrosPercentual = (Outros / total)  * 100

  console.log("O percentual de cada estado dentro do valor mensal da distribuidora foi: ");
  console.log(`SP = ${spPercentual.toFixed(2).replace(".", ",")}%`);
  console.log(`RJ = ${rJPercentual.toFixed(2).replace(".", ",")}%`);
  console.log(`MG = ${mGPercentual.toFixed(2).replace(".", ",")}%`);
  console.log(`ES = ${eSPercentual.toFixed(2).replace(".", ",")}%`);
  console.log(`Outros = ${outrosPercentual.toFixed(2).replace(".", ",")}%`);
}

percentual()