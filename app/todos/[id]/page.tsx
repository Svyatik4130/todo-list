import { TodoItem } from "@/types/todoItem"
import { useRouter } from "next/navigation"

async function getTodoItem(id: string) {
    const res = await fetch(`${process.env.BASE_URL}/api/todoList/${id}`)
    if(!res.ok) console.log(res)
    return res.json()
}

type Props = {
    params: {
        id: string;
    }
}

export default async function Item({params: {id}}: Props) {
    const data: TodoItem = await getTodoItem(String(id));

return (
    <div>
        dfdf
    <h1>{data.title}</h1>
    <p>{data.descriptoin}</p>
    </div>
  )
}
