import React from 'react';
import { useRouter } from 'next/navigation';

interface ActionButtonProps {
  text: string;
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="flex flex-col">
      <span className="px-5 py-4 rounded-xl bg-slate-400">{text}</span>
    </button>
  );
};

export default ActionButton;
