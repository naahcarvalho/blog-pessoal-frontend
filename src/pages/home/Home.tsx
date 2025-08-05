function Home() {
  return (
    <>
      <div className="bg-rose-100 flex justify-center py-20">
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
              <div
                className="cursor-pointer rounded-full 
                text-purple-800 border-2 border-purple-600 
                px-6 py-2 font-semibold bg-white hover:bg-purple-600 
                hover:text-white transition duration-300 
                ease-in-out animate-pulse"
              >
                Nova Postagem
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
    </>
  );
}

export default Home;
