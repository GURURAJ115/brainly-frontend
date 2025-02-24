import axios from "axios";
import { BACKEND_URL } from "../../config";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";

//@ts-ignore
export function DeleteContentModal({ open, onClose, contentId }) {
    async function deleteContent() {
        if (!contentId) {
            alert("No content selected for deletion.");
            return;
        }

        try {
            await axios.delete(`${BACKEND_URL}/api/v1/content`, {
                data: { contentId },
                headers: { "Authorization": localStorage.getItem("token") }
            });

            onClose(); // Close modal after deletion
        } catch (error) {
            console.error("Error deleting content:", error);
            alert("Failed to delete content.");
        }
    }

    return open ? (
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
                        <h2>Are you sure you want to delete this content?</h2>
                        {/* <p>ID: {contentId}</p> */}
                        <div className="flex justify-center pt-2">
                            <Button size="md" variant="primary" text="Delete" onClick={deleteContent}></Button>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    ) : null;
}
