import { useRef, useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import { BACKEND_URL } from "../../config";
import axios from "axios";

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}
//@ts-ignore
export function CreateContentModal({ open, onClose }) {
    //@ts-ignore
    const titleRef = useRef<HTMLInputElement>();
    //@ts-ignore
    const linkRef = useRef<HTMLInputElement>();
    const [type, setType] = useState(ContentType.Youtube);


    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(BACKEND_URL + "/api/v1/content", {
            link,
            title,
            type
        }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })

        onClose();
    }
    return <div>
        {open && <div>
            <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">
            </div>

            <div className="w-screen h-screen  fixed top-0 left-0 flex justify-center">
                <div className="flex flex-col justify-center">
                    <span className="bg-white p-4 rounded">
                        <div className="flex justify-end">
                            <div onClick={onClose} className="cursor-pointer">
                                <CrossIcon />
                            </div>
                        </div>
                        <div>
                            <Input ref={titleRef} placeholder={"Title"}></Input>
                            <Input ref={linkRef} placeholder={"Link"}></Input>
                        </div>
                        <h1>Type:</h1>
                        <div className="flex gap-1 justify-center pb-2">
                            <Button size="md" text="Youtube" variant={type === ContentType.Youtube ? "primary" : "secondary"} onClick={() => {
                                setType(ContentType.Youtube)
                            }}></Button>
                            <Button size="md" text="Twitter" variant={type === ContentType.Twitter ? "primary" : "secondary"} onClick={() => {
                                setType(ContentType.Twitter)
                            }}></Button>
                        </div>
                        <div className="flex justify-center">
                            <Button size="md" variant="primary" text="Submit" onClick={addContent} ></Button>
                        </div>
                    </span>
                </div>
            </div>
        </div>}
    </div>

}