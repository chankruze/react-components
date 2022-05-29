/*
Author: chankruze (chankruze@gmail.com)
Created: Sun May 29 2022 17:04:19 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

interface ActionButtonProps {
  title: string;
  onClick: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ title, onClick }) => {
  return (
    <button
      className="py-1 px-2 uppercase text-xs rounded 
      bg-gray-100 hover:bg-gray-200
      dark:bg-slate-600 dark:hover:bg-slate-500"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default ActionButton;
