import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTwitter, FaFacebook, FaGithub, FaTiktok } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Footer = () => {
  return (
    <div className="rounded-div mt-8 pt-8 text-primary">
      <div className="grid md:grid-cols-2">
        <div className="flex justify-evenly w-full md:max-w-[300px] uppercase">
          <div>
            <h2 className="font-bold">Suporte</h2>
            <ul>
              <li className="text-sm py-2">Centro de ajuda</li>
              <li className="text-sm py-2">Contate-nos</li>
              <li className="text-sm py-2">API Status</li>
              <li className="text-sm py-2">Documentação</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Informações</h2>
            <ul>
              <li className="text-sm py-2">Sobre nós</li>
              <li className="text-sm py-2">Carreiras</li>
              <li className="text-sm py-2">Investir</li>
              <li className="text-sm py-2">Jurídico</li>
            </ul>
          </div>
        </div>
        <div className="text-right">
          <div className="w-full flex justify-end">
            <div className="w-full md:w-full-[300px] py-4 relative">
              <div className="flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt-[-1em]">
                <ThemeToggle />
              </div>
              <p className="text-center md:text-right">
                Increva-se para receber notícias das criptomoedas
              </p>
              <div className="py-4">
                <form>
                  <input
                    className="bg-primary border border-input p-2 mr-2 w-full shadow-xl rounded-2xl md:w-auto"
                    type="email"
                    placeholder="Digite seu email"
                  />
                  <button className="bg-button text-btnText px-4 p-2 w-full rounded-2xl shadow-xl hover:shadow-2xl md:w-auto my-2">
                    Inscreva-se
                  </button>
                </form>
              </div>
              <div className="flex py-4 justify-between text-accent">
                <AiOutlineInstagram />
                <FaTwitter />
                <FaFacebook />
                <FaTiktok />
                <FaGithub />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center py-4">Desenvolvido baseado na Coin Gecko</p>
    </div>
  );
};

export default Footer;
