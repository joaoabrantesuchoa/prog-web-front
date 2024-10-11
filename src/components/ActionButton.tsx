import React from "react";

interface ActionButtonProps {
  text: string;
  buttonType: "submit" | "reset" | "button" | undefined;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ text, buttonType, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button onClick={handleClick} type={buttonType} className="flex flex-col">
      <span className="px-5 py-4 rounded-xl bg-slate-400">{text}</span>
    </button>
  );
};

export default ActionButton;
