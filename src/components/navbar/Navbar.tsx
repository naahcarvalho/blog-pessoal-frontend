import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Navbar() {
  const navigate = useNavigate();

  const { handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    toast.success("O Usuário foi desconectado com sucesso!",
      {
        className: "my-toast-success"
      }
    );
    navigate("/");
  }

  return (
    <>
      <div
        className="w-full bg-gradient-to-r from-purple-800 via-fuchsia-600 to-pink-400  text-white
                flex justify-center py-8"
      >
        <div className="container flex justify-between text-lg">
          <Link to="/home" className="text-2xl font-bold">
            Blog Pessoal
          </Link>

          <div className="flex gap-6 text-white font-medium tracking-wide">
            <Link
              to="/postagens"
              className="px-3 py-1 rounded hover:bg-white hover:text-purple-800 transition"
            >
              Postagens
            </Link>
            <Link
              to="/temas"
              className="px-3 py-1 rounded hover:bg-white hover:text-purple-800 transition"
            >
              Temas
            </Link>
            <Link
              to="/cadastrartema"
              className="px-3 py-1 rounded hover:bg-white hover:text-purple-800 transition"
            >
              Cadastrar tema
            </Link>
            <Link
              to="/perfil"
              className="px-3 py-1 rounded hover:bg-white hover:text-purple-800 transition"
            >
              Perfil
            </Link>
            <Link
              to=""
              onClick={logout}
              className="px-3 py-1 rounded hover:bg-white hover:text-purple-800 transition"
            >
              Sair
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
