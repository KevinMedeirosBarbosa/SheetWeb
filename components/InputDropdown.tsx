interface InputOption {
  id: string;
  name: string;
}

interface InputDropdownProps {
  options: Array<InputOption>;
}
const InputDropdown: React.FC<InputDropdownProps> = ({ options }) => {
  return (

    <select className="border p-2 rounded w-full ">
      {options.map(option => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default InputDropdown;
