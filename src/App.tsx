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

export default function App() {
  return (
    <main>
      <h1>{perfil.nome}</h1>
      <p>Curso: {perfil.curso}</p>
      <p>Ano: {perfil.ano}.º ano</p>
      <p>Cidade: {perfil.cidade}</p>
      <p>Interesses: {perfil.interesses.join(", ")}</p>
      <p>Para o ano estou no {perfil.ano + 1}.º ano.</p>
    </main>
  );
}
