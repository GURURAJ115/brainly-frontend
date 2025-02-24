import { useState } from "react";
import { DeleteIcon } from "../../icons/DeleteIcon";
import { EditIcon } from "../../icons/EditIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { DeleteContentModal } from "./DeleteContentModal";
import { EditContentModal } from "./EditContentModal";


interface CardProps{
    id: string;
    title: string;
    link: string;
    type:"youtube"|"twitter"
}
export function Card({id,title,link,type,}: CardProps) {
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);

    return <div>
                <DeleteContentModal open={deleteModalOpen} onClose={() => setDeleteModalOpen(false)} contentId={id} />
                {editModalOpen && (
    <EditContentModal 
        open={editModalOpen} 
        onClose={() => setEditModalOpen(false)} 
        content={{ _id: id, title, link, type }} 
    />
)}


        <div className="p-4 bg-white rounded-md shadow-md border-slate-200 max-w-72 border min-h-48 min-w-56">
            <div className="flex justify-between ">
                <div className="flex items-center text-md">
                    <div className="text-gray-500 pr-2">
                        {type==="youtube"
                        && <YoutubeIcon></YoutubeIcon>}
                    </div>
                    <div>
                        {title}
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="text-gray-500 pr-2 cursor-pointer" onClick={() => setEditModalOpen(true)}
                    >
                        <EditIcon></EditIcon>
                    </div>
                    <div className="text-gray-500 cursor-pointer" onClick={() => setDeleteModalOpen(true)}>
                        <DeleteIcon></DeleteIcon>
                    </div>
                </div>
            </div>
            
            <div className="pt-4">
                {type === "youtube"&&<iframe className="w-full" src={link.replace("watch","embed").replace("?v=","/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

                {type==="twitter" &&<blockquote className="twitter-tweet">
                    <a href={link.replace("x.com","twitter.com")}></a>
                </blockquote>}
            </div>

            <div>
                
            </div>
        </div>
    </div>
}