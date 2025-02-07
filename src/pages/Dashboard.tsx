import { useState } from 'react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { CreateContentModal } from '../components/ui/CreateContentModal'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Sidebar } from '../components/ui/Sidebar'

export function Dashboard() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <Sidebar />
            <div className='p-4 ml-72 min-h-screen bg-gray-100 border-2 border-gray-200'>
                <CreateContentModal open={modalOpen} onClose={() => {
                    setModalOpen(false);
                }} />
                <div className="flex justify-end gap-4">
                    <Button variant={'secondary'} startIcon={<ShareIcon size='md' />} size={'sm'} text={'Share Brain'} onClick={function (): void {
                        throw new Error('Function not implemented.')
                    }} ></Button>

                    <Button startIcon={<PlusIcon size={'md'} />} variant={'primary'} size={'sm'} text={'Add Content'} onClick={() => setModalOpen(true)}  ></Button>
                </div>

                <div className="flex gap-4">
                    <Card type='twitter' link="https://x.com/gururajscodes/status/1884261276475613428" title="First tweet"></Card>

                    <Card type='youtube' link="https://www.youtube.com/watch?v=2bH8oIAa4YQ" title="First Video"></Card>
                </div>

            </div>
        </div>
    )
}