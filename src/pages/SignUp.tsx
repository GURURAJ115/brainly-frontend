import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";

export function SignUp() {
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-xl border min-w-48 p-4">
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <div className="flex justify-center">
                <Button variant="primary" text="SignUp" size="md"/>
            </div>
        </div>
    </div>
}