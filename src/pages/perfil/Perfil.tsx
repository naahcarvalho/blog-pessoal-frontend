import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Perfil() {
  const navigate = useNavigate();
  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (!usuario.token) {
      alert("Você precisa estar logado");
      navigate("/");
    }
  }, [usuario.token]);

  return (
    <div className="bg-rose-100 min-h-screen flex justify-center items-start py-8 px-4">
      <div className="container mx-auto rounded-2xl overflow-hidden shadow-lg">
        <div className="capa-perfil w-full h-72 flex items-center justify-center bg-cover bg-center border rounded-2xl"></div>

        <div className="flex justify-center">
          <img
            className="rounded-full w-90 h-90 border-8 border-white -mt-28 object-cover"
            src={usuario.foto ? usuario.foto : "/eu.png"}
            alt={`Foto de perfil de ${usuario.nome}`}
          />
        </div>

        <div className="mt-8 mb-8 flex flex-col items-center bg-white rounded-xl shadow-inner py-6 w-3/4 mx-auto">
          <p className="text-xl font-semibold text-purple-800 mb-2">
            Nome: {usuario.nome}
          </p>
          <p className="text-lg text-purple-700">Email: {usuario.usuario}</p>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
