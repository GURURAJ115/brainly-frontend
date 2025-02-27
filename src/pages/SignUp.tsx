import { useRef, useState } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

// Zod schema for validation
const signUpSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters long"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

export function SignUp() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const [errors, setErrors] = useState<{ username?: string; password?: string }>({});

    async function signup() {
        const username = usernameRef.current?.value || "";
        const password = passwordRef.current?.value || "";

        const result = signUpSchema.safeParse({ username, password });
        if (!result.success) {
            const errorMessages = result.error.flatten().fieldErrors;
            setErrors({
                username: errorMessages.username?.[0],
                password: errorMessages.password?.[0],
            });
            return;
        }

        try {
            await axios.post(`${BACKEND_URL}/api/v1/signup`, { username, password });
            alert("You have signed up");
            navigate("/signin");
        } catch (error) {
            alert("Signup failed. Please try again.");
        }
    }

    return (
        <div className="h-screen w-screen bg-gray-200 dark:bg-gray-800 flex justify-center items-center">
            <div className="bg-white dark:bg-slate-500 rounded-xl border min-w-48 p-4">
                <Input ref={usernameRef} placeholder="Username" />
                {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}

                <Input ref={passwordRef} placeholder="Password" />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

                <div className="flex justify-center">
                    <Button onClick={signup} variant="primary" text="SignUp" size="md" />
                </div>

                <div className="flex justify-between items-center mt-4">
                    <div>Already a user?</div>
                    <a onClick={() => navigate("/signin")} className="cursor-pointer bold underline text-blue-900">Sign In</a>
                </div>
            </div>
        </div>
    );
}