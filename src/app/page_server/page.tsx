export default function Page() {

    async function create(formData: FormData) {
        'use server'
        console.log('Hello from the server!');

        const email = formData.get('email');
        console.log(email);
    }

    return (
        <div>
            <form action={create}>
                <input type="email" name="email" required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}