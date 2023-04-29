// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { todoList } from "@/data/todoListData";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    return res.status(200).json(todoList);
  } else {
    return res.status(400).json({ message: 'Method not supported' });
  }
}
