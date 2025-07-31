interface Props {
  inputType:string;
  name:string;
  placeholder:string;
}

const Input = (props:Props) => {
  return (
    <div>
      <input type={props.inputType} name={props.name} className="border border-gray-400 rounded text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={props.placeholder} required />
    </div>
  )
}

export default Input