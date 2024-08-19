import { useState } from "react";
import "./App.css";
import LinksPage from "./components/LinksPage";
function App() {
  const [count, setCount] = useState(0);
  const projects = [
    {
      name: "Projeto de Pesquisa A",
      image: "src/assets/img/logo.png",
      inscricaoLink:
        "https://ifpr.edu.br/ivaipora/nossos-cursos/ensino-superior/bacharelado-em-sistemas-de-informacao/",
      editalLink:
        "https://ifpr.edu.br/ivaipora/wp-content/uploads/sites/15/2018/08/PPC-Bacharelado-em-Sistemas-de-Informacao-versao-final.pdf",
    },
    {
      name: "Projeto de Extensão B",
      image: "src/assets/img/logo.png",
      inscricaoLink:
        "https://ifpr.edu.br/ivaipora/nossos-cursos/ensino-superior/bacharelado-em-sistemas-de-informacao/",
      editalLink:
        "https://ifpr.edu.br/ivaipora/wp-content/uploads/sites/15/2018/08/PPC-Bacharelado-em-Sistemas-de-Informacao-versao-final.pdf",
    },
    // Adicione mais projetos conforme necessário
  ];

  return <LinksPage projects={projects} />;
}

export default App;
