export default async function Page() {
    const results = await fetch('http://localhost:3000/api/emp')
    console.log(results);
    if (!results.ok) {
        throw new Error(results.statusText);
    }
    const emps = await results.json();
    console.log(emps);

    return (
        <div></div>
    )
}