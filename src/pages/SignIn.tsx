import axios from "axios";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { BACKEND_URL } from "../config";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export function SignIn() {
        //@ts-ignore
        const usernameRef = useRef<HTMLInputElement>();
        //@ts-ignore
        const passwordRef = useRef<HTMLInputElement>();
        const navigate = useNavigate();
        async function signin(){
            const username = usernameRef.current?.value;
            const password = passwordRef.current?.value;
    
            const response = await axios.post(BACKEND_URL+"/api/v1/signin",{
                    username,
                    password
            })
            const jwt = response.data.token;
            localStorage.setItem("token",jwt);
            navigate("/dashboard")
        }
    
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-xl border min-w-48 p-4">
            <Input ref={usernameRef} placeholder="Username" />
            <Input ref={passwordRef} placeholder="Password" />
            <div className="flex justify-center">
                <Button variant="primary" text="SignIn" size="md" onClick={signin} />
            </div>
        </div>
    </div>
}