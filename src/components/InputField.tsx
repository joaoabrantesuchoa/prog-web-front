import React from "react";

interface InputFieldProps {
  type: string;
  name?: string;
  placeholder: string;
  icon?: string;
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  name,
  placeholder,
  icon,
  className,
  value,
  onChange,
}) => {
  return (
    <div
      className={`flex relative gap-1.5 px-3.5 py-3 whitespace-nowrap bg-white rounded-xl ${className}`}
    >
      {icon && (
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain shrink-0 h-[30px] w-[34px]"
        />
      )}
      <input
        type={type}
        name={name} // Definindo o nome do campo
        placeholder={placeholder}
        value={value} // Usando valor controlado
        onChange={onChange} // Adicionando o manipulador de mudança
        className="flex-auto my-auto bg-transparent border-none outline-none"
        aria-label={placeholder}
      />
    </div>
  );
};

export default InputField;
