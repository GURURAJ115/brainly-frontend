import { useEffect, useState } from 'react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { CreateContentModal } from '../components/ui/CreateContentModal'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Sidebar } from '../components/ui/Sidebar'
import { useContent } from '../hooks/useContent'
import axios from 'axios'
import { BACKEND_URL } from '../config'

export function Dashboard() {
    const [modalOpen, setModalOpen] = useState(false);

    const {contents,refresh} = useContent();

    useEffect(()=>{
        refresh();
    },[modalOpen])

    return (
        <div>
            <Sidebar />
            <div className='p-4 ml-72 min-h-screen bg-gray-100 border-2 border-gray-200'>
                <CreateContentModal open={modalOpen} onClose={() => {
                    setModalOpen(false);
                }} />
                <div className="flex justify-end gap-4">
                <Button 
                    variant="secondary" 
                    startIcon={<ShareIcon size="md" />} 
                    size="sm" 
                    text="Share Brain" 
                    onClick={async () => {
                        try {
                            const response = await axios.post(
                                BACKEND_URL + "/api/v1/brain/share",
                                { share: true },
                                {
                                    headers: { Authorization: localStorage.getItem("token") }
                                }
                            );
                            console.log(response.data)
                            const hash = response.data?.hash; // Safely access hash
                            if (!hash) {
                                alert("Error: No share hash received.");
                                return;
                            }

                            const shareUrl = `http://localhost:5173/share/${hash}`;
                            alert(shareUrl);
                        } catch (error) {
                            console.error("Error sharing brain:", error);
                            alert("Failed to generate share link.");
                        }
                    }} 
                />


                    <Button startIcon={<PlusIcon size={'md'} />} variant={'primary'} size={'sm'} text={'Add Content'} onClick={() => setModalOpen(true)}  ></Button>
                </div>

                <div className="flex gap-4 flex-wrap">
                {contents.map(({ _id, type, link, title }) => (
                    <Card 
                        key={_id}
                        id={_id} 
                        type={type}
                        link={link}
                        title={title}
                    />
                ))}

                </div>

            </div>
        </div>
    )
}