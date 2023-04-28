import { todoList } from "@/data/todoListData";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { todoId } = req.query
  const todoItem = todoList.filter((todo) => todo.id === Number(todoId))

  if(todoItem.length === 0) {
    res.status(500).json({ message: 'Todo item not found' })
  }

  if (req.method === 'GET') {
    res.status(200).json(todoItem[0])
  } else {
    res.status(500).json({ message: 'Method not supported' })
  }
}
