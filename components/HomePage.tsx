"use client";
import MainButton from "@/components/MainButton";
import Menu from "@/components/Menu";
import ContainerInput from "./ContainerInput";
import Maininfo from "./MainInfo";
import { useState } from "react";

function HomePage() {
  const [clientePreenchido, setClientePreenchido] = useState(false);
  const [gerentePreenchido, setGerentePreenchido] = useState(false);
  const [tituloPreenchido, setTituloPreenchido] = useState(false);

  const handleClientePreenchido = (preenchido: boolean) => {
    setClientePreenchido(preenchido);
  };

  const handleGerentePreenchido = (preenchido: boolean) => {
    setGerentePreenchido(preenchido);
  };

  const handleTituloPreenchido = (preenchido: boolean) => {
    setTituloPreenchido(preenchido);
  };

  const determinarIndicacao = () => {
    if (clientePreenchido && gerentePreenchido && tituloPreenchido) {
      return "Preenchido";
    } else {
      return "Incompleto";
    }
  };

  return (
    <div className=" flex flex-col max-w-7xl mx-auto">
      <h1 className="text-center mx-auto font-semibold text-2xl mt-1">
        Planilha de Cálculo de Pontos por Caso de Uso
      </h1>

      <div className="bg-blue-500 mt-5 w-full">
        <p className="text-white text-xl p-1 font-bold text-center">
          Identificação
        </p>
      </div>

      <MainButton />

      <div className="flex flex-col mt-1">
        <>
          <ContainerInput
            firstTitle="Cliente"
            secondTitle="Data de Elaboração"
            firstPlaceHolder="Nenhum Cliente Cadastrado"
            secondPlaceHolder="Preencha os Campos"
            dropdown={true}
            onPreenchido={handleClientePreenchido}
          />
          <ContainerInput
            firstTitle="Gerente de Projeto"
            secondTitle="Data de Atualização"
            firstPlaceHolder="Preencha os Campos"
            secondPlaceHolder="Preencha os Campos"
            dropdown={false}
            onPreenchido={handleGerentePreenchido}
          />

          <ContainerInput
            firstTitle="Título da Proposta"
            secondTitle="Nr. de Revisão"
            firstPlaceHolder="Preencha os Campos"
            secondPlaceHolder="Preencha os Campos"
            dropdown={false}
            onPreenchido={handleTituloPreenchido}
          />
        </>
      </div>

      <Menu />

      <div className="mt-5">
        <Maininfo indicacao={determinarIndicacao()} />
      </div>
    </div>
  );
}

export default HomePage;
