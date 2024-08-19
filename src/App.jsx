import { useState } from "react";
import "./App.css";
import LinksPage from "./components/LinksPage";

// Importando imagens
import arte from "./assets/img/arte.png";
import confraria from "./assets/img/confraria.png";
import empatia from "./assets/img/empatia.png";
import sustentabilidade from "./assets/img/sustentabilidade.png";

// Importando PDF
import artePDF from "./assets/pdf/EditalArte.pdf";
import confrariaPDF from "./assets/pdf/EditalConfraria.pdf";
import empatiaPDF from "./assets/pdf/EditalEmpatia.pdf";
import sustentabilidadePDF from "./assets/pdf/EditalSustentabilidade.pdf";

function App() {
  const [count, setCount] = useState(0);
  const projects = [
    {
      name: "Mais Empatia",
      image: empatia, // Usando a imagem importada
      inscricaoLink: "https://forms.gle/kyALk9BTZYTJyipM9",
      editalLink: empatiaPDF,
    },
    {
      name: "Arte e Cultura: Formar e Transformar",
      image: arte, // Usando a imagem importada
      inscricaoLink: "https://forms.gle/a4RXQs3Tpbc9fYsCA",
      editalLink: artePDF,
    },
    {
      name: "Biologia Ilustrada",
      image: arte, // Usando a imagem importada
      inscricaoLink: "https://forms.gle/a4RXQs3Tpbc9fYsCA",
      editalLink: artePDF,
    },
    {
      name: "Confraria do Vale do Ivaí",
      image: confraria, // Usando a imagem importada
      inscricaoLink: "https://forms.gle/YrNUPiu9ew8ETnzf9",
      editalLink: confrariaPDF,
    },
    {
      name: "À Procura da Sustentabilidade",
      image: sustentabilidade, // Usando a imagem importada
      inscricaoLink: "https://forms.gle/Lh5gX1eTDLJSSZfWA",
      editalLink: sustentabilidadePDF,
    },
    // Adicione mais projetos conforme necessário
  ];

  return <LinksPage projects={projects} />;
}

export default App;
