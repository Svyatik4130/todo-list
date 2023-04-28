import { TodoItem } from "@/types/todoItem";
import Link from "next/link";

type Props = {
    todos: TodoItem[];
}

export default function TodoList({todos}: Props) {
  return (
    <div>
    {todos.map((todo) => (
        <Link className="text-black" key={todo.id} href={{ pathname: `/todos/${todo.id}`}}>
            {todo.title}
        </Link>
    ))}
    </div>
  )
}
