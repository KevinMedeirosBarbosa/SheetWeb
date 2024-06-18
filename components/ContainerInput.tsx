import axios from "axios";
import React, { useEffect, useState } from "react";
import InputDropdown from "./InputDropdown";

interface ContainerInputProps {
  firstTitle: string;
  secondTitle: string;
  firstPlaceHolder: string;
  secondPlaceHolder: string;
  dropdown: boolean;
  onPreenchido: (preenchido: boolean) => void;
}

const ContainerInput: React.FC<ContainerInputProps> = ({
  firstTitle,
  secondTitle,
  firstPlaceHolder,
  secondPlaceHolder,
  dropdown,
  onPreenchido,
}) => {
  const [clients, setClients] = useState([]);
  const [firstInputValue, setFirstInputValue] = useState("");
  const [secondInputValue, setSecondInputValue] = useState("");

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

  useEffect(() => {
    const primeiroPreenchido =
      firstInputValue.trim() !== "" || (dropdown && clients.length > 0);
    const segundoPreenchido = secondInputValue.trim() !== "";

    // Chama a função de callback com true se ambos os campos estiverem preenchidos, senão false
    onPreenchido(primeiroPreenchido && segundoPreenchido);
  }, [firstInputValue, secondInputValue, clients, dropdown, onPreenchido]);

  const handleFirstInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstInputValue(event.target.value);
  };

  const handleSecondInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSecondInputValue(event.target.value);
  };

  const handleInputBlur = () => {
    if (firstInputValue.trim() === "") {
      setFirstInputValue("");
    }
    if (secondInputValue.trim() === "") {
      setSecondInputValue("");
    }
  };

  return (
    <div className="flex justify-between gap-10 items-center mt-2 px-2 py-1">
      <div className="flex flex-row w-full pr-24">
        {dropdown ? (
          <>
            <label className="font-bold min-w-[300px]">{firstTitle}</label>
            <InputDropdown options={clients} />
          </>
        ) : (
          <>
            <label className="font-bold min-w-[300px]">{firstTitle}</label>
            <input
              className=" w-full border p-2 rounded hover:border-blue-500/25 focus:outline-none focus:border-blue-500"
              placeholder={firstPlaceHolder}
              value={firstInputValue}
              onChange={handleFirstInputChange}
              onBlur={handleInputBlur}
            />
          </>
        )}
      </div>

      <div className="flex gap-10">
        <label className="font-bold min-w-[300px]">{secondTitle}</label>
        <input
          className="text-gray-400 p-2 border-transparent border-[1px] hover:border-[1px] hover:border-blue-500/25 focus:outline-none focus:border-blue-500"
          placeholder={secondPlaceHolder}
          value={secondInputValue}
          onChange={handleSecondInputChange}
          onBlur={handleInputBlur}
        />
      </div>
    </div>
  );
};

export default ContainerInput;
