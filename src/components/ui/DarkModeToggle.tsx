import { useEffect, useState } from "react";

export function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return document.documentElement.classList.contains("dark") ||
            localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);

    return (
        <button
            className="p-2 rounded bg-gray-200 dark:bg-gray-700 dark:text-white"
            onClick={() => setIsDarkMode(!isDarkMode)}
        >
            {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
    );
}
