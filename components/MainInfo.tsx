import React from "react";

interface MaininfoProps {
  indicacao: string; // Indicação se os campos estão preenchidos ("Criação" ou "Consulta")
}

const Maininfo: React.FC<MaininfoProps> = ({ indicacao }) => {
  return (
    <button
      type="button"
      className="relative block w-full rounded-lg border-dashed border-2 border-gray-600 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      {indicacao === "Preenchido" ? (
        <span className="block text-sm font-semibold text-green-500">
          Todos os Campos Preenchidos - Modo de Criação ou Consulta  
        </span>
      ) : (
        <span className="block text-sm font-semibold text-red-500">
          Preencha os Campos de Identificação
        </span>
      )}
    </button>
  );
};

export default Maininfo;
