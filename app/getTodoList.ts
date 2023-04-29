export async function getTodoList() {
    const res = await fetch(`${process.env.BASE_URL}/api/todos`);
    if (!res.ok) console.log(res);
    return res.json();
}