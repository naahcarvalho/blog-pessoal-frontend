import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import ListaPostagens from "./components/postagens/listapostagens/ListaPostagens";
import DeletarTema from "./components/temas/deletartema/DeletarTema";
import FormTema from "./components/temas/formtema/FormTema";
import ListaTemas from "./components/temas/listatemas/ListaTemas";
import { AuthProvider } from "./contexts/AuthContext";
import Cadastro from "./pages/cadastro/Cadastro";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import FormPostagem from "./components/postagens/formpostagem/FormPostagem";
import DeletarPostagem from "./components/postagens/deletarpostagem/DeletarPostagem";
import Perfil from "./pages/perfil/Perfil";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastrartema" element={<FormTema />} />
              <Route path="/editartema/:id" element={<FormTema />} />
              <Route path="/deletartema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastrarpostagem" element={<FormPostagem />} />
              <Route path="/editarpostagem/:id" element={<FormPostagem />} />
              <Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
