/*
Author: chankruze (chankruze@gmail.com)
Created: Sun May 29 2022 12:05:22 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import Cross from "./Cross";

interface TagProps {
  tag: string;
  removeTag: (tag: string) => void;
}

const Tag: React.FC<TagProps> = ({ tag, removeTag }) => {
  return (
    <div
      className="p-2 flex items-center justify-center rounded-full 
    bg-gray-200 dark:bg-slate-700"
    >
      <p className="dark:text-gray-100">{tag}</p>
      <span
        onClick={() => removeTag(tag)}
        className="text-white rounded-full ml-2 flex justify-center items-center p-2 cursor-pointer bg-red-600 hover:bg-red-500"
      >
        <Cross />
      </span>
    </div>
  );
};

export default Tag;
