import { type ChangeEvent, useContext, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import type UsuarioLogin from "../../models/UsuarioLogin";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");
    }
  }, [usuario, navigate]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <>
      <div className="fundoLogin"></div>

      <div className="h-screen flex justify-center items-center">
        <form className="form-container flex flex-col gap-4" onSubmit={login}>
          <h2 className="text-purple-900 text-5xl text-center">Entrar</h2>

          <div className="flex flex-col w-full">
            <label htmlFor="usuario" className="text-purple-800 font-semibold">
              Usuário
            </label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="border-2 border-slate-700 rounded p-2"
              value={usuarioLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="senha" className="text-purple-800 font-semibold">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-slate-700 rounded p-2"
              value={usuarioLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>

          <button
            type="submit"
            className="rounded-full bg-purple-800 text-white 
             hover:bg-purple-500 w-full py-2 font-semibold 
             transition duration-300 ease-in-out flex justify-center items-center"
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
              <span>Entrar</span>
            )}
          </button>

          <hr className="border-slate-800 w-full" />

          <p className="text-center">
            Ainda não tem uma conta?{" "}
            <Link
              to="/cadastro"
              className="text-purple-800 font-bold hover:underline hover:text-purple-600 transition duration-200"
            >
              Cadastre-se
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
