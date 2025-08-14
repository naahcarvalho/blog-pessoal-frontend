import { useContext, useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import type Postagem from "../../../models/Postagem";
import { buscar } from "../../../services/Service";
import CardPostagens from "../cardpostagens/CardPostagens";

function ListaPostagens() {
  const navigate = useNavigate();

  const [postagens, setPostagens] = useState<Postagem[]>([]);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPostagens() {
    try {
      await buscar("/postagens", setPostagens, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      console.log(error);
      if (error.toString().includes("401")) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (usuario.token === "") {
      alert("Precisa estar logado");
      navigate("/");
    }
  }, [navigate, usuario.token]);

  useEffect(() => {
    if (token) {
      buscarPostagens();
    }
  }, [token]);

  return (
    <>
      {postagens.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col mx-2">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
            {postagens.map((postagem) => (
              <CardPostagens postagem={postagem} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaPostagens;
