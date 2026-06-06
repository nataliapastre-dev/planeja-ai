export function gerarAnaliseFinanceira(renda, despesas, objetivo) {
  const r = Number(renda) || 0;
  const d = Number(despesas) || 0;
  const saldo = r - d;
  const porcentagem = r > 0 ? (saldo / r) * 100 : 0;

  let status = "";
  let diagnostico = "";
  let conselho = "";
  let motivacao = "";

  if (saldo < 0) {
    status = "Crítico";
    diagnostico = "Você está gastando mais do que ganha.";
    conselho = "Corte gastos urgentes e reorganize suas despesas.";
    motivacao = "Você ainda pode virar esse jogo.";
  } else if (porcentagem < 20) {
    status = "Atenção";
    diagnostico = "Sua margem financeira é baixa.";
    conselho = "Reduza pequenos gastos e crie uma reserva.";
    motivacao = "Consistência muda tudo.";
  } else {
    status = "Saudável";
    diagnostico = "Você tem boa gestão financeira.";
    conselho = "Continue poupando e comece a investir.";
    motivacao = "Você está no caminho certo.";
  }

  return {
    saldo,
    status,
    objetivo: objetivo || "Não definido",
    diagnostico,
    conselho,
    motivacao,
  };
}