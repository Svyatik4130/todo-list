import TodosAggregator from "@/components/TodosAggregator";
import { TodoItem } from "@/types/todoItem";

async function getTodoList() {
  const res = await fetch(`${process.env.BASE_URL}/api/todos`);
  if (!res.ok) console.log(res);
  return res.json();
}

export default async function Home() {
  const data: TodoItem[] = await getTodoList();

  return (
    <div className="overflow-scroll">
      <h1 className="font-bold text-4xl mb-4">Leo's ToDo List</h1>
      <TodosAggregator data={data} />
    </div>
  )
}
