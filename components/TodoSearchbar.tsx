"use client";

import { TodoItem } from "@/types/todoItem";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
};

export default function TodoSearchbar({ input, setInput }: Props) {
  return (
    <div>
      <input type="text" placeholder="Search for a ToDo" onChange={(e) => setInput(e.target.value)} value={input} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
    </div>
  );
}
