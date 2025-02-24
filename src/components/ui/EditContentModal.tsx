import { useState, useEffect } from "react";
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
export function EditContentModal({ open, onClose, content }) {
    const [title, setTitle] = useState(content?.title || ""); 
    const [link, setLink] = useState(content?.link || "");
    const [type, setType] = useState(content?.type || ContentType.Youtube);

    // Set values when modal opens for the first time
    useEffect(() => {
        if (open) {
            setTitle(content?.title || "");
            setLink(content?.link || "");
            setType(content?.type || ContentType.Youtube);
        }
    }, [open]); // Now runs only when `open` changes

    async function updateContent() {
        if (!title || !link) {
            alert("All fields are required");
            return;
        }

        try {
            await axios.put(
                `${BACKEND_URL}/api/v1/content`,
                { contentId: content._id, title, link, type },
                { headers: { Authorization: localStorage.getItem("token") } }
            );

            onClose();
        } catch (error) {
            console.error("Error updating content:", error);
            alert("Failed to update content.");
        }
    }

    return (
        open && (
            <div>
                <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center"></div>
                <div className="w-screen h-screen fixed top-0 left-0 flex justify-center">
                    <div className="flex flex-col justify-center">
                        <span className="bg-white dark:bg-slate-500 p-4 rounded">
                            <div className="flex justify-end">
                                <div onClick={onClose} className="cursor-pointer">
                                    <CrossIcon />
                                </div>
                            </div>
                            <div>
                                <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                                <Input value={link} onChange={(e) => setLink(e.target.value)} placeholder="Link" />
                            </div>
                            <h1>Type:</h1>
                            <div className="flex gap-1 justify-center pb-2">
                                <Button
                                    size="md"
                                    text="Youtube"
                                    variant={type === ContentType.Youtube ? "primary" : "secondary"}
                                    onClick={() => setType(ContentType.Youtube)}
                                />
                                <Button
                                    size="md"
                                    text="Twitter"
                                    variant={type === ContentType.Twitter ? "primary" : "secondary"}
                                    onClick={() => setType(ContentType.Twitter)}
                                />
                            </div>
                            <div className="flex justify-center">
                                <Button size="md" variant="primary" text="Update" onClick={updateContent} />
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        )
    );
}
