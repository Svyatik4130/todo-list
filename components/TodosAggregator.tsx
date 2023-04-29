"use client";

import { useState } from "react";

import { TodoItem } from "@/types/todoItem";
import TodoListItem from "./TodoListItem";
import TodoSearchbar from "./TodoSearchbar";

const filter = (todos: TodoItem[], input: string) => {
  return todos.filter((todo) => {
    return todo.title.toLowerCase().includes(input.toLowerCase());
  });
}

type Props = {
  data: TodoItem[];
};

export default function TodosAggregator({ data }: Props): JSX.Element {
  const [input, setInput] = useState("");

  return (
    <div>
      <TodoSearchbar input={input} setInput={setInput} />
      {filter(data, input).map((todo) => (
        <TodoListItem key={todo.id} id={todo.id} title={todo.title} />
      ))}
    </div>
  );
}
