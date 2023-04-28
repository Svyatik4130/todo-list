import { todoList } from "@/data/todoListData";
import { NextApiRequest, NextApiResponse } from "next";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//     const { todoId } = req.query
//     const todoItem = todoList.filter((todo) => todo.id === Number(todoId))
//     if(todoItem.length > 0){
//         res.status(200).json(todoItem[0])
//     } else {
//         res.status(500).json({message: `Todo item with id ${todoId} not found`})
//     }
// }

export function GET(req: NextApiRequest, res: NextApiResponse) {
    console.log(4555555, req)
    const { todoId } = req.query
    res.end(`Post: ${todoId}`)
  }

// export function GET(req: Request){
//     console.log(22223333, req)
//     const { todoId } = req.query
//     const todoItem = todoList.filter((todo) => todo.id === Number(todoId))

//     return new Response(JSON.stringify(todoItem), {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//   }
