const navigation = [
  {name: 'Criar', href:'/checkinput'},
  {name: 'Consultar', href:'#'},
  {name: 'Cadastrar Cliente', href:'/client'}
] 

export default function MainButtons() {

  return (
    <div>
      <div className="mt-2">
        <ul className="flex flex-row items-start py-2">
        {navigation.map((item) => (
          <li key={item.name}>
                 <a href={item.href} className="border-transparent text-gray-500 hover:border-indigo-500 hover:text-indigo-600 border-b-2 py-4 px-1 mr-4 text-sm font-medium">
                  {item.name}
                 </a>     
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}
