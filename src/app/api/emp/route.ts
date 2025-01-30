
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function Get(req: Request, res: Response) {

    const data = [
        { 'name': 'John', 'age': 10, 'salary': 1000 },
        { 'name': 'Doe', 'age': 30, 'salary': 1000 },
        { 'name': 'JOJO', 'age': 20, 'salary': 3000 }]

    return Response.json(data);

}