/*
Author: chankruze (chankruze@gmail.com)
Created: Sun May 29 2022 11:24:44 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { BaseSyntheticEvent, useState } from "react";
import ActionButton from "./ActionButton";
import Tag from "./Tag";

const TagsInputField = () => {
  const [tags, setTags] = useState<Array<string>>([]);
  const [currentTag, setCurrentTag] = useState<string>("");

  // Add tag
  const addNewTag = (e: BaseSyntheticEvent) => {
    // prevent default action
    e.preventDefault();
    // check if input is empty
    if (currentTag.trim() === "") return;
    // add new tag
    setTags([...tags, currentTag]);
    // reset input
    setCurrentTag("");
  };

  // remove tag
  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  // copy tags
  const copyTags = () => {
    navigator.clipboard.writeText(tags.join(", "));
  };

  // clear tags
  const clearTags = () => {
    setTags([]);
  };

  return (
    <div className="p-4 border-2 rounded border-fuchsia-500 dark:bg-slate-800">
      <div className="flex items-center justify-between flex-wrap dark:text-gray-300">
        <p className="px-2 capitalize">Add tags</p>
        <div className="flex items-center justify-end flex-wrap gap-2">
          <ActionButton title="Copy" onClick={copyTags} />
          <ActionButton title="Clear" onClick={clearTags} />
        </div>
      </div>
      {/* just like formik field array */}
      <ul className="mt-2 flex flex-wrap gap-1 items-center">
        {tags.map((tag, index) => (
          <Tag key={index} tag={tag} removeTag={removeTag} />
        ))}
        {/* input form */}
        <li key="form" className="flex-1">
          <form onSubmit={addNewTag}>
            {/* input for current tag */}
            <input
              type="text"
              onChange={(e) => setCurrentTag(e.target.value)}
              value={currentTag}
              autoFocus={true}
              className="p-2 w-full dark:text-white text-xl bg-transparent caret-fuchsia-400 focus:outline-0"
            />
          </form>
        </li>
      </ul>
    </div>
  );
};

export default TagsInputField;
