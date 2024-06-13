"use client";
import React from "react";

interface ClientActions {
  newClient: boolean;
  handleClick: () => void;
  selectedClient: string[];
  handleDeleteClient: () => void;
}

const ClientActions: React.FC<ClientActions> = ({
  newClient,
  handleClick,
  selectedClient,
  handleDeleteClient,
}) => {
  return (
    <div className="flex justify-between">
      <h1 className="text-2xl font-bold mb-4">Clientes</h1>
      <div>
        <button
          className={`px-4 py-1 m-2 text-white rounded-md ${newClient ? "bg-gray-400" : "bg-blue-600"
            }`}
          onClick={handleClick}
          disabled={newClient}
        >
          (+) Cliente
        </button>
        <button
          className={`px-4 py-1 m-2 text-white rounded-md ${selectedClient.length > 0
              ? "bg-red-600"
              : "bg-gray-400 cursor-not-allowed"
            }`}
          onClick={handleDeleteClient}
          disabled={selectedClient.length === 0}
        >
          (-) Cliente
        </button>
      </div>
    </div>
  );
};

export default ClientActions;
