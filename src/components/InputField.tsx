import React from 'react';

interface InputFieldProps {
  type: string;
  placeholder: string;
  icon?: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, icon, className }) => {
  return (
    <div className={`flex relative gap-1.5 px-3.5 py-3 whitespace-nowrap bg-white rounded-xl ${className}`}>
      <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 h-[30px] w-[34px]" />
      <input
        type={type}
        placeholder={placeholder}
        className="flex-auto my-auto bg-transparent border-none outline-none"
        aria-label={placeholder}
      />
    </div>
  );
};

export default InputField;