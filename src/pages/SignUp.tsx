import { useRef } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function SignUp() {
    //@ts-ignore
    const usernameRef = useRef<HTMLInputElement>();
    //@ts-ignore
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();
    async function signup(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        await axios.post(BACKEND_URL+"/api/v1/signup",{
                username,
                password
        })
        alert("You have signed up")
        navigate("/signin")
    }
    return <div className="h-screen w-screen bg-gray-200 dark:bg-gray-800 flex justify-center items-center">
        <div className="bg-white dark:bg-slate-500 rounded-xl border min-w-48 p-4">
            <Input ref={usernameRef} placeholder="Username" />
            <Input ref={passwordRef} placeholder="Password" />
            <div className="flex justify-center">
                <Button onClick={signup} variant="primary" text="SignUp" size="md"/>
            </div>
        <div className="flex justify-between items-center  mt-4">
            <div>
            Already a user?
            </div>
            <a onClick={() => navigate("/signin")} className="cursor-pointer bold underline text-blue-900" >  Sign In</a>
        </div>
        </div>
    </div>
}