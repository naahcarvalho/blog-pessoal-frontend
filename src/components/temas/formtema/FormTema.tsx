import { type ChangeEvent, useContext, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../contexts/AuthContext";
import type Tema from "../../../models/Tema";
import { atualizar, buscar, cadastrar } from "../../../services/Service";

function FormTema() {
  const navigate = useNavigate();

  const [tema, setTema] = useState<Tema>({} as Tema);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const params = useParams<{ id: string }>();

  async function buscarPorId(_id: string) {
    try {
      await buscar(`/temas`, setTema, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
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
    if (params.id) {
      buscarPorId(params.id);
    }
  }, [params.id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/temas");
  }

  async function gerarNovoTema(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (params.id !== undefined) {
        await atualizar(`/temas`, tema, setTema, {
          headers: { Authorization: token },
        });
        toast.success("O Tema foi atualizado com sucesso!", {
          className: "my-toast-success",
        });
      } else {
        await cadastrar(`/temas`, tema, setTema, {
          headers: { Authorization: token },
        });
        toast.success("O Tema foi cadastrado com sucesso!", {
          className: "my-toast-success",
        });
      }

      setTimeout(() => {
        setIsLoading(false);
        retornar();
      }, 2500);
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      } else {
        toast.error(
          params.id !== undefined
            ? "Erro ao atualizar o tema."
            : "Erro ao cadastrar o tema.",
          {
            className: "my-toast-error",
          }
        );
        setIsLoading(false);
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start mx-auto pt-24 bg-rose-100">
      <h1 className="text-4xl text-center my-8 text-purple-700 font-bold">
        {params.id === undefined ? "Cadastrar Tema" : "Editar Tema"}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoTema}>
        <div className="flex flex-col gap-2 text-gray- 600">
          <label htmlFor="descricao">Descrição do Tema</label>
          <input
            type="text"
            placeholder="Descreva aqui seu tema"
            name="descricao"
            className="border-2 border-slate-700 rounded-2xl p-2"
            value={tema.descricao || ""}
            onChange={atualizarEstado}
            required
          />
        </div>

        <button
          className="w-max mx-auto cursor-pointer rounded-full
          text-white border-2 border-purple-600 
          px-6 py-2 font-semibold bg-purple-600 
          hover:bg-purple-500 hover:text-white 
          transition duration-300 ease-in-out"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            />
          ) : (
            <span>{params.id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormTema;
