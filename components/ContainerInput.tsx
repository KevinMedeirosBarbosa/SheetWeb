import axios from "axios";
import React, { useEffect, useState } from "react";
import InputDropdown from "./InputDropdown";

interface ContainerInputProps {
  firstTitle: string;
  secondTitle: string;
  firstPlaceHolder: string;
  secondPlaceHolder: string;
  dropdown: boolean;
}

const ContainerInput: React.FC<ContainerInputProps> = ({
  firstTitle,
  secondTitle,
  firstPlaceHolder,
  secondPlaceHolder,
  dropdown
}) => {
  const [clients, setClients] = useState([]);

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
  
  return (
    <div className="flex justify-between gap-10 items-center mt-2 px-2 py-1">
      <div className="flex flex-row w-full pr-24">
        {dropdown ? (
          <>
            <label className="font-bold min-w-[300px]">{firstTitle}</label>
              <InputDropdown 
               options={clients} />
          </>
        ) : (
          <>
            <label className="font-bold min-w-[300px]">{firstTitle}</label>
            <input className=" w-full border p-2 rounded hover:border-blue-500/25 focus:outline-none focus:border-blue-500" placeholder={firstPlaceHolder} />
          </>
        )}
      </div>

      <div className="flex gap-10">
        <label className="font-bold min-w-[300px]">{secondTitle}</label>
        <input className="text-gray-400 p-2 border-transparent border-[1px] hover:border-[1px] hover:border-blue-500/25 focus:outline-none focus:border-blue-500" placeholder={secondPlaceHolder} />
      </div>
    </div>
  );
};

export default ContainerInput;
