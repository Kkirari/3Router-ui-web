import createEmail from "./actoin";

export default function Page() {
    return (
        <div>
            <form action={createEmail}>
                <input type="email" name="email" required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}