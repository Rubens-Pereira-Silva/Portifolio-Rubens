interface TecnologiaInterface {
  nome: string;
  imagem: string;
  description: string;
}

export default function Tecnologia({
  nome,
  imagem,
  description,
}: TecnologiaInterface) {
  return (
    <div className="flex flex-col items-center justify-center w-28 p-2 bg-white rounded-2xl hover:scale-120">
      <img
        src={"/public/images/tecnologias/" + imagem}
        alt={description}
        className="w-20"
      />
      <p>{nome}</p>
    </div>
  );
}
