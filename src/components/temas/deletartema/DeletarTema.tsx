function DeletarTema() {
  return (
    <div className="min-h-screen bg-rose-100 flex flex-col items-center justify-start py-30 px-4">
      <h1 className="text-4xl font-bold text-purple-700 mb-4">
        Deletar tema
      </h1>
      <p className="text-center text-gray-600 mb-8 max-w-md">
        Você tem certeza de que deseja apagar o tema a seguir?
      </p>

      <div className="w-full max-w-md bg-[#2a2a3f] rounded-lg border border-purple-800 p-8 text-purple-300 flex flex-col items-center gap-6">
        <p className="text-3xl font-semibold">{`tema`}</p>

        <div className="flex w-full gap-4">
          <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition">
            Não
          </button>
          <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition">
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarTema;
