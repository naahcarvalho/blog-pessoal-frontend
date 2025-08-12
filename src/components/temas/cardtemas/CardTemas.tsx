import { Edit3, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import type Tema from "../../../models/Tema";

interface CardTemasProps {
  tema: Tema;
}

function CardTema({ tema }: CardTemasProps) {
  return (
    <div className="max-w-md rounded-xl shadow-lg overflow-hidden bg-[#1e1e2f] border border-purple-800 p-6 text-purple-300 my-8 flex flex-col justify-between">
      <h1>Tema</h1>

      <h2 className="text-xl font-semibold text-purple-400 mb-16 my-6 cursor-pointer">
        {tema.descricao}
      </h2>

      <div className="flex items-center gap-3 mt-auto">
        <Link
          to={`/editartema/${tema.id}`}
          className="flex items-center gap-2 bg-purple-900 px-4 py-2 rounded-md hover:bg-purple-800 transition-colors duration-300 cursor-pointer text-purple-300 font-medium select-none"
        >
          <Edit3 className="w-4 h-4" />
          Editar
        </Link>

        <button
          className="p-2 rounded-md bg-purple-900 hover:bg-purple-800 transition-colors duration-300 cursor-pointer text-purple-300 flex items-center justify-center"
          onClick={() => alert("Implementar lógica para deletar o tema aqui")}
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default CardTema;
