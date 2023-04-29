import TodoItem from "@/components/TodoItem";
import { TodoItem as TodoItemType } from "@/types/todoItem";
import { getTodoItem } from "./useTodoItem";

type Props = {
    params: {
        id: string;
    }
}

export default async function Item({params: {id}}: Props) {
  const data: TodoItemType = await getTodoItem(id);

  return <TodoItem title={data.title} description={data.description} />;
}
