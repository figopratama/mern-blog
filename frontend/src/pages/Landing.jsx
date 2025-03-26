import { CreateUser } from "../components/CreateUser"
import { Login } from "../components/Login"
import { useState } from "react"
import { Button } from "@/components/ui/button"




export function Landing() {

    const [view, setView] = useState(0)

    return (
        <div className="flex justify-center items-center w-screen h-screen">
            {!view ?
            <div className="flex flex-col w-96">
                <Login/>
                <Button onClick={() => setView(!view)}>Create new Account</Button>
            </div> :
            <div className="flex flex-col w-96">
                <CreateUser/>
                <Button onClick={() => setView(!view)}>Login existing Account</Button>
            </div>}
        </div>
    )
}