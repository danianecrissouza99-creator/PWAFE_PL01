type Perfil = {
  nome: string;
  curso: string;
  ano: number;
  cidade: string;
  interesses: string[];
  procuraEstagio: boolean;
};

const perfil: Perfil = {
  nome: "Daniane Souza",
  curso: "Desenvolvimento de Software",
  ano: 2,
  cidade: "Porto",
  interesses: ["Programação", "Jogos", "Música"],
  procuraEstagio: true,
};

function saudacao(hora: number): string {
  if (hora < 12) return "Bom dia";
  if (hora < 20) return "Boa tarde";
  return "Boa noite";
}

export default function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <section className="w-full max-w-xl rounded-2xl bg-white p-8 text-center shadow-lg">
        <div className="mx-auto flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-sky-600 text-3xl font-bold text-white">
          {perfil.nome[0]}
        </div>

        <div>
          <p className="mt-4 text-sm text-slate-500">
            {saudacao(new Date().getHours())}
          </p>
          <h1 className="text-2xl font-bold text-slate-900">{perfil.nome}</h1>
          <p className="mt-1 text-slate-500">
            {perfil.curso} · {perfil.ano}.º ano · {perfil.cidade}
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700">
              {perfil.interesses[0]}
            </span>
            <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700">
              {perfil.interesses[1]}
            </span>
            <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700">
              {perfil.interesses[2]}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
