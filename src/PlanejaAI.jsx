import { useState } from "react";
import { gerarAnaliseFinanceira } from "./services/financeAI";

export default function PlanejaAI() {
  const [renda, setRenda] = useState("");
  const [despesas, setDespesas] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [resposta, setResposta] = useState(null);
  const [historico, setHistorico] = useState([]);

  const analisar = (e) => {
    e.preventDefault();

    const resultado = gerarAnaliseFinanceira(renda, despesas, objetivo);

    setResposta(resultado);
    setHistorico((prev) => [resultado, ...prev]);
  };

  return (
    <div className="min-h-screen relative flex justify-center p-4 text-white overflow-hidden bg-slate-950">

      {/* FUNDO PRINCIPAL */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>

      {/* GLOW FORTE (AGORA VAI APARECER DE VERDADE) */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/25 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-120px] right-1/3 w-[400px] h-[400px] bg-blue-500/25 blur-[120px] rounded-full"></div>

      {/* CONTEÚDO */}
      <div className="relative z-10 w-full max-w-3xl space-y-6">

        {/* HEADER */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">
            💰 PlanejaAI
          </h1>
          <p className="text-slate-300 text-sm">
            Planejador Financeiro Inteligente 
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={analisar}
          className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-3 backdrop-blur-xl shadow-xl"
        >
          <input
            className="w-full p-3 bg-slate-800/70 border border-slate-700 rounded-xl outline-none focus:border-cyan-400 transition"
            placeholder="Renda mensal"
            value={renda}
            onChange={(e) => setRenda(e.target.value)}
          />

          <input
            className="w-full p-3 bg-slate-800/70 border border-slate-700 rounded-xl outline-none focus:border-cyan-400 transition"
            placeholder="Despesas mensais"
            value={despesas}
            onChange={(e) => setDespesas(e.target.value)}
          />

          <input
            className="w-full p-3 bg-slate-800/70 border border-slate-700 rounded-xl outline-none focus:border-cyan-400 transition"
            placeholder="Objetivo financeiro"
            value={objetivo}
            onChange={(e) => setObjetivo(e.target.value)}
          />

          <button className="w-full p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold shadow-lg hover:scale-[1.03] hover:shadow-cyan-500/40 transition-all">
            Gerar análise
          </button>
        </form>

        {/* RESULTADO */}
        {resposta && (
          <div className="space-y-4">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div className="bg-slate-900/50 border border-slate-800 p-5 rounded-2xl backdrop-blur-xl">
                <p className="text-slate-400 text-sm">Saldo</p>
                <p className="text-2xl font-bold text-emerald-400">
                  R$ {resposta.saldo}
                </p>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 p-5 rounded-2xl backdrop-blur-xl">
                <p className="text-slate-400 text-sm">Status</p>
                <p className="text-2xl font-bold text-cyan-400">
                  {resposta.status}
                </p>
              </div>

            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-5 rounded-2xl backdrop-blur-xl">
              <p className="text-slate-400 text-sm">📊 Diagnóstico</p>
              <p className="mt-1 leading-relaxed">{resposta.diagnostico}</p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-5 rounded-2xl backdrop-blur-xl">
              <p className="text-slate-400 text-sm">💡 Conselho</p>
              <p className="mt-1 leading-relaxed">{resposta.conselho}</p>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 p-5 rounded-2xl">
              <p className="text-slate-400 text-sm">🚀 Motivação</p>
              <p className="text-cyan-300 font-medium mt-1 leading-relaxed">
                {resposta.motivacao}
              </p>
            </div>

          </div>
        )}
        {/* HISTÓRICO */}
        {historico.length > 0 && (
          <div className="space-y-3">
            <h2 className="text-slate-300 font-semibold">
              📊 Histórico de análises
            </h2>

            {historico.slice(0, 5).map((item, index) => (
              <div
                key={index}
                className="bg-slate-900/40 border border-slate-800 p-3 rounded-xl text-sm backdrop-blur hover:bg-slate-900/60 transition"
              >
                <p>Status: {item.status}</p>
                <p>Saldo: R$ {item.saldo}</p>
              </div>
            ))}
          </div>
        )}

        {/* FOOTER */}
        <footer className="mt-10 text-center text-slate-500 text-xs border-t border-slate-800 pt-4">
          © 2026 Desenvolvido por Natália Pastre — PlanejaAI
        </footer>

      </div>
    </div>
  );
}