"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import ClientActions from "./ClientActions";

interface Client {
  id: string;
  name: string;
  ownerName: string;
  createdAt: Date;
}

const CadastrarClients = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [newClient, setNewClient] = useState(false);
  const [clientName, setClientName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [selectedClient, setSelectedClient] = useState<string[]>([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get("http://localhost:3001/client/list");
        setClients(response.data);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };
    fetchClients();
  }, []);

  const handleClick = () => {
    setNewClient(!newClient);
    setClientName("");
    setOwnerName("");
  };

  const handleCreateClient = async () => {
    const newClientData = {
      name: clientName,
      ownerName: ownerName,
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/client/add",
        newClientData
      );
      setClients([...clients, response.data.client]);
      setClientName("");
      setOwnerName("");
      setNewClient(false);
    } catch (error) {
      console.error("Error creating client:", error);
    }
  };

  const handleCheckBoxChange = (clientId: string) => {
    setSelectedClient((prevSelected) =>
      prevSelected.includes(clientId)
        ? prevSelected.filter((id) => id !== clientId)
        : [...prevSelected, clientId]
    );
  };

  const handleDeleteClient = async () => {
    if (selectedClient.length === 0) return;

    try {
      await axios.post("http://localhost:3001/client/delete", {
        ids: selectedClient,
      });
      setClients(
        clients.filter((client) => !selectedClient.includes(client.id))
      );
      setSelectedClient([]); 
    } catch (error) {
      console.error("Error deleting clients:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <ClientActions
        newClient={newClient}
        handleClick={handleClick}
        selectedClient={selectedClient}
        handleDeleteClient={handleDeleteClient}
      />

      <table className="min-w-full bg-white border border-gray-200 mt-3 shadow-2xl rounded-md">
        <thead>
          <tr>
            <th className="text-left pt-5 pb-2 px-4 border-b">Cliente</th>
            <th className="text-left pt-5 pb-2 px-4 border-b">Associado</th>
            <th className="text-left pt-5 pb-2 px-4 border-b">Data Criação</th>
          </tr>
        </thead>
        <tbody>
          {newClient && (
            <tr>
              <td className="p-4 border-b">
                <input
                  className="pl-2 py-1 border-gray-400 border-[1px] hover:border-blue-500/25 focus:outline-none focus:border-blue-500"
                  placeholder="Digite o Cliente"
                  type="text"
                  value={clientName}
                  onChange={(event) => setClientName(event.target.value)}
                />
              </td>
              <td className="p-4 border-b">
                <input
                  className="pl-2 py-1 border-gray-400 border-[1px] hover:border-blue-500/25 focus:outline-none focus:border-blue-500"
                  placeholder="Digite seu Nome"
                  type="text"
                  value={ownerName}
                  onChange={(event) => setOwnerName(event.target.value)}
                />
              </td>
              <td className="flex p-4 border-b gap-5">
                <button
                  className="flex text-left p-2 px-5 rounded-md border-blue-500 border-[1px] bg-blue-500 text-white hover:bg-blue-500/80"
                  onClick={handleCreateClient}
                >
                  Criar
                </button>
                <button
                  className="flex text-left p-2 rounded-md border-red-500 border-[1px] hover:bg-red-500 hover:text-white"
                  onClick={handleClick}
                >
                  Cancelar
                </button>
              </td>
            </tr>
          )}
          {clients.map((client) => (
            <tr key={client.id}>
              <td className="p-4 border-b">
                <input
                  className="mr-2"
                  type="checkbox"
                  checked={selectedClient.includes(client.id)}
                  onChange={() => handleCheckBoxChange(client.id)}
                />
                {client.name}
              </td>
              <td className="p-4 border-b">{client.ownerName}</td>
              <td className="p-4 border-b">
                {new Date(client.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CadastrarClients;
