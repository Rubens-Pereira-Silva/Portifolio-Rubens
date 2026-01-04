import { tecnologiasLista } from "../../public/info";
import Tecnologia from "./Tecnologia";

export default function Tecnologias() {
  const lista = tecnologiasLista();
  const cards = [];
  for (let i = 0; i < lista.length; i++) {
    cards.push(
      <Tecnologia
        key={i}
        nome={lista[i][0]}
        imagem={lista[i][0] + ".png"}
        description="salve"
      />
    );
  }
  console.log(lista);
  return (
    <div>
      <h4>Tecnologias</h4>
      <div className="flex justify-center flex-wrap gap-4 p-3">{cards}</div>
    </div>
  );
}
