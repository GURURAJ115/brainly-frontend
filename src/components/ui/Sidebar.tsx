import { BrainIcon } from "../../icons/BrainIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
    return <div className="bg-white pl-4 h-screen border-r border-gray-200 w-72 fixed left-0 top-0 pl-6 font-medium">
        <div className="flex text-2xl pt-4 items-center">
            <div className="pr-2">
                <BrainIcon />
            </div>
            <div>
                Brainly
            </div>
        </div>
        <div className="pt-4 ">
            <SidebarItem text="Twitter" icon={<TwitterIcon />} />
            <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
        </div>
    </div>
}