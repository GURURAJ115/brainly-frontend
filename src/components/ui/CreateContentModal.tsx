import { useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
//@ts-ignore
export function CreateContentModal({open,onClose}){
    const [modalOpen, setModalOpen] = useState(false);

    return <div>
        {open && <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">
            <div className="flex flex-col justify-center">
                <span className="bg-white md:opacity-100 p-4 rounded">
                    <div className="flex justify-end">
                        <div onClick={onClose} className="cursor-pointer">
                        <CrossIcon/>
                        </div>
                    </div>
                    <div>
                        <Input placeholder={"Title"}></Input>
                        <Input placeholder={"Link"}></Input>
                    </div>
                    <div className="flex justify-center">
                        <Button size="md" variant="primary" text="Submit" onClick={function (): void {
                            throw new Error("Function not implemented.");
                        } }></Button>
                    </div>
                </span>
            </div>
            </div>}
    </div>

}
//@ts-ignore
function Input({onChange, placeholder}: {onChange:()=>void}){
    return <div>
        <input placeholder={placeholder} type={"text"} className="px-4 py-2 border rounded m-2" onChange={onChange}/>
    </div>
}