import { todoList } from "@/data/todoListData";

export async function GET() {
  return new Response(JSON.stringify(todoList), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
