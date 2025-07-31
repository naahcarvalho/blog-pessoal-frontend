import { useState } from "react";

function Home({ titulo, texto }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Obrigado por compartilhar: ${input}`);
    setInput("");
  };

  return (
    <>
      <div className="w-screen flex justify-center mt-10">
        <div>
          <div className="max-w-7xl flex flex-col items-center">
            <h2>{titulo}</h2>
            <p>{texto}</p>
          </div>

          <div className="max-w-7xl flex flex-col items-center my-6">
            <img
              src="https://i.pinimg.com/736x/a6/db/dd/a6dbdd4e0a2f67a531cbf5879c6e828d.jpg"
              alt="Imagem de uma mulher segurando o notebook"
              width="400px"
            />
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escreva seu pensamento aqui..."
              className="border p-2 w-96 rounded"
              rows={4}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;
