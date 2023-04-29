export async function getTodoItem(id: string) {
    const res = await fetch(`${process.env.BASE_URL}/api/todos/${id}`);
    if (!res.ok) console.log(res);
    return res.json();
}