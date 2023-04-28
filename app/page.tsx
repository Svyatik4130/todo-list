import TodoList from "@/components/TodoList";

async function getTodoList() {
  const res = await fetch(`${process.env.BASE_URL}/api/todoList`)
  if(!res.ok) console.log(res)
  return res.json()
}

export default async function Home() {
  const data = await getTodoList();
  return (
    <TodoList todos={data} />
  )
}
