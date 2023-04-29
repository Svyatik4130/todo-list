import TodosAggregator from "@/components/TodosAggregator";
import { TodoItem } from "@/types/todoItem";
import { getTodoList } from "./getTodoList";

export default async function Home() {
  const data: TodoItem[] = await getTodoList();

  return (
    <div className="overflow-scroll">
      <h1 className="font-bold text-4xl mb-4">Leo's ToDo List</h1>
      <TodosAggregator data={data} />
    </div>
  )
}
