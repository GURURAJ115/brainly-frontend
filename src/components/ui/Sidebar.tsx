import { useState } from "react";
import { BrainIcon } from "../../icons/BrainIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";
import { CrossIcon } from "../../icons/CrossIcon";
import { MenuIcon } from "../../icons/MenuIcon";

export function Sidebar() {
    const [isOpen, setIsOpen] = useState(false); // Default closed on mobile

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-4 left-4 z-50 bg-gray-200 dark:bg-gray-800 text-white p-2 rounded-md md:hidden"
            >
                {isOpen ? <CrossIcon /> : <MenuIcon/>}
            </button>
            
            <div
                className={`bg-white dark:bg-slate-500 h-screen border-r border-gray-200 w-40 fixed top-0 transition-transform duration-300 
                ${isOpen ? "translate-x-0" : "-translate-x-full"} 
                md:translate-x-0 md:block ${isOpen ? "block" : "hidden"}`}
            >
                <div className="flex text-2xl pt-4 px-6 items-center">
                    <div className="pr-2">
                        <BrainIcon />
                    </div>
                    <div>Brainly</div>
                </div>

                <div className="pt-4 px-6">
                    <SidebarItem text="Twitter" icon={<TwitterIcon />} />
                    <br />
                    <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
                </div>
            </div>
        </>
    );
}
