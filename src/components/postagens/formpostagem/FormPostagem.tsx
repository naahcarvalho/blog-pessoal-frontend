import {
  useContext,
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import type Postagem from "../../../models/Postagem";
import type Tema from "../../../models/Tema";
import { atualizar, buscar, cadastrar } from "../../../services/Service";

function FormPostagem() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { usuario, handleLogout } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [temas, setTemas] = useState<Tema[]>([]);
  const [tema, setTema] = useState<Tema>({} as Tema);
  const [postagem, setPostagem] = useState<Postagem>({} as Postagem);

  async function buscarPostagemPorId(id: string) {
    try {
      await buscar(`/postagens/${id}`, setPostagem, {
        headers: { Authorization: usuario.token },
      });
    } catch (error: any) {
      if (error.toString().includes("401")) handleLogout();
    }
  }

  async function buscarTemaPorId(id: number) {
    try {
      await buscar(`/temas/${id}`, setTema, {
        headers: { Authorization: usuario.token },
      });
    } catch (error: any) {
      if (error.toString().includes("401")) handleLogout();
    }
  }

  async function buscarTemas() {
    try {
      await buscar("/temas", setTemas, {
        headers: { Authorization: usuario.token },
      });
    } catch (error: any) {
      if (error.toString().includes("401")) handleLogout();
    }
  }

  useEffect(() => {
    if (!usuario.token) {
      alert("Faça login primeiro!");
      navigate("/");
    }
  }, [usuario.token]);

  useEffect(() => {
    buscarTemas();
    if (id) buscarPostagemPorId(id);
  }, [id]);

  useEffect(() => {
    setPostagem((prev) => ({
      ...prev,
      tema: tema,
      usuario: {
        ...usuario,
        id: Number(usuario.id),
      },
    }));
  }, [tema]);

  function atualizarEstado(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setPostagem((prev) => ({
      ...prev,
      [name]: value,
      tema: tema,
      usuario: {
        ...usuario,
        id: Number(usuario.id),
      },
    }));
  }

  function retornar() {
    navigate("/postagens");
  }

  async function gerarNovaPostagem(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (id) {
        await atualizar("/postagens", postagem, setPostagem, {
          headers: { Authorization: usuario.token },
        });
        alert("Postagem atualizada com sucesso!");
      } else {
        await cadastrar("/postagens", postagem, setPostagem, {
          headers: { Authorization: usuario.token },
        });
        alert("Postagem cadastrada com sucesso!");
      }
      retornar();
    } catch (error: any) {
      if (error.toString().includes("401")) handleLogout();
    } finally {
      setIsLoading(false);
    }
  }

  const carregandoTema = !tema?.descricao;

  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8">
        {id ? "Editar Postagem" : "Cadastrar Postagem"}
      </h1>

      <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovaPostagem}>
        <div className="flex flex-col gap-2">
          <label htmlFor="titulo">Título da Postagem</label>
          <input
            type="text"
            placeholder="Título"
            name="titulo"
            value={postagem.titulo || ""}
            onChange={atualizarEstado}
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="texto">Texto da Postagem</label>
          <textarea
            placeholder="Texto"
            name="texto"
            value={postagem.texto || ""}
            onChange={atualizarEstado}
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p>Tema da Postagem</p>
          <select
            name="tema"
            value={tema.id || ""}
            onChange={(e) => buscarTemaPorId(Number(e.target.value))}
            className="border p-2 border-slate-800 rounded"
          >
            <option value="" disabled>
              Selecione um Tema
            </option>
            {temas.map((t) => (
              <option key={t.id} value={t.id}>
                {t.descricao}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto py-2 flex justify-center"
          disabled={carregandoTema || isLoading}
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
            <span>{id ? "Atualizar" : "Cadastrar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormPostagem;
