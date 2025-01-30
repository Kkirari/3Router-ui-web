"use server"


export default async function createEmail(formData: FormData) {
    console.log('Hello from the server!');
    const email = formData.get('email');
    console.log(email);
}