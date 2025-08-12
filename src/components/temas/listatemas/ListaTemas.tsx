import { useContext, useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../contexts/AuthContext";
import type Tema from "../../../models/Tema";
import { buscar } from "../../../services/Service";
import CardTema from "../cardtemas/CardTemas";

function ListaTemas() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [temas, setTemas] = useState<Tema[]>([]);

  async function buscarTemas() {
    try {
      await buscar("/temas", setTemas, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      } else {
        console.error("Erro ao buscar temas:", error);
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      if (!toast.isActive("login-warning")) {
        toast.warn("Você precisa estar logado!", {
          toastId: "login-warning",
          className: "my-toast-warn",
        });
      }

      const timer = setTimeout(() => {
        navigate("/");
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [token, navigate]);

  useEffect(() => {
    buscarTemas();
  }, []);

  return (
    <>
      {temas.length === 0 ? (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperClass="dna-wrapper mx-auto"
        />
      ) : (
        <div className="flex justify-center w-full bg-rose-100">
          <div className="container flex flex-col">
            <div className="py-25 px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {temas.map((tema) => (
                <CardTema key={tema.id} tema={tema} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ListaTemas;
