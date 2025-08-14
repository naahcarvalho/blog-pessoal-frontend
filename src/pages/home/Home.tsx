import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens";
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem";

function Home() {
  return (
    <>
      <div className="bg-rose-100 min-h-screen flex flex-col">
        <div className="flex justify-center pt-30">
          <div className="container grid grid-cols-2 text-white">
            <div className="flex flex-col gap-4 items-center justify-center py-4 text-center">
              <h2 className="animated-title">
                <span className="block">▓</span>
                <span className="block delay1">▓</span>
                <span className="block delay2">▓</span>
                <span className="title-text">Sistema conectado</span>
              </h2>
              <h3 className="text-4xl font-bold text-purple-900">
                Inicializando ideias...
              </h3>
              <p className="text-xl text-gray-600">
                Publique, questione, reescreva o mundo.
              </p>

              <div className="flex justify-around gap-4">
                <div>
                  <ModalPostagem />
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="https://i.imgur.com/n4J1Dgv.png"
                alt="Imagem do blog estilo a Maetrix"
                className="w-2/3 border-2 border-purple-700 rounded-xl shadow-xl"
                style={{ animation: "glow 2.5s ease-in-out infinite" }}
              />
            </div>
          </div>
        </div>
      </div>
      <ListaPostagens />
    </>
  );
}

export default Home;
