import KeyBadge from "@/components/key-badge/index.jsx";

export default function Footer(){
    return (
        <div className="h-10">
            <div className="flex flex-col items-center justify-center gap-4 text-gray-500 text-sm select-none">
                <div>
                    <KeyBadge>tab</KeyBadge> - Restart Test
                </div>
                <div>
                    <KeyBadge>esc</KeyBadge> or <KeyBadge>cmd</KeyBadge> + <KeyBadge>shift</KeyBadge> + <KeyBadge>p</KeyBadge> -
                    command line
                </div>
            </div>
        </div>
    )
}