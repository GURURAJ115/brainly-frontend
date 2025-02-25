import { DarkModeToggle } from "../components/ui/DarkModeToggle";
import { BackgroundLines } from "../components/ui/BackgroundLines";
import { BrainIcon } from "../icons/BrainIcon";

export default function LandingPage() {
    function redirect() {
        window.location.href = "/signup";
    }

    return (
        <BackgroundLines className="relative flex items-center justify-center flex-col px-4 min-h-screen">

            <div className="absolute top-4 left-6 flex items-center text-2xl text-gray-900 dark:text-white font-semibold">
                <BrainIcon />
                Brainly
            </div>

            <div className="absolute top-4 right-6">
                <DarkModeToggle />
            </div>

            <div className="text-center relative z-10 px-6">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                    Welcome to Brainly
                </h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
                    Organize and manage your online learning resources with ease. Store and share your favorite YouTube and Twitter content in one place.
                </p>
                <div className="mt-6">
                    <button
                        className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700"
                        onClick={redirect}
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </BackgroundLines>
    );
}
