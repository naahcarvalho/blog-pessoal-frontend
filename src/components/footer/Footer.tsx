import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

function Footer() {
  const data = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-center bg-gradient-to-r from-purple-800 via-fuchsia-600 to-pink-400 text-white">
        <div className="container flex flex-col items-center py-6">
          <p className="text-xl font-bold">
           Blog Pessoal |  &copy; {data}
          </p>
          <p className="text-lg">Acesse minha redes sociais</p>
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/naah-carvalho/" target="_blank">
              <LinkedinLogo size={48} weight="bold" />
            </a>
            <a href="https://www.instagram.com/seu_usuario" target="_blank">
              <InstagramLogo size={48} weight="bold" />
            </a>
            <a href="https://www.facebook.com/seu_usuario" target="_blank">
              <FacebookLogo size={48} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
