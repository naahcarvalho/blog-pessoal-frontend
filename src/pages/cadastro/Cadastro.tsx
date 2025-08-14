import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";
import "../../utils/ToastCustom.css";
import "./Cadastro.css";

function Cadastro() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirmaSenha, setConfirmaSenha] = useState<string>("");
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar();
    }
  }, [usuario]);

  function retornar() {
    navigate("/login");
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

     console.log("Tentando cadastrar usuário:", usuario);
  console.log("Confirma senha:", confirmaSenha);

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
          console.log("Cadastro realizado, usuário retornado:", usuario);
        toast.success("Usuário cadastrado com sucesso!", {
          className: "my-toast-success",
        });
        setTimeout(() => {
          console.log("Navegando para login após cadastro.");
          navigate("/login");
        }, 2000);
      } catch (error) {
        toast.error("Erro ao cadastrar o usuário!", {
          className: "my-toast-error",
        });
      } finally {
        setIsLoading(false);
      }
    } else {
      console.log("Senha e confirmação não conferem ou senha curta");
      toast.warn(
        "Dados do usuário inconsistentes! Verifique as informações do cadastro.",
        {
          className: "my-toast-warn"
        }
      );
      setUsuario({ ...usuario, senha: "" });
      setConfirmaSenha("");
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex bg-rose-100">
      <div className="w-1/2 bg-gradient-to-br from-rose-400/90 to-purple-600/90 flex items-center justify-center p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none matrix-effect"></div>
        <img
          src="https://i.imgur.com/GMxlIXB.png"
          alt="Skin Matrix Fortnite"
          className="max-w-full max-h-[80vh] rounded-3xl drop-shadow-2xl"
        />
      </div>

      <div className="w-1/2 flex justify-center items-center bg-white/60 backdrop-blur-lg p-20">
        <form
          onSubmit={cadastrarNovoUsuario}
          className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl w-full max-w-md flex flex-col gap-8"
        >
          <h2 className="text-purple-900 text-5xl font-extrabold text-center drop-shadow-sm">
            Cadastrar
          </h2>

          <div className="flex flex-col">
            <label
              htmlFor="nome"
              className="text-purple-600 font-semibold mb-1 animate-pulse-sync"
            >
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="border-2 border-purple-300 rounded-lg p-2 focus:outline-purple-500 focus:ring-2 focus:ring-purple-300 transition"
              value={usuario.nome}
              onChange={atualizarEstado}
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="usuario"
              className="text-purple-600 font-semibold mb-1 animate-pulse-sync"
            >
              Usuário
            </label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuário"
              className="border-2 border-purple-300 rounded-lg p-2 focus:outline-purple-500 focus:ring-2 focus:ring-purple-300 transition"
              value={usuario.usuario}
              onChange={atualizarEstado}
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="foto"
              className="text-purple-600 font-semibold mb-1 animate-pulse-sync"
            >
              Foto (URL)
            </label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Link da foto"
              className="border-2 border-purple-300 rounded-lg p-2 focus:outline-purple-500 focus:ring-2 focus:ring-purple-300 transition"
              value={usuario.foto}
              onChange={atualizarEstado}
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="senha"
              className="text-purple-600 font-semibold mb-1 animate-pulse-sync"
            >
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha (mínimo 8 caracteres)"
              className="border-2 border-purple-300 rounded-lg p-2 focus:outline-purple-500 focus:ring-2 focus:ring-purple-300 transition"
              value={usuario.senha}
              onChange={atualizarEstado}
              required
              minLength={8}
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="confirmarSenha"
              className="text-purple-600 font-semibold mb-1 animate-pulse-sync"
            >
              Confirmar Senha
            </label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="border-2 border-purple-300 rounded-lg p-2 focus:outline-purple-500 focus:ring-2 focus:ring-purple-300 transition"
              value={confirmaSenha}
              onChange={handleConfirmarSenha}
              required
              minLength={8}
            />
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={retornar}
              className="w-1/2 rounded-full bg-red-400 text-white py-2 font-semibold hover:bg-red-700 transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="w-1/2 rounded-full bg-purple-800 text-white hover:bg-purple-500 py-2 font-semibold transition duration-300 ease-in-out flex justify-center items-center"
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
                "Cadastrar"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
