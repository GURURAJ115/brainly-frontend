import { ReactElement } from "react";

export function SidebarItem({ text, icon }: {
    text: string;
    icon: ReactElement;
}) {
    return <div className="flex text-gray-500 dark:text-white py-2 cursor-pointer hover:bg-blue-900 dark:bg-gray-800 rounded max-w-48 pl-4">
        <div className="pr-2">
            {icon}
        </div>
        <div>
            {text}
        </div>
    </div>
}