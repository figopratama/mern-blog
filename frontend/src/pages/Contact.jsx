import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea} from "@/components/ui/textarea"



export function Contact() {

    function handleSubmit() {
        // For calling an API function.
    }

    return (
        <div className="w-1/3">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-2 text-primary">Contact Page</h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6 whitespace-pre-wrap text-center">Have question or feedback? Feel free to reach out to us!</p>
            <p className="leading-7 [&:not(:first-child)]:mt-6 whitespace-pre-wrap text-center">You can contact us via email at <a href="mailto:mymail.figo@gmail.com">mymail.figo@gmail.com</a>.</p>
            <p className="leading-7 [&:not(:first-child)]:mt-6 whitespace-pre-wrap text-center mb-8">Alternatively, you can fill out the form below.</p>
            <form onSubmit={handleSubmit} >
                <Label className="flex left-0 p-2">Name:</Label>
                <Input text="text" name="name" />
                <Label className="flex left-0 p-2">Email:</Label>
                <Input text="email" name="email" />
                <Label className="flex left-0 p-2">Message:</Label>
                <Textarea name="message"></Textarea>
                <Button type="submit" className="mt-4">Send</Button>
            </form>
        </div>
    )
}